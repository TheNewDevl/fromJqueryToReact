import { Route, Routes } from "react-router-dom";
import { Employees } from "../Views/Employees/Employees";
import { Home } from "../Views/Home/Home";
import { Error } from "../Views/Error/Error";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={"/employees"} element={<Employees />} />
      <Route path={"/"} element={<Home />} />
      <Route path={"*"} element={<Error />} />
    </Routes>
  );
};
