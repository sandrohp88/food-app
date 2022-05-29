import styles from "./styles.module.css";
import { MealItemForm } from "../MealItemForm/component";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
export const MealItem = ({ meal }) => {
  const price = `$${meal.price.toFixed(2)}`;
  const cartContext = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartContext.addItem({
      id: meal.id,
      name: meal.name,
      amount,
      price: meal.price,
    });
  };
  return (
    <li className={styles.meal}>
      <div>
        <h3>{meal.name}</h3>
        <div className={styles.description}>{meal.description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={meal.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};
