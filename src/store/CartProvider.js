import CartContext from "./cart-context";
import { useReducer } from "react";

const actions = {
  ADD_CART_ITEM: "ADD_CART_ITEM",
  REMOVE_CART_ITEM: "REMOVE_CART_ITEM",
};
const defaultState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case actions.ADD_CART_ITEM:
      const newItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );
      const updatedTotalAmount =
        state.totalAmount + action.item.price * action.item.amount;
      // Item already exits, update item amount
      if (newItemIndex >= 0) {
        const updatedItem = {
          ...action.item,
          amount: state.items[newItemIndex].amount + action.item.amount,
        };
        const updatedItems = [...state.items];
        updatedItems[newItemIndex] = updatedItem;

        return { items: updatedItems, totalAmount: updatedTotalAmount };
      } else {
        // otherwise add the item to the list
        return {
          items: [...state.items, action.item],
          totalAmount: updatedTotalAmount,
        };
      }
    case actions.REMOVE_CART_ITEM:
      const itemIndex = state.items.findIndex((item) => item.id === action.id);
      let updatedItems = [];
      const theItem = state.items[itemIndex];
      if (theItem.amount === 1) {
        //   remove item from array
        updatedItems = state.items.filter((item) => item.id !== action.id);
      } else {
        const newItem = { ...theItem, amount: theItem.amount - 1 };
        updatedItems = [...state.items];
        updatedItems[itemIndex] = newItem;
      }
      const totalAmount = state.totalAmount - theItem.price;
      return { items: updatedItems, totalAmount };

    default:
      return defaultState;
  }
};
const CartProvider = (props) => {
  const [cartSate, dispatchCartAction] = useReducer(cartReducer, defaultState);
  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: actions.ADD_CART_ITEM, item });
  };
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: actions.REMOVE_CART_ITEM, id });
  };
  const cartContext = {
    items: cartSate.items,
    totalAmount: cartSate.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
