import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ListaProductos from './ListaProductos';
import Carrito from './Carrito';
import Filtros from './Filtros';
import NavegacionCategorias from './NavegacionCategorias';
import '../../App.css';

const Tienda = () => {
    const [itemsCarrito, setItemsCarrito] = useState([]);
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Pasteles');
    const [filtroPrecio, setFiltroPrecio] = useState({ min: 0, max: 50 });
    const [filtroDisponibilidad, setFiltroDisponibilidad] = useState('all');
    const [visible, setVisible] = useState(false);
    const [productoSeleccionado, setProductoSeleccionado] = useState(null);

    const navigate = useNavigate();

    const cambiarCategoria = (categoria) => {
        setCategoriaSeleccionada(categoria);
    };

    const agregarAlCarrito = (producto) => {
        setItemsCarrito((prevItemsCarrito) => [...prevItemsCarrito, producto]);
    };

    const eliminarDelCarrito = (productoId) => {
        let cantidad = parseInt(prompt('¿Cuántos deseas eliminar?', '1'), 10);
        if (isNaN(cantidad) || cantidad <= 0) return;

        setItemsCarrito((prevItemsCarrito) =>
            prevItemsCarrito.filter(item => {
                if (item.id === productoId) {
                    return cantidad-- > 0;
                }
                return true;
            })
        );
    };

    const handleCheckout = (total) => {
        alert(`Gracias por tu compra. El total a pagar es: $${total.toFixed(2)}`);
        setItemsCarrito([]);
    };

    const toggleCarritoVisibility = () => {
        setVisible((prevVisible) => !prevVisible);
    };

    const aplicarFiltros = (precio, disponibilidad) => {
        setFiltroPrecio(precio);
        setFiltroDisponibilidad(disponibilidad);
    };

    const verDetalles = (producto) => {
        navigate(`/detalle_producto/${producto.id}`);
    };

    return (
        <div className="tienda">
            <NavegacionCategorias cambiarCategoria={cambiarCategoria} />
            <div className="contenedor-principal">
                <Filtros aplicarFiltros={aplicarFiltros} />
                <ListaProductos
                    categoria={categoriaSeleccionada}
                    agregarAlCarrito={agregarAlCarrito}
                    verDetalles={verDetalles} // Pasar la función verDetalles
                    filtroPrecio={filtroPrecio}
                    filtroDisponibilidad={filtroDisponibilidad}
                />
            </div>
            <Carrito
                itemsCarrito={itemsCarrito}
                eliminarDelCarrito={eliminarDelCarrito}
                onCheckout={handleCheckout}
                visible={visible}
                setVisible={toggleCarritoVisibility}
            />
        </div>
    );
}

export default Tienda;
