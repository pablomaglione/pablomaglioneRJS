const Item = ({ producto }) => {
    const { nombre, detalle, precio, img } = producto;
    return (
        <div className="card d-flex" style={{ width: "15rem" }}>
             <img className="card-img-top" src={img} alt="Card image cap" />
            <div className="card-body d-flex flex-column justify-content-center">
                <h3 className="card-title">{nombre}</h3>
                <p className="card-title">{detalle}</p>
                <p className="card-text">{`$${precio}`}</p>
                <a href="#" className="btn btn-primary">Agregar Producto</a>
            </div>
        </div>
    );
};

export default Item;