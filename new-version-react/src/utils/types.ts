export interface Employee {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  startDate: string;
  department: string;
  street: string;
  city: string;
  state: string;
  zipCode: number;
}

export interface EmployeesContextType {
  employees: Employee[];
  updateEmployeesList: (employees: Employee) => void;
}
