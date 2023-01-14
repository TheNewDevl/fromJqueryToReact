import style from "./Header.module.scss";
import logo from "../../assets/logohrnet.jpeg";
import { Image } from "../../Atoms/Image/Image";
import { Title } from "../../Atoms/Title/Title";
import { Link } from "react-router-dom";

interface HeaderProps {}

export const Header = ({}: HeaderProps) => {
  return (
    <header className={style.Header}>
      <div className={style.logoContainer}>
        <Link to={"/"}>
          <Image src={logo} alt={"hrnet logo"} />
        </Link>
      </div>
      <Title level={"1"}>
        <span className={style.coloredSpan}>HT</span>net
      </Title>
    </header>
  );
};

/** Created by carlos on 13/01/2023 */
