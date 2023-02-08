import style from "./Header.module.scss";
import { Title } from "../../Atoms/Title/Title";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className={style.Header}>
      <Link to={"/"}>
        <Title level={"1"}>
          <span className={style.coloredSpan}>HT</span>net
        </Title>
      </Link>
    </header>
  );
};

/** Created by carlos on 13/01/2023 */
