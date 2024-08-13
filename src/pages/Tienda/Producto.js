import React from 'react';

const Producto = ({ producto, agregarAlCarrito, verDetalles }) => {
    return (
        <div className="producto">
            <img src={producto.imagen} alt={producto.nombre} />
            <h4>{producto.nombre}</h4>
            <p>${producto.precio.toFixed(2)} c/u</p>
            <button onClick={() => agregarAlCarrito(producto)}>Agregar al carrito</button>
            <button onClick={() => verDetalles(producto)}>Ver detalles</button>
        </div>
    );
};

export default Producto;
