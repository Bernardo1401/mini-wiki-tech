import styles from "./Header.module.css";

export default function Header() {
    return (
        <div className={styles.header}>
            <h1>Pesquisa Técnica 🔍</h1>

            <ul>
                <li><a href="">Framework</a></li>
                <li><a href="">Meta-framework</a></li>
                <li><a href="">Bibliotecas de Estilos</a></li>
                <li><a href="">Next.js 15</a></li>
                <li><a href="/julia">App Router</a></li>
            </ul>
        </div>
    );
}
