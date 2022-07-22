import React from 'react';
import Item from "./Item";

const ItemList = ({prod}) => {
    return (
        <>
            <h1 className="d-flex justify-content-center">Productos</h1>
            <div className="container">
                <div className="row">
                    {prod.map(prodItem => (
                        <div key={prodItem.id} className="col-sm">
                            <Item producto={prodItem} />
                        </div>
                    ))
                    }
                </div>
            </div>
        </>
    );
};

export default ItemList;
