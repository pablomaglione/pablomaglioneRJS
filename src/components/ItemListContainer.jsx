import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import dato from "../data/productos.json";
import { useParams } from "react-router-dom";


function ItemListContainer() {
    const { name } = useParams();
    const [items, setItems] = useState([]);

    const promise = new Promise((resolve) => {
        setTimeout(() => resolve(dato), 2000);
    });

    useEffect(() => {
        promise.then((res) => {
            const products = res;
            if (name) {
                setItems(products.filter((product) => product.categoria == name));
            } else {
                setItems(products);
            }
        });
    }, [name]);

    return (
        <>
            <div>
                <ItemList prod={items} />
            </div>
        </>
    );
};

export default ItemListContainer;