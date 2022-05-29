import styles from "./styles.module.css";
export const Card = (props) => {
  return <div className={styles.card}>{props.children}</div>;
};
