import s from "./ChatForm.module.scss";
import { ChatFormType } from "./types";

const ChatForm: React.FC<ChatFormType> = ({ onSubmit, text, setText }) => {
  return (
    <div className={s.chat_form}>
      <form onSubmit={(e) => onSubmit(e)}>
        <input
          type="text"
          name="message"
          id="message"
          placeholder="Write your message here.."
          value={text}
          onChange={(e) => setText(e?.target?.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatForm;
