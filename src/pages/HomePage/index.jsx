import { useContext } from "react";
import { DefaultTemplate } from "../../Components/DefaultTemplate";
import styles from "./style.module.scss"
import { UserContext } from "../../providers/UserContext";

export const HomePage = () => {

  const {user} = useContext(UserContext);

  return (
    <DefaultTemplate>
      <main className="container">
        <section className={styles.homeStyle}>
          <h1 className="title-1">Olá,{user?.name}</h1>
          <small className="title-3">{user?.course_module}</small>
        </section>
        <section className={styles.homeProjects}>
          <h2 className="title-1">Que pena! Estamos em desenvolvimento :(</h2>
          <p className="text-1">
          Nossa aplicação está em desenvolvimento, em breve teremos novidades
          </p>
        </section>
      </main>
    </DefaultTemplate>
  );
};
