import React from 'react';
import Producto from './Producto';
import Galleta from '../../assets/img/galletas.jpg';
import Empanada from '../../assets/img/emapanadas.jpg';
import Pastelitos from '../../assets/img/pastelitos.jpg';
import Mini_pasteles from '../../assets/img/mini-pastel.jpg';
const ListaProductos = ({ agregarAlCarrito }) => {
    const productos = [
        { id: 1, name: 'Mini-Pastel', price: 3.00, src: Mini_pasteles },
        { id: 2, name: 'Galletas', price: 1.00, src: Galleta },
        { id: 3, name: 'Pastelitos', price: 2.00, src: Pastelitos },
        { id: 4, name: 'Empanaditas', price: 1.00, src: Empanada }
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
