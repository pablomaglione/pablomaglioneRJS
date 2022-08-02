import React, {useContext} from "react";
import { CartContext } from "../contexts/CartContext";

const CartItems = ({ producto }) => {
    const { removeItem } = useContext(CartContext);

    return (
        <div className='d-flex mt-3 p-4 items rounded border-bottom border-top align-items-center justify-content-around'>
            <img className="rounded border" src={producto.img} alt={producto.nombre} style={{height: "300px"}}/>
            <div>
                <p>{producto.nombre}</p>
                <p>{producto.detalle}</p>
                <p>Cantidad: {producto.quantity}</p>
                <p>Precio u.: {producto.precio}</p>
                <p>Subtotal: ${producto.quantity * producto.precio}</p>
                <button onClick={() => removeItem(producto.id)}>Eliminar</button>
            </div>
        </div>
    );
}

export default CartItems;