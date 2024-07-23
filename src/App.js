import React, { useState } from 'react';
import './App.css';
import DetalleProducto from './pages/Detalles/detalle_productos';
import Tienda from './pages/Tienda/Tienda';
import Carrito from './pages/Tienda/Carrito';
import Facturacion from './pages/Tienda/Facturacion';

function App() {
    const [route, setRoute] = useState('/');
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [total, setTotal] = useState(0);

    const renderPage = () => {
        switch (route) {
            case '/':
                return <Tienda onProductSelect={(product) => { setSelectedProduct(product); setRoute(`/detalle/${product.id}`); }} />;
            case '/detalle':
                return <DetalleProducto product={selectedProduct} />;
            case '/facturacion':
                return <Facturacion total={total} />;
            default:
                return <Tienda onProductSelect={(product) => { setSelectedProduct(product); setRoute(`/detalle/${product.id}`); }} />;
        }
    };

    return (
        <main>
            <Carrito setTotal={setTotal} />
            {renderPage()}
        </main>
    );
}

export default App;
