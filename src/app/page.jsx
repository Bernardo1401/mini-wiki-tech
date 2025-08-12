import styles from "./page.module.css";
import Header from "../componentes/Header/Header"
import Card from "../componentes/Card/Card";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.main}>
        <Card
        titulo="1. Definição"
        info="Um meta-framework é um framework que não parte do zero, mas sim constrói em cima de outro framework ou conjunto de bibliotecas, adicionando abstrações, ferramentas e padrões para facilitar o desenvolvimento.
Ele funciona como um framework de frameworks, oferecendo estrutura, convenções e integrações pré-configuradas.
Exemplo simples: enquanto um framework fornece tijolos, o meta-framework entrega a casa parcialmente pronta, com encanamento, energia e portas instaladas."
        />
      </div>
    </div>
  );
}
