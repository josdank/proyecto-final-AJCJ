import React from 'react';
import ElementoCarrito from './ElementoCarrito';

const Carrito = ({ itemsCarrito, eliminarDelCarrito, onCheckout, visible, setVisible }) => {
    const total = itemsCarrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

    return (
        <div className={`carrito ${visible ? 'visible' : ''}`}>
            <h2>Carrito</h2>
            <button onClick={() => setVisible(!visible)}>{visible ? 'Ocultar Carrito' : 'Mostrar Carrito'}</button>
            <ul>
                {itemsCarrito.map((item, index) => (
                    <ElementoCarrito
                        key={index}
                        producto={item}
                        eliminarDelCarrito={eliminarDelCarrito}
                    />
                ))}
            </ul>
            <h3>Total: ${total.toFixed(2)}</h3>
            <button onClick={() => onCheckout(total)}>Checkout</button>
        </div>
    );
};

export default Carrito;