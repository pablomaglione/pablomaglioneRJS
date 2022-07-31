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

    console.log('Cart: ', cartItems);

    //Vacia el carrito
    const clearCart = () => setCartItems([]); 

    //Verifica si existe el producto en el carrito
    const isInCart = (id) => cartItems.find(product => product.id === id); 

    //Elimina producto del carrito
    const removeItem = (id) => setCartItems(cartItems.filter(product => product.id !== id)); 

    return (
        <CartContext.Provider value={{ cartItems, addItem, clearCart, isInCart, removeItem }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
