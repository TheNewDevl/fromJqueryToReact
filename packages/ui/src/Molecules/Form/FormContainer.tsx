import style from "./Form.module.scss";
import { PropsWithChildren } from "react";

export const FormContainer = ({ children }: PropsWithChildren) => {
  return <form className={style.Form}>{children}</form>;
};

/** Created by carlos on 14/01/2023 */
