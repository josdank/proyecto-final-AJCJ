import React from 'react';
import ElementoCarrito from './ElementoCarrito';

const Carrito = ({ itemsCarrito, eliminarDelCarrito }) => {
    const total = itemsCarrito.reduce((sum, item) => sum + item.price, 0);

    return (
        <div className="carrito">
            <h2>Carrito de Compras</h2>
            {itemsCarrito.length === 0 ? (
                <p>El carrito está vacío</p>
            ) : (
                <div>
                    {itemsCarrito.map((item, index) => (
                        <ElementoCarrito key={index} item={item} eliminarDelCarrito={eliminarDelCarrito} />
                    ))}
                    <h3>Total: ${total.toFixed(2)}</h3>
                </div>
            )}
        </div>
    );
};

export default Carrito;
