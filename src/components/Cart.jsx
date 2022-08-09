import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import CartItem from "./CartItem";
import { getFirestore, collection, addDoc} from "firebase/firestore";
//import Swal from 'sweetalert2'

const Cart = () => {
    const { cartItems, totalPrice, sendOrder, clearCart } = useContext(CartContext);
    const date = new Date()

    const order = {
        buyer: {
            name: 'Pablo',
            email: 'pablo@gmail.com',
            phone: '222222',
            address: 'Santa Fe',
        },
        items: cartItems.map(producto => ({ id: producto.id, nombre: producto.nombre, detalle: producto.detalle, precio: producto.precio, quantity: producto.quantity, fecha: date.toLocaleDateString() })),
        total: totalPrice(),
    }
    
    const handleComprar = () => {
 
        const orderDB = getFirestore();
        const orderCollection = collection(orderDB, "orders");

        addDoc(orderCollection, order)
            .then(({ id }) => console.log(id))
            .then(sendOrder(order))
            .then(clearCart())
    }

    if (cartItems.length === 0) {
        return (
            <>
                <div className="d-flex flex-column align-items-center">
                    <p>No hay elementos en el carrito</p>
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

                <div className="flex flex-col text-center w-full mb-12" style={{ padding: "0.5rem" }}>
                    <Link to="/compra">
                        <button className="third add btn-agregar btn btn-primary" onClick={handleComprar}>Finalizar Compra</button>
                    </Link>
                </div>
            </>
        )
    }
}

export default Cart;