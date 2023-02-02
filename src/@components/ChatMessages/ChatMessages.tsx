import s from "./ChatMessages.module.scss";
import { ChatMessagesType } from "./types";
const ChatMessages: React.FC<ChatMessagesType> = ({ children, ref }) => {
  return (
    <div className={s.chat_messages} ref={ref}>
      {children}
    </div>
  );
};

export default ChatMessages;
