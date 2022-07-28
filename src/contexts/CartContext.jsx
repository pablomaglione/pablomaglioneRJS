import React, {createContext, useState} from "react";

export const CartContext = createContext();

const CartProvider = (props) => {
    const [cartItems, setCartItems] = useState([]);

    return(
        <CartContext.CartProvider value={{cartItems, setCartItems}}>
            {props.children}
        </CartContext.CartProvider>
    );
};

export default CartProvider;
