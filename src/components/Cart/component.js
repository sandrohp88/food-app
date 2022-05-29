import { useContext } from "react";
import CartContext from "../../store/cart-context";
import styles from "./styles.module.css";
import Modal from "../Modal";
import CartItem from "../CartItem";
export const Cart = (props) => {
  const cartContext = useContext(CartContext);

  const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;
  const hasItems = totalAmount.length > 0;
  const cartItemsRemoveHandler = (id) => {
    cartContext.removeItem(id);
  };
  const cartAddItem = (item) => {
    cartContext.addItem({ ...item, amount: 1 });
  };
  const cartItems = cartContext.items.map((item) => (
    <CartItem
      key={item.id}
      name={item.name}
      amount={item.amount}
      price={item.price}
      onRemove={cartItemsRemoveHandler.bind(null, item.id)}
      onAdd={cartAddItem.bind(null, item)}
    />
  ));
  return (
    <Modal onClick={props.onCloseClicked}>
      <ul className={styles["cart-items"]}>{cartItems} </ul>
      <div className={styles.total}>
        <span>Total amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button
          className={styles["button--alt"]}
          onClick={props.onCloseClicked}
        >
          Close
        </button>
        {hasItems && <button className={styles.button}> Order</button>}
      </div>
    </Modal>
  );
};
