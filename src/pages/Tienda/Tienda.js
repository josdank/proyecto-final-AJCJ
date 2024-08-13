import React, { Component } from 'react';
import ListaProductos from './ListaProductos';
import Carrito from './Carrito';
import Filtros from './Filtros';
import NavegacionCategorias from './NavegacionCategorias';
import '../../App.css';

class Tienda extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemsCarrito: [],
            categoriaSeleccionada: 'Pasteles',
            filtroPrecio: { min: 0, max: 50 },
            filtroDisponibilidad: 'all',
            visible: false,
        };
    }

    cambiarCategoria = (categoria) => {
        this.setState({ categoriaSeleccionada: categoria });
    };

    agregarAlCarrito = (producto) => {
        this.setState((prevState) => ({
            itemsCarrito: [...prevState.itemsCarrito, producto]
        }));
    };

    eliminarDelCarrito = (productoId) => {
        let cantidad = parseInt(prompt('¿Cuántos deseas eliminar?', '1'), 10);
        if (isNaN(cantidad) || cantidad <= 0) return;

        this.setState((prevState) => ({
            itemsCarrito: prevState.itemsCarrito.filter(item => {
                if (item.id === productoId) {
                    return cantidad-- > 0;
                }
                return true;
            })
        }));
    };

    handleCheckout = (total) => {
        alert(`Gracias por tu compra. El total a pagar es: $${total.toFixed(2)}`);
        this.setState({ itemsCarrito: [] });
    };

    toggleCarritoVisibility = () => {
        this.setState((prevState) => ({
            visible: !prevState.visible
        }));
    };

    aplicarFiltros = (precio, disponibilidad) => {
        this.setState({
            filtroPrecio: precio,
            filtroDisponibilidad: disponibilidad
        });
    };

    render() {
        const { itemsCarrito, visible, categoriaSeleccionada, filtroPrecio, filtroDisponibilidad } = this.state;

        return (
            <div className="tienda">
                <NavegacionCategorias cambiarCategoria={this.cambiarCategoria} />
                <div className="contenedor-principal">
                    <Filtros aplicarFiltros={this.aplicarFiltros} />
                    <ListaProductos
                        categoria={categoriaSeleccionada}
                        agregarAlCarrito={this.agregarAlCarrito}
                        filtroPrecio={filtroPrecio}
                        filtroDisponibilidad={filtroDisponibilidad}
                    />
                </div>
                <Carrito
                    itemsCarrito={itemsCarrito}
                    eliminarDelCarrito={this.eliminarDelCarrito}
                    onCheckout={this.handleCheckout}
                    visible={visible}
                    setVisible={this.toggleCarritoVisibility}
                />
            </div>
        );
    }
}

export default Tienda;
