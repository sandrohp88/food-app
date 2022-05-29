import Header from "../Header";
import Meals from "../Meals";
import CartProvider from "../../store/CartProvider";
import Cart from "../Cart";
import { useState } from "react";
const App = () => {
  const [isCartShown, setIsCartShown] = useState(false);
  const showCartHandler = () => {
    setIsCartShown(true);
  };
  const hideCartHandler = () => {
    setIsCartShown(false);
  };
  return (
    <CartProvider>
      {isCartShown && <Cart onCloseClicked={hideCartHandler} />}
      <Header onCartClicked={showCartHandler}></Header>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
};

export default App;
