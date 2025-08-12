import styles from "./Header.module.css";

export default function Header() {
    return (
        <div className={styles.header}>
            <h1>Pesquisa Técnica 🔍</h1>

            <ul>
                <li><a href="../framework">Framework</a></li>
                <li><a href="/meta-framework">Meta-framework</a></li>
                <li><a href="">Bibliotecas de Estilos</a></li>
                <li><a href="/nextjs15">Next.js 15</a></li>
                <li><a href="">App Router</a></li>
            </ul>
        </div>
    );
}
