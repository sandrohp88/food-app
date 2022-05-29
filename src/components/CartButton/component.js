import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import styles from "./styles.module.css";
import CartIcon from "../../assets/CartIcon";
export const CartButton = (props) => {
  const cartContext = useContext(CartContext);
  const numberOfCartItems = cartContext.items.reduce((currentItem, item) => {
    return currentItem + item.amount;
  }, 0);
  const [buttonAnimated, setButtonAnimation] = useState(false);
  const { items } = cartContext;
  const btnClasses = `${styles.button} ${buttonAnimated ? styles.bump : ""} `;
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setButtonAnimation(true);
    const timer = setTimeout(() => {
      setButtonAnimation(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon></CartIcon>
      </span>
      <span>Your cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
};
