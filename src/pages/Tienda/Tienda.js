import React, { useState } from 'react';
import ListaProductos from './ListaProductos';
import Carrito from './Carrito';
import '../../App.css';

const Tienda = () => {
    const [itemsCarrito, setItemsCarrito] = useState([]);

    const agregarAlCarrito = (producto) => {
        setItemsCarrito([...itemsCarrito, producto]);
    };

    const eliminarDelCarrito = (producto) => {
        setItemsCarrito(itemsCarrito.filter(item => item !== producto));
    };

    return (
        <div className="tienda">
            <h1>Tienda</h1>
            <ListaProductos agregarAlCarrito={agregarAlCarrito} />
            <Carrito itemsCarrito={itemsCarrito} eliminarDelCarrito={eliminarDelCarrito} />
        </div>
    );
};

export default Tienda;
