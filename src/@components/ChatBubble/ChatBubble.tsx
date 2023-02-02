import classNames from "classnames";
import { awsConfig } from "config";
import dayjs from "dayjs";
import s from "./ChatBubble.module.scss";
import { motion } from "framer-motion";

import { ChatBubbleType } from "./types";
const ChatBubble: React.FC<ChatBubbleType> = ({ by, message, date }) => {
  const variants = {
    out: {
      opacity: 0.25,
      y: 10,
      scale: 0.99,
      transition: {
        duration: 0.3,
      },
    },
    in: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  const renderMessage = (
    message: string | object | undefined,
    type: string
  ): string => {
    if (type === awsConfig.by.user) return String(message);
    if (type === awsConfig.by.lex && typeof message === "string")
      return message;
    return JSON.stringify(message);
  };
  return (
    <motion.div
      variants={variants}
      animate="in"
      initial="out"
      exit="out"
      className={classNames(
        s.chat_bubble,
        by === awsConfig.by.lex ? s.chat_left : s.chat_right
      )}
    >
      <p>{renderMessage(message, by)}</p>
      <sub>{dayjs(date).format("HH:mm a")}</sub>
    </motion.div>
  );
};

export default ChatBubble;
