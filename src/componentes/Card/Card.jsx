import styles from "./Card.module.css";

export default function Card ({ titulo, info }) {
    return (
        <div className={styles.card}>
            <h2>{titulo}</h2>
            <p>{info}</p>
        </div>
    );
}
