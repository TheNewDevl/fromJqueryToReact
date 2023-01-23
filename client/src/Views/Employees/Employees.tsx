import style from "./Employees.module.scss";
import { ReactTable } from "data-table-react";

interface EmployeesProps {}

export const Employees = ({}: EmployeesProps) => {
  return (
    <div className={style.Employees}>
      <ReactTable />
    </div>
  );
};

/** Created by carlos on 13/01/2023 */
