import { Employee } from "./Form";

export interface InputsList {
  firstInputs: { label: string; type: string; name: string; placeholder?: string; value: string; minAge?: number }[];
  addressInputs: { label: string; type: string; name: string; placeholder?: string; value: string | number }[];
  department: { label: string; type: string; name: string; value: string };
}

export const inputsList = (employee: Employee): InputsList => ({
  firstInputs: [
    { label: "First Name", type: "text", name: "firstName", placeholder: "John", value: employee.firstName },
    { label: "Last Name", type: "text", name: "lastName", placeholder: "Doe", value: employee.lastName },
    {
      label: "Date of Birth",
      type: "date",
      name: "dateOfBirth",
      placeholder: "01/01/2000",
      value: employee.dateOfBirth,
      minAge: 16,
    },
    {
      label: "Start Date",
      type: "date",
      name: "startDate",
      placeholder: "01/01/2021",
      value: employee.startDate,
    },
  ],
  addressInputs: [
    { label: "Street", type: "text", name: "street", placeholder: "Enter your street", value: employee.street },
    { label: "City", type: "text", name: "city", placeholder: "Enter your city", value: employee.city },
    { label: "State", type: "select", name: "state", value: employee.state },
    { label: "Zip Code", type: "number", name: "zipCode", placeholder: "Enter your zip code", value: employee.zipCode },
  ],
  department: {
    label: "Department",
    type: "select",
    name: "department",
    value: employee.department,
  },
});
