import styles from "./styles.module.css";
import CartIcon from "../../assets/CartIcon";
export const CartButton = (props) => {
  return (
    <button className={styles.button}>
      <span className={styles.icon}>
        <CartIcon></CartIcon>
      </span>
      <span>Your cart</span>
      <span className={styles.badge}>5</span>
    </button>
  );
};
