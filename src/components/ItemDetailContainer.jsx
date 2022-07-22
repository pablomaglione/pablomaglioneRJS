import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import dato from "../data/productos.json"
import { useParams } from "react-router-dom";


function ItemDetailContainer() {

    const [items, setItems] = useState([]);
    const {id} = useParams();
    const promise = new Promise((res) => {
        setTimeout(() => res(dato), 2000);
    })

    useEffect(() => {
        promise.then((res) => {
            const products = res.filter((prod) => prod.id == id);
                setItems(products[0]);
            })
    }, [id]);
    return (
        <>
            <div>
                <ItemDetail producto={items} />
            </div>
        </>
    );
};

export default ItemDetailContainer;