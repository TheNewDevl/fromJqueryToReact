import style from "./Employees.module.scss";
import { ReactTable } from "data-table-react";
import { useContext } from "react";
import { EmployeesContext } from "../../context/EmployeesContext";

interface EmployeesProps {}

export const Employees = ({}: EmployeesProps) => {
  const { employees } = useContext(EmployeesContext);

  return (
    <div className={style.Employees}>
      <ReactTable />
    </div>
  );
};

/** Created by carlos on 13/01/2023 */
