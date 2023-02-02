import {
  ChatBubble,
  ChatContainer,
  ChatForm,
  ChatHeader,
  ChatMessages,
  Container,
} from "@components";
import dayjs from "dayjs";
import { useState } from "react";

const App: React.FC = () => {
  const [message, setMessage] = useState<string>("");
  const handleSubmit = () => {
    return null;
  };
  return (
    <Container>
      <ChatContainer>
        <ChatHeader>
          <h3>Lex Kendra Chat Bot</h3>
        </ChatHeader>
        <ChatMessages>
          <ChatBubble
            message={"some message"}
            date={dayjs().toISOString()}
            by="lex"
          />
        </ChatMessages>
        <ChatForm
          text={message}
          setText={setMessage}
          onSubmit={() => handleSubmit()}
        />
      </ChatContainer>
    </Container>
  );
};

export default App;
