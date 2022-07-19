import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import dato from "../data/productos.json";


function getProducto () {
    return new Promise ((res) => {
        setTimeout (() => res(dato),2000);}); 
}

function ItemListContainer (props) {

    const [items, setItems] = useState([]);
    
    useEffect(() => {
        getProducto().then((resp) => setItems(resp[2]));
    }, []);
    
    return(
        <>
            <div>
                <ItemDetail producto={items} />
            </div>
        </>
    );
};

export default ItemListContainer;