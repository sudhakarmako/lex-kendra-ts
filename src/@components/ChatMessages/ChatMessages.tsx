import s from "./ChatMessages.module.scss";
import { ChatMessagesType } from "./types";
const ChatMessages: React.FC<ChatMessagesType> = ({ children }) => {
  return <div className={s.chat_messages}>{children}</div>;
};

export default ChatMessages;
