import styles from "./page.module.css";
import Header from "../componentes/Header/Header"

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.main}>
        <h1 className={styles.title}>Welcome to Our Website</h1>
      </div>
    </div>
  );
}
