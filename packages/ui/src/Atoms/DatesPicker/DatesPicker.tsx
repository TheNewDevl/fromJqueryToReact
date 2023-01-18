import style from "./DatePicker.module.scss";
import DatePicker from "react-datepicker";
import { getYear, getMonth, subYears } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import { Input } from "../Input/Input";
import { useRef, MouseEvent } from "react";

interface DatePickerProps {
  label: string;
  onChange: (date: Date) => void;
  value: string;
  minAge?: number;
}

/** Return an array of numbers from start to end */
const range = (start: number, end: number) => new Array(end - start + 1).fill(undefined).map((_, i) => i + start);

/** Prevent default behavior of the event and execute the callback function */
const preventDefault = (e: MouseEvent, fn: Function) => {
  e.preventDefault();
  e.stopPropagation();
  fn();
};

/**
 * A wrapper for the DatePicker component from react-datepicker
 * ```jsx
 * <DatesPicker label="Date of birth" onChange={setDateOfBirth} value={dateOfBirth} minAge={18} />
 * ```
 */
export const DatesPicker = ({ onChange, value, label, minAge }: DatePickerProps) => {
  const inputRef = useRef<HTMLDivElement>();
  //Years list
  const years = range(1920, getYear(new Date()));
  //Months list
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <DatePicker
      popperPlacement="auto"
      customInputRef={"innerRef"}
      dateFormat={"dd/MM/yyyy"}
      excludeDateIntervals={minAge ? [{ start: subYears(new Date(), minAge), end: new Date() }] : undefined}
      selected={value ? new Date(value) : null}
      customInput={<Input innerRef={inputRef.current} type={"text"} value={`${value}`} label={label} />}
      onChange={(date: Date) => onChange(date)}
      renderCustomHeader={({
        date,
        changeYear,
        changeMonth,
        decreaseMonth,
        increaseMonth,
        prevMonthButtonDisabled,
        nextMonthButtonDisabled,
      }) => (
        <div style={{ margin: 10, display: "flex", justifyContent: "center" }}>
          <button
            className={style.buttons}
            onClick={(e) => preventDefault(e, decreaseMonth)}
            disabled={prevMonthButtonDisabled}
          >
            {"<"}
          </button>
          <select
            className={style.buttons}
            value={getYear(date)}
            onChange={({ target: { value } }) => changeYear(+value)}
          >
            {years.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <select
            className={style.buttons}
            value={months[getMonth(date)]}
            onChange={({ target: { value } }) => changeMonth(months.indexOf(value))}
          >
            {months.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <button
            className={style.buttons}
            onClick={(e) => preventDefault(e, increaseMonth)}
            disabled={nextMonthButtonDisabled}
          >
            {">"}
          </button>
        </div>
      )}
    />
  );
};

/** Created by carlos on 14/01/2023 */
