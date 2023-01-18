import { Button, DatesPicker, FormContainer, Input } from "@fromjquerytoreact/ui";
import { ChangeEvent, useState, MouseEvent } from "react";
import { states } from "./states";
import { inputsList } from "./inputsList";
import { departmentsList } from "./departmentsList";

export interface Employee {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  startDate: string;
  street: string;
  city: string;
  state: string;
  zipCode: number;
  department: string;
}

export const Form = () => {
  const [employee, setEmployee] = useState<Employee>({
    dateOfBirth: "",
    startDate: "",
  } as Employee);

  const { firstInputs, addressInputs, department } = inputsList(employee);

  // Employee state handlers
  const handleEmployeeChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };
  const dateHandlers = (type: string, date: Date) => setEmployee({ ...employee, [type]: date });

  const handleSubmit = (e: MouseEvent) => {
    e.preventDefault();
    console.log(employee);
  };

  return (
    <FormContainer>
      {firstInputs.map((i, key) =>
        i.type === "date" ? (
          <DatesPicker key={key} {...i} onChange={(date) => dateHandlers(i.name, date)} />
        ) : (
          <Input key={key} {...i} onChange={handleEmployeeChange} />
        )
      )}

      <fieldset>
        <legend>Address</legend>
        {addressInputs.map((i, key) => (
          <Input key={key} {...i} list={i.type === "select" ? states : undefined} onChange={handleEmployeeChange} />
        ))}
      </fieldset>
      <Input {...department} list={departmentsList} onChange={handleEmployeeChange} />
      <Button onClick={handleSubmit} children={"SAVE"} />
    </FormContainer>
  );
};

/** Created by carlos on 14/01/2023 */
