import dayjs from "dayjs";

export type ChatBubbleType = {
  by: "lex" | "user";
  message: string | object | undefined;
  date: Date | string | dayjs.Dayjs;
};
