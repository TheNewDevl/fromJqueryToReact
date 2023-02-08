import { createContext, useState } from "react";
import { Employee, EmployeesContextType } from "../utils/types";

export const EmployeesContext = createContext<EmployeesContextType>({} as EmployeesContextType);

export const EmployeesProvider = ({ children }: any) => {
  const [employees, setEmployees] = useState<Employee[]>([]);

  const updateEmployeesList = (employee: Employee) => {
    setEmployees([...employees, employee]);
  };

  return <EmployeesContext.Provider value={{ employees, updateEmployeesList }}>{children}</EmployeesContext.Provider>;
};
