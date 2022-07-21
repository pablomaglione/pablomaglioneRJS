import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";


function ItemDetailContainer(props) {

    const [items, setItems] = useState([]);
    const params = useParams();
    const promise = new Promise((res) => {
        setTimeout(() => res(ItemDetail), 2000);
    })

    useEffect(() => {
        promise.then((resp) => {
            const foundItem = resp.filter((items) => items.id == params.id);
            setItems(foundItem[0]);
        });
    }, []);

    return (
        <>
            {<div>
                <ItemDetail producto={items} />
            </div>}
        </>
    );
};

export default ItemDetailContainer;