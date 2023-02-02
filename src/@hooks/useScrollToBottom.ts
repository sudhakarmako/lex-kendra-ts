import { useRef } from "react";

export const useScrollToBottom = () => {
  const element = useRef<any>(null);

  const scrollToBottom = () => {
    setTimeout(() => {
      element.current.scrollTop = element?.current?.scrollHeight;
    }, 100);
  };

  return {
    element,
    scrollToBottom,
  };
};
