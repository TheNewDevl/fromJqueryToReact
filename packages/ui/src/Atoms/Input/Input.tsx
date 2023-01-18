import style from "./Input.module.scss";
import { ChangeEvent } from "react";

interface InputProps {
  onChange?: (event: ChangeEvent<HTMLInputElement & HTMLSelectElement>) => void;
  type: string;
  label: string;
  value?: string | number;
  checked?: boolean;
  placeholder?: string;
  name?: string;
  innerRef?: any;
  list?: { [key: string]: string }[] | string[];
}

/**
 * Return an input element, associated with a label, both wrapped in a div
 * ### Usage
 * ```jsx
 * <Input handleChange={handleChange} type="text" label="Username" />
 * ```
 */
export const Input = ({ onChange, type, label, innerRef, list, ...rest }: InputProps) => {
  const id = label.toLowerCase().replace(" ", "-");

  return (
    <div ref={innerRef ?? null} className={style.Input}>
      <label htmlFor={id}>{label}</label>
      {type === "select" ? (
        <select className={style.Select} name={id} id={id} onChange={onChange} {...rest}>
          {list &&
            list.length > 0 &&
            list.map((item, i) => (
              <option key={i} value={typeof item === "object" ? item.abbreviation : item}>
                {typeof item === "object" ? item.name : item}
              </option>
            ))}
        </select>
      ) : (
        <input {...rest} onChange={onChange} type={type} id={id} />
      )}
    </div>
  );
};

/** Created by carlos on 14/01/2023 */
