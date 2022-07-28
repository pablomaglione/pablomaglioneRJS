import { useState, useContext } from "react";
import ItemCount from "./ItemCount"
import { Link} from "react-router-dom";
import {CartContext} from "../contexts/CartContext";

const ItemDetail = ({ producto }) => {
    const [amount, setAmount] = useState(0);
    const {setCartItems} = useContext(CartContext);
    const { nombre, detalle, precio, img, stock, categoria} = producto;

    const onAdd = (amount) => {
        setAmount(amount);
        setCartItems((prevState) => [...prevState, producto]);
    };

    return (
        <div className="card rounded border-0" style={{ width: "15rem" }}>
            <div className="card-body p-4 d-flex flex-column justify-content-center">
                <img className="card-img-top" src={img} alt="Card image cap"/>
                <h2 className="card-title text-center">{nombre}</h2>
                <p className="card-detalle small text-center text-muted font-italic">{detalle}</p>
                <p className="card-precio text-center card-text">{`$${precio}`}</p>
                <p className="card-detalle small text-center text-muted font-italic">Categoria: {categoria}</p>
                {amount == 0 ? (<ItemCount stock={stock} initial={1} onAdd={onAdd}/>) : (<p className="flex flex-col text-center w-full mb-12">{amount} Producto Agregado </p>)}
                <div className="flex flex-col text-center w-full mb-12" style={{padding: "0.5rem"}}>
                    <Link to="/cart">
                        <button className="third add btn-agregar btn btn-primary"> Finalizar Compra </button>
                    </Link> 
                </div>   
                                  
            </div>
        </div>
    );
};

export default ItemDetail;