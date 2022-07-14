import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import dato from "../data/productos.json";

function ItemListContainer (props) {
    
    const [items, setItems] = useState([]);
    
    console.log(items);
    useEffect(() => {
        let promiseItems = new Promise ((res) => {
            setTimeout (() => res(dato),2000);});   

        promiseItems.then((resp) => setItems(dato));
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