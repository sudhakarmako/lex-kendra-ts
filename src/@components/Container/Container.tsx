import s from "./Container.module.scss";
import { ContainerType } from "./types";
const Container: React.FC<ContainerType> = ({ children }) => {
  return <div className={s.container}>{children}</div>;
};

export default Container;
