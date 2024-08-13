import React from 'react';
import Producto from './Producto';
import Empanadas from '../../assets/img/Empanadas.jpg';
import pastelitos from "../../assets/img/pastelitos.jpg";
import minipastel from "../../assets/img/mini-pastel.jpg";
import pastelillos from "../../assets/img/pastelillos.jpg";
import Galletas from "../../assets/img/galletas.jpg";

const productos = [
    { id: 1, nombre: 'Mini-Pastel', categoria: 'Pasteles', precio: 3, disponibilidad: 'available', imagen: pastelillos },
    { id: 2, nombre: 'Galletas', categoria: 'Snacks', precio: 1, disponibilidad: 'available', imagen: Galletas },
    { id: 3, nombre: 'Pastelillos', categoria: 'Pasteles', precio: 2, disponibilidad: 'on_sale', imagen: pastelitos },
    { id: 4, nombre: 'Pastel', categoria: 'Pasteles', precio: 3, disponibilidad: 'available', imagen: minipastel },
    { id: 5, nombre: 'Empanadas', categoria: 'Comida', precio: 1, disponibilidad: 'available', imagen: Empanadas },
    { id: 6, nombre: 'Helados', categoria: 'Comida', precio: 0.75, disponibilidad: 'available', imagen: 'https://th.bing.com/th/id/OIP.AnicgOYgz1Jiw5FP4q_d0QHaHa?rs=1&pid=ImgDetMain' },
    { id: 7, nombre: 'Tortillas', categoria: 'Comida', precio: 2, disponibilidad: 'available', imagen: 'https://m.media-amazon.com/images/I/71MPZzuUrLL._SX569_.jpg' },
    { id: 8, nombre: 'Huesitos', categoria: 'Snacks', precio: 1.25, disponibilidad: 'available', imagen: 'https://th.bing.com/th/id/OIP.yvC7Ib7yVOVBiozThlFSHAAAAA?w=474&h=316&rs=1&pid=ImgDetMain' },
    { id: 9, nombre: 'Premios', categoria: 'Snacks', precio: 1.75, disponibilidad: 'available', imagen: 'https://th.bing.com/th/id/R.c355db2a4ef84c23dc9531ed99f0b662?rik=8b3T2V%2fa0J2c6A&riu=http%3a%2f%2fwww.polacocina.com%2fwp-content%2fuploads%2f2018%2f11%2fIMG_1393-thegem-blog-timeline-large.jpg&ehk=8Sk8gj4uBICZusetPXVkpTfxJ5v26JD3KoLi4%2f33XbU%3d&risl=&pid=ImgRaw&r=0g' },
    { id: 10, nombre: 'Pedigree', categoria: 'Enlatados', precio: 2.50, disponibilidad: 'available', imagen: 'https://th.bing.com/th/id/OIP.9swjVepit8_3XjuhZN65VQHaHa?w=219&h=219&c=7&r=0&o=5&pid=1.7' },
    { id: 11, nombre: 'Welness', categoria: 'Enlatados', precio: 3.00, disponibilidad: 'available', imagen: 'https://m.media-amazon.com/images/I/71ADhDMXfSL._AC_SL1500_.jpg' },
    { id: 12, nombre: 'Wiskas', categoria: 'Enlatados', precio: 1.60, disponibilidad: 'available', imagen: 'https://th.bing.com/th/id/OIP.drFfi0R2L7di_VlAPdIUgwHaHa?rs=1&pid=ImgDetMain' },
    // Añade más productos según las categorías
];

const ListaProductos = ({ categoria, agregarAlCarrito, verDetalles, filtroPrecio, filtroDisponibilidad }) => {
    // Filtra los productos según la categoría, el precio y la disponibilidad
    const productosFiltrados = productos.filter(producto => {
        return (
            producto.categoria === categoria &&
            producto.precio >= filtroPrecio.min &&
            producto.precio <= filtroPrecio.max &&
            (filtroDisponibilidad === 'all' || producto.disponibilidad === filtroDisponibilidad)
        );
    });

    return (
        <div className="lista-productos">
            {productosFiltrados.map(producto => (
                <Producto
                    key={producto.id}
                    producto={producto}
                    agregarAlCarrito={agregarAlCarrito}
                    verDetalles={verDetalles} // Pasar la función verDetalles
                />
            ))}
        </div>
    );
};

export default ListaProductos;
