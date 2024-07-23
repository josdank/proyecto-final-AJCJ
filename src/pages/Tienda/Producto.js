import React from 'react';

const Producto = ({ producto, agregarAlCarrito }) => {
    return (
        <div className="producto">
            <img src={producto.src} alt={producto.name} />
            <h2>{producto.name}</h2>
            <p>${producto.price.toFixed(2)}</p>
            <button onClick={() => agregarAlCarrito(producto)}>Agregar al carrito</button>
        </div>
    );
};

export default Producto;
