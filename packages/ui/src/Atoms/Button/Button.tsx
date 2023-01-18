import style from "./Button.module.scss";
import { MouseEvent, ReactNode } from "react";

export interface ButtonProps {
  children: ReactNode;
  onClick: (event: MouseEvent) => void;
}

export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className={style.Button}>
      {children}
    </button>
  );
};

/** Created by carlos on 17/01/2023 */
