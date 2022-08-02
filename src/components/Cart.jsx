import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import CartItem from "./CartItem";
import Swal from 'sweetalert2'

const Cart = () => {
    const { cartItems, totalPrice } = useContext(CartContext);
    const cant = Object.keys(cartItems).length; //Si no hacia obtenia de esta forma la cantidad me daba undifined

    if (cant === 0) {
        return (
            <>
                <div className="d-flex flex-column align-items-center">
                    <p>No hay elementos en el cariito</p>
                    <Link to='/'><button className="third add btn-agregar btn btn-primary">Realizar Compras<i aria-hidden="true"></i></button></Link>
                </div>

            </>
        );
    } else {
        return (
            <>
                {
                    cartItems.map((prod) => <CartItem key={prod.id} producto={prod} />)
                }
                Total Compra: $ {totalPrice()}
            </>
        )
    }
}

export default Cart;