import React from 'react';

const ElementoCarrito = ({ producto, eliminarDelCarrito }) => {
    return (
        <div className="producto-carrito">
            <img src={producto.src} alt={producto.name} />
            <h3>{producto.name}</h3>
            <p>Precio: ${producto.price.toFixed(2)}</p>
            <p>Cantidad: {producto.cantidad}</p>
            <p>Total: ${(producto.price * producto.cantidad).toFixed(2)}</p>
            <button onClick={() => eliminarDelCarrito(producto.id)}>Eliminar</button>
        </div>
    );
};

export default ElementoCarrito;
