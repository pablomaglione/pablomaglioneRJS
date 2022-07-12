import React, {useState} from 'react';
import Swal from 'sweetalert2'

const ItemCount = (props) => {
    const[count, setCount] = useState (props.initial);

    function cantSubstract(){
        if(count > 0)
        setCount(count - 1);
    }

    function cantAdd(){
        if(props.stock > count)
        setCount(count + 1);
    }

    function finCompra(){
        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Agregaste productos al carrito',
            showConfirmButton: false,
            timer: 1500
          })
    }

    return (
        <div class="container px-5 py-8 mx-auto">
            <div class="flex flex-col text-center w-full mb-12">
                <div style={{padding: "1.5rem"}}>
                    <button onClick={cantSubstract}> - </button>
                    <span> {count} </span>
                    <button onClick={cantAdd}> + </button>
                </div>
                <div>
                    <button class="btn" onClick={finCompra}> Agregar Producto </button>
                </div>
            </div>
        </div>
    );
}

export default ItemCount;
