import React from 'react';

const ElementoCarrito = ({ item, eliminarDelCarrito }) => {
    return (
        <div className="elemento-carrito">
            <h4>{item.name}</h4>
            <p>${item.price.toFixed(2)} c/u</p>
            <button onClick={() => eliminarDelCarrito(item)}>Eliminar</button>
        </div>
    );
};

export default ElementoCarrito;
