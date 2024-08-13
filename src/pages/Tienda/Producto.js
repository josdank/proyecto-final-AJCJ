import React from 'react';

const Producto = ({ producto, agregarAlCarrito, verDetalles }) => {
    return (
        <div className="producto">
            <img src={producto.imagen} alt={producto.nombre} />
            <h3>{producto.nombre}</h3>
            <p>Precio: ${producto.precio.toFixed(2)}</p>
            <button onClick={() => agregarAlCarrito(producto)}>Agregar al carrito</button>
        </div>
    );
};

export default Producto;
