import style from "./Home.module.scss";
import { Link, Title } from "@fromjquerytoreact/ui";
import { Form } from "../../Components/Form/Form";

interface HomeProps {}

export const Home = ({}: HomeProps) => {
  return (
    <main className={style.Home}>
      <Link styles={{ margin: "auto", display: "block" }} path={"employees"} children={"View current employees"} />
      <Title color={"#498f35"} margin={"1rem"} textAlign={"center"} level={"2"} children={"Create Employee"} />
      <Form />
    </main>
  );
};

/** Created by carlos on 13/01/2023 */
