import s from "./ChatMessages.module.scss";
import { ChatMessagesType } from "./types";
const ChatMessages: React.FC<ChatMessagesType> = ({ children, refElement }) => {
  return (
    <div className={s.chat_messages} ref={refElement}>
      {children}
    </div>
  );
};

export default ChatMessages;
