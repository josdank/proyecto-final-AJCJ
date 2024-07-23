import React from 'react';
import Producto from './Producto';

const ListaProductos = ({ agregarAlCarrito }) => {
    const productos = [
        { id: 1, name: 'Mini-Pastel', price: 3.00, image: '/assets/img/mini-pastel.jpg' },
        { id: 2, name: 'Galletas', price: 1.00, image: '/assets/img/galletas.jpg' },
        { id: 3, name: 'Pastelitos', price: 2.00, image: '/assets/img/pastelitos.jpg' },
        { id: 4, name: 'Empanaditas', price: 1.00, image: '/assets/img/empanadas.jpg' }
    ];

    return (
        <div className="lista-productos">
            {productos.map(producto => (
                <Producto key={producto.id} producto={producto} agregarAlCarrito={agregarAlCarrito} />
            ))}
        </div>
    );
};

export default ListaProductos;
