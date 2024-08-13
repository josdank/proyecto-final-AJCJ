import React, { useState } from 'react';

const ElementoCarrito = ({ producto, eliminarDelCarrito }) => {
    const [cantidadEliminar, setCantidadEliminar] = useState(1);

    // Asegúrate de que `producto.price` y `producto.cantidad` sean números
    const precio = producto.price || 0;
    const cantidad = producto.cantidad || 0;

    const handleEliminar = () => {
        if (cantidadEliminar >= cantidad) {
            eliminarDelCarrito(producto.id, cantidad);
        } else {
            eliminarDelCarrito(producto.id, cantidadEliminar);
        }
    };

    return (
        <div className="producto-carrito">
            <img src={producto.src || 'default-image.jpg'} alt={producto.name || 'Producto'} />
            <h3>{producto.name || 'Nombre del producto'}</h3>
            <p>Precio: ${precio.toFixed(2)}</p>
            <p>Cantidad: {cantidad}</p>
            <p>Total: ${(precio * cantidad).toFixed(2)}</p>
            <div>
                <input
                    type="number"
                    value={cantidadEliminar}
                    min="1"
                    max={cantidad}
                    onChange={(e) => setCantidadEliminar(parseInt(e.target.value, 10))}
                />
                <button onClick={handleEliminar}>Eliminar</button>
            </div>
        </div>
    );
};

export default ElementoCarrito;
