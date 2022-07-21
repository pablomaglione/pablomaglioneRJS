import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import dato from "../data/productos.json";
import { useParams } from "react-router-dom"

{/*function getProducto () {
    return new Promise ((res) => {
        setTimeout (() => res(dato),2000);}); 
}*/}

function ItemListContainer(props) {
    const { name } = useParams;
    const [items, setItems] = useState([]);
    const promise = new Promise((res) => {
        setTimeout(() => res(dato), 2000);
    });
    console.log(items);
    useEffect(() => {
        promise.then((res) => {
            const products = res;
            if (name) {
                setItems(products.filter((products) => products.category == name));
            } else {
                setItems(products);
            }
        });
        {/*  if(name){
            getProducto().then((resp) => setItems(resp.filter(prod => prod.category == name )));
        }else {getProducto().then((resp) => setItems(resp));}
    */}
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