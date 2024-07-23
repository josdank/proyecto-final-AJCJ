import React from 'react';
import ElementoCarrito from './ElementoCarrito';

const Carrito = ({ itemsCarrito = [], eliminarDelCarrito, onCheckout, visible, setVisible }) => {
    const productosAgrupados = itemsCarrito.reduce((acc, item) => {
        const encontrado = acc.find(producto => producto.id === item.id);
        if (encontrado) {
            encontrado.cantidad += 1;
        } else {
            acc.push({ ...item, cantidad: 1 });
        }
        return acc;
    }, []);

    const total = productosAgrupados.reduce((sum, item) => sum + (item.price * item.cantidad), 0);

    const handleEnviar = () => {
        if (onCheckout) {
            onCheckout(total); // Llama a la función de checkout con el total
        }
        setVisible(false); // Cierra el carrito después del checkout
    };

    return (
        <div>
            <div className="icono-carrito" onClick={() => setVisible(!visible)}>
                🛒
                {itemsCarrito.length > 0 && <span className="conta">{itemsCarrito.length}</span>}
            </div>

            {visible && (
                <div className="carrito">
                    <h2>Carrito de Compras</h2>
                    {itemsCarrito.length === 0 ? (
                        <p>El carrito está vacío</p>
                    ) : (
                        <div>
                            {productosAgrupados.map((item) => (
                                <ElementoCarrito
                                    key={item.id}
                                    producto={item}
                                    eliminarDelCarrito={eliminarDelCarrito}
                                />
                            ))}
                            <h3>Total: ${total.toFixed(2)}</h3>
                            <button onClick={handleEnviar}>Enviar</button>
                            <button onClick={() => setVisible(false)}>Volver</button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Carrito;

