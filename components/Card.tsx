import styles from "../styles/card.module.css";

interface Card {
  bgColor?: string;
  children?: any;
}

export default function Card(props: Card) {
  return (
    <div
      className={styles.card}
      style={{ backgroundColor: props.bgColor ?? "#fff" }}
    >
      {props.children}
    </div>
  );
}
