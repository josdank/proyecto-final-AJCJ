import React from 'react';

const Carrito = ({ itemsCarrito, eliminarDelCarrito, onCheckout, visible, setVisible }) => {
    const total = itemsCarrito.reduce((acc, item) => acc + item.precio, 0);

    return (
        <div className={`carrito ${visible ? 'visible' : ''}`}>
            <h2>Carrito</h2>
            <button onClick={setVisible}>{visible ? 'Ocultar Carrito' : 'Mostrar Carrito'}</button>
            <ul>
                {itemsCarrito.map((item, index) => (
                    <li key={index}>
                        {item.nombre} - ${item.precio} c/u
                        <button onClick={() => eliminarDelCarrito(item.id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
            <h3>Total: ${total.toFixed(2)}</h3>
            <button onClick={() => onCheckout(total)}>Checkout</button>
        </div>
    );
};

export default Carrito;
