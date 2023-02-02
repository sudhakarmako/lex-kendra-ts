import s from "./ChatContainer.module.scss";
import { ChatContainerType } from "./types";
const ChatContainer: React.FC<ChatContainerType> = ({ children }) => {
  return <div className={s.chat_container}>{children}</div>;
};

export default ChatContainer;
