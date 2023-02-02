export type ChatBubbleType = {
  by: "lex" | "user";
  message: string | object;
  date: Date | string;
};
