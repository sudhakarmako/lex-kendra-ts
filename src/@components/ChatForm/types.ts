export type ChatFormType = {
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
};
