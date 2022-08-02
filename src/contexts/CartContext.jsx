import React, { createContext, useState } from "react";

export const CartContext = createContext([]);

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    //Agrega producto al Carrito y/o actualiza cantidad si ya esta en el carrito
    const addItem = (item, quantity) => {
        if (isInCart(item.id)) {
            setCartItems(cartItems.map(product => { return product.id === item.id ? { ...product, quantity: product.quantity + quantity } : product }));
        }else {
            setCartItems([...cartItems, {...item, quantity}]);
        }
    };

    //Vacia el carrito
    const clearCart = () => setCartItems([]); 

    //Verifica si existe el producto en el carrito
    const isInCart = (id) => cartItems.find(product => product.id === id); 

    //Elimina producto del carrito
    const removeItem = (id) => setCartItems(cartItems.filter(product => product.id !== id)); 

    //Suma el precio de todos los productos
    const totalPrice = () => {
        return cartItems.reduce((previous, actual) => previous + actual.quantity * actual.precio, 0);
    }

    const totalProd = () =>
		cartItems.reduce(
			(acc, productoActual) => acc + productoActual.quantity,
			0,
		);

    return (
        <CartContext.Provider value={{  
            addItem, 
            clearCart, 
            isInCart, 
            removeItem, 
            totalPrice,
            totalProd,
            cartItems
            }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
