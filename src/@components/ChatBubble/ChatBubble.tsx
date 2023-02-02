import classNames from "classnames";
import { awsConfig } from "config";
import dayjs from "dayjs";
import s from "./ChatBubble.module.scss";
import { ChatBubbleType } from "./types";
const ChatBubble: React.FC<ChatBubbleType> = ({ by, message, date }) => {
  const renderMessage = (message: string | object, type: string): string => {
    if (type === awsConfig.by.user) return String(message);
    if (type === awsConfig.by.lex && typeof message === "string")
      return message;
    return JSON.stringify(message);
  };
  return (
    <div
      className={classNames(
        s.chat_bubble,
        by === awsConfig.by.lex ? s.chat_left : s.chat_right
      )}
    >
      <p>{renderMessage(message, by)}</p>
      <sub>{dayjs(date).format("HH:mm a")}</sub>
    </div>
  );
};

export default ChatBubble;
