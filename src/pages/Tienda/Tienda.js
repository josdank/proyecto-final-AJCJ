import React, { Component } from 'react';
import ListaProductos from './ListaProductos';
import Carrito from './Carrito';
import ProductDetail from '../Detalles/detalle_productos'; // Verificar la ruta
import '../../App.css';

class Tienda extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemsCarrito: [],
            visible: false,
            detalleVisible: false,
            productoSeleccionado: null
        };
    }

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
        this.setState({ itemsCarrito: [] }); // Limpiar el carrito después del checkout
    };

    toggleCarritoVisibility = () => {
        this.setState((prevState) => ({
            visible: !prevState.visible
        }));
    };

    showProductDetails = (producto) => {
        this.setState({
            detalleVisible: true,
            productoSeleccionado: producto
        });
    };

    hideProductDetails = () => {
        this.setState({
            detalleVisible: false,
            productoSeleccionado: null
        });
    };

    render() {
        const { itemsCarrito, visible, detalleVisible, productoSeleccionado } = this.state;

        return (
            <div className="tienda">
                <h1>Tienda</h1>
                {detalleVisible && productoSeleccionado ? (
                    <div>
                        <button onClick={this.hideProductDetails}>Volver a la tienda</button>
                        <ProductDetail />
                    </div>
                ) : (
                    <div>
                        <ListaProductos
                            agregarAlCarrito={this.agregarAlCarrito}
                            showProductDetails={this.showProductDetails}
                        />
                        <Carrito
                            itemsCarrito={itemsCarrito}
                            eliminarDelCarrito={this.eliminarDelCarrito}
                            onCheckout={this.handleCheckout}
                            visible={visible}
                            setVisible={this.toggleCarritoVisibility}
                        />
                    </div>
                )}
            </div>
        );
    }
}

export default Tienda;
