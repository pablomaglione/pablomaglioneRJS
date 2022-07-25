import { Link } from "react-router-dom";

const Item = ({ producto }) => {
    const { nombre, detalle, precio, img, id, categoria } = producto;
    return (
        <div className="card rounded border-0" style={{ width: "15rem" }}>
            <div className="card-body p-4 d-flex flex-column align-items-center justify-content-center">
                <img className="card-img-top" src={img} alt="Card image cap"/>
                <h2 className="card-title text-center">{nombre}</h2>
                <p className="card-detalle small text-center text-muted font-italic">{detalle}</p>
                <p className="card-precio text-center card-text">{`$${precio}`}</p>
                <Link to={`/item/${id}`}><button id={id} className="third add btn-agregar btn btn-primary">Ver Más<i aria-hidden="true"></i></button></Link>
            </div>
        </div>
    );
};

export default Item;

