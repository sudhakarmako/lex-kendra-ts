import s from "./ChatHeader.module.scss";
import { ChatHedader } from "./types";

const ChatHeader: React.FC<ChatHedader> = ({ children }) => {
  return <div className={s.chat_header}>{children}</div>;
};

export default ChatHeader;
