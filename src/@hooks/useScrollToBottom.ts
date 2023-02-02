import { useRef } from "react";

export const useScrollToBottom = () => {
  const element = useRef<React.LegacyRef<HTMLElement>>(null);

  const scrollToBottom = () => {
    // @ts-ignore
    element?.current?.scrollTop = element?.current?.scrollHeight;
  };
  return {
    element,
    scrollToBottom,
  };
};
