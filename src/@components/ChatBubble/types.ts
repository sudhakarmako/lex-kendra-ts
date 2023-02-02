export type ChatBubbleType = {
  by: "lex" | "user";
  message: string | object | undefined;
  date: Date | string;
};
