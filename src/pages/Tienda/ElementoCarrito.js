import React, { useState } from 'react';

const ElementoCarrito = ({ producto, eliminarDelCarrito }) => {
    const [cantidadEliminar, setCantidadEliminar] = useState(1);

    const handleEliminar = () => {
        if (cantidadEliminar >= producto.cantidad) {
            eliminarDelCarrito(producto.id, producto.cantidad);
        } else {
            eliminarDelCarrito(producto.id, cantidadEliminar);
        }
    };

    return (
        <div className="producto-carrito">
            <img src={producto.src} alt={producto.name} />
            <h3>{producto.name}</h3>
            <p>Precio: ${producto.price.toFixed(2)}</p>
            <p>Cantidad: {producto.cantidad}</p>
            <p>Total: ${(producto.price * producto.cantidad).toFixed(2)}</p>
            <div>
                <input
                    type="number"
                    value={cantidadEliminar}
                    min="1"
                    max={producto.cantidad}
                    onChange={(e) => setCantidadEliminar(parseInt(e.target.value))}
                />
                <button onClick={handleEliminar}>Eliminar</button>
            </div>
        </div>
    );
};

export default ElementoCarrito;