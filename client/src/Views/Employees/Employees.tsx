import style from "./Employees.module.scss";
import { DataTable, TableColumns } from "@carlco/data-table-react";
import { useContext } from "react";
import { EmployeesContext } from "../../context/EmployeesContext";
import { mockEmployees } from "../../utils/mocks";

const columns: TableColumns = [
  { title: "First Name", data: "firstName" },
  { title: "Last Name", data: "lastName" },
  { title: "Start Date", data: "startDate", type: "date" },
  { title: "Department", data: "department" },
  { title: "Date of Birth", data: "dateOfBirth", type: "date" },
  { title: "Street", data: "street" },
  { title: "City", data: "city" },
  { title: "State", data: "state" },
  { title: "Zip Code", data: "zipCode" },
];

export const Employees = () => {
  const { employees } = useContext(EmployeesContext);

  return (
    <div className={style.Employees}>
      <DataTable data={employees.length > 0 ? employees : mockEmployees} columns={columns} />
    </div>
  );
};

/** Created by carlos on 13/01/2023 */
