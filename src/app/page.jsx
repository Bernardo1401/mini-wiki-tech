import styles from "./page.module.css";
import Header from "../componentes/Header/Header"

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
        <h2>Equipe de Pesquisadores 🕵🏾‍♂️</h2>
      <div className={styles.main}>

        <div className={styles.perfil}>
          <img src="https://avatars.githubusercontent.com/u/158209610?v=4" alt="" />
          <h3>Bernardo</h3>
        </div>

        <div className={styles.perfil}>
          <img src="https://avatars.githubusercontent.com/u/197772966?v=4" alt="" />
          <h3>Caio</h3>
        </div>

        <div className={styles.perfil}>
          <img src="https://avatars.githubusercontent.com/u/158210661?v=4" alt="" />
          <h3>Julia</h3>
        </div>

        <div className={styles.perfil}>
          <img src="https://avatars.githubusercontent.com/u/158209483?v=4" alt="" />
          <h3>Kevin</h3>
        </div>


        <div className={styles.perfil}>
          <img src="https://avatars.githubusercontent.com/u/158210596?v=4" alt="" />
          <h3>Luiza</h3>
        </div>
      </div>
    </div>
  );
}
