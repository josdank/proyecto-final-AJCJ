import React from 'react';

const Producto = ({ producto, agregarAlCarrito }) => {
    return (
        <div className="producto">
            <img src={producto.image} alt={producto.name} />
            <h3>{producto.name}</h3>
            <p>${producto.price.toFixed(2)} c/u</p>
            <button onClick={() => agregarAlCarrito(producto)}>Añadir al Carrito</button>
        </div>
    );
};

export default Producto;
