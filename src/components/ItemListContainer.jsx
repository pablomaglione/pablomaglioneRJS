import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import dato from "../data/productos.json";

function getProducto () {
    return new Promise ((res) => {
        setTimeout (() => res(dato),2000);}); 
}

function ItemListContainer () {

    const [items, setItems] = useState([]);
    
    useEffect(() => {
        getProducto().then((resp) => setItems(resp));
    }, []);
    return(
        <>
            <div>
                <ItemList prod={items} />
            </div>
        </>
    );
};

export default ItemListContainer;