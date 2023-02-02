import {
  ChatBubble,
  ChatBubbleType,
  ChatContainer,
  ChatForm,
  ChatHeader,
  ChatMessages,
  Container,
} from "@components";
import { useScrollToBottom } from "@hooks";
import { awsConfig } from "config";
import { useState } from "react";
import dayjs from "dayjs";
import { lexRunTime } from "config/aws-config";
import { String } from "aws-sdk/clients/batch";

const App: React.FC = () => {
  const [message, setMessage] = useState<string>("");
  const { element, scrollToBottom } = useScrollToBottom();
  const [sessionAttributes, setSessionAttributes] = useState({});
  const [conversation, setConversation] = useState<ChatBubbleType[]>([
    {
      message: "Welcome to lex bot",
      by: "lex",
      date: dayjs().toISOString(),
    },
  ]);

  const pushConvesation = (convestation: ChatBubbleType) => {
    setConversation((prevState) => [...prevState, convestation]);
  };

  const sendToLex = (inputText: String) => {
    var params: any = {
      botAlias: awsConfig.botAlias,
      botName: awsConfig.botName,
      inputText,
      userId: awsConfig.lexUserId,
      sessionAttributes,
    };

    lexRunTime.postText(params, function (err, data: any) {
      if (err) {
        console.log(err, err.stack);
        pushConvesation({
          message: "Error:  " + err.message + " (see console for details)",
          by: "lex",
          date: dayjs().toISOString(),
        });
      }
      setSessionAttributes(data?.sessionAttributes);
      pushConvesation({
        message: data?.message,
        by: "lex",
        date: dayjs().toISOString(),
      });
      scrollToBottom();
    });
    return false;
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!message) return null;
    pushConvesation({
      message: message.trim(),
      by: "user",
      date: dayjs().toISOString(),
    });
    scrollToBottom();
    sendToLex(message.trim());
    setMessage("");
  };
  return (
    <Container>
      <ChatContainer>
        <ChatHeader>
          <h3>Lex Kendra Chat Bot</h3>
        </ChatHeader>
        <ChatMessages ref={element}>
          {!!conversation?.length &&
            conversation.map(({ message, date, by }, idx) => (
              <ChatBubble
                message={message}
                date={dayjs(date).format("HH:mm a")}
                by={by}
              />
            ))}
        </ChatMessages>
        <ChatForm
          text={message}
          setText={setMessage}
          onSubmit={(e) => handleSubmit(e)}
        />
      </ChatContainer>
    </Container>
  );
};

export default App;
