import React from "react";
import { useContext} from "react";
import { CartContext } from "../contexts/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-widget">
      <span className="qty-display">{cartItems.lenght}</span>
      <FontAwesomeIcon icon={faShoppingCart} />
    </div>
  );
};
export default CartWidget;