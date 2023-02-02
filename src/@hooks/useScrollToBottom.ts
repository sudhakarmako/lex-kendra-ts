import { useRef } from "react";

export const useScrollToBottom = () => {
  const element = useRef<any>(null);

  const scrollToBottom = () =>
    (element.current.scrollTop = element?.current?.scrollHeight);

  return {
    element,
    scrollToBottom,
  };
};
