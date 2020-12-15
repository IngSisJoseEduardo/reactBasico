import React from 'react';

const Producto = ({producto, carrito, agregarProducto, productos }) => {
    const { id, nombre, precio } = producto;

    const seleccionarProducto = id => {
        const producto = productos.filter(producto => producto.id === id)[0];
        agregarProducto([...carrito, producto]);
    }

    // elimina un producto del carrito
    const eliminarProducto = id => {
        const productos = carrito.filter(producto => producto.id !== id);
        agregarProducto(productos);
    }

    return ( 
        <div>
            <h1>{nombre}</h1>
            <p>${precio}</p>
            {productos
            ?
                (
                    <button
                        type="button"
                        onClick={() => seleccionarProducto(id)}
                    >
                    Comprar</button>
                )
            :
                (
                    <button
                        onClick={() => eliminarProducto(id)}
                    >
                        Eliminar
                    </button>
                )
            }
        </div>
    )
}

export default Producto;