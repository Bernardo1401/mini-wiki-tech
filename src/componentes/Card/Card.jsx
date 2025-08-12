import styles from "./Card.module.css";

export default function Card ({ titulo, info, info2, info3, info4 }) {
    return (
        <div className={styles.card}>
            <h2>{titulo}</h2>
            <p>{info}</p>
            <p>{info2}</p>
            <p>{info3}</p>
            <p>{info4}</p>
        </div>
    );
}
