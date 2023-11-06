import { Link } from "react-router-dom";
import Logo from "../../assets/img/Logo.svg";
import styles from "./style.module.scss"
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";

export const Header = () => {

  const {userLogout} = useContext(UserContext); 

  return (
    <header>
      <div className={styles.headerStyle}>
        <img src={Logo} alt="logo" />
        <Link to="/login">
          <button className={styles.btnHeader} onClick={() => userLogout()}>voltar</button>
        </Link>
      </div>
    </header>
  );
};
