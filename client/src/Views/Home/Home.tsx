import style from "./Home.module.scss";
import { Link } from "@fromjquerytoreact/ui";

interface HomeProps {}

export const Home = ({}: HomeProps) => {
  return (
    <main className={style.Home}>
      <Link styles={{ margin: "auto", display: "block" }} path={"employees"} children={"View current employees"} />
      <input type="date" />
    </main>
  );
};

/** Created by carlos on 13/01/2023 */
