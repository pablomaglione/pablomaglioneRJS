import React from "react";
import { useContext} from "react";
import { CartContext } from "../contexts/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {
  const { cartItems } = useContext(CartContext);

  const totalProd = () =>
		cartItems.reduce(
			(acc, productoActual) => acc + productoActual.quantity,
			0,
		);

    console.log ("Cant: ", totalProd());

  return (
    <div className="ps-4 d-flex align-items-center flex-column">
      <span className="qty-display">{totalProd() || ""} </span>
      <FontAwesomeIcon icon={faShoppingCart} />
    </div>
  );
};
export default CartWidget;