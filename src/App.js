import React, { useState } from 'react';
import Tienda from './pages/Tienda/Tienda';
import ProductDetail from './pages/Detalles/detalle_productos';
import Nosotros from "./pages/Nostros/nosotros";
import Header from './components/NavigationBar/Header';
import './App.css';
import Footer from "./components/Footer/Footer";
import Mascotas from './pages/CuidadoMascotas/Mascotas';
import DetalleProductos from './pages/Detalles/detalle_productos';
import Comida from './pages/ComidaDoggift/comida';
import { FaHome } from 'react-icons/fa';
import Carrito from "./pages/Tienda/Carrito"; // Importamos el icono de la casita

const App = () => {
    const [view, setView] = useState('nosotros');
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleProductSelect = (product) => {
        setSelectedProduct(product);
        setView('productDetail');
    };

    const handleBackToStore = () => {
        setSelectedProduct(null);
        setView('tienda');
    };

    const handleShowProductList = () => {
        setView('tienda');
    };

    const handleShowNosotros = () => {
        setView('nosotros');
    };

    const handleGoHome = () => {
        window.scrollTo(0, 0);
    };

    let content;

    switch (view) {
        case 'productDetail':
            content = (
                <div>
                    <button onClick={handleBackToStore}>Volver a la tienda</button>
                    <ProductDetail product={selectedProduct} />
                </div>
            );
            break;
        case 'tienda':
            content = <Tienda onProductSelect={handleProductSelect} />;
            break;
        default:
            content = <Nosotros />;
    }

    return (
        <div className="App">
            <Header onShowProductList={handleShowProductList} onShowNosotros={handleShowNosotros} />
            {content}
            <DetalleProductos />
            <Comida/>
            <Tienda/>
            <Footer />

            {/* Icono de casita */}
            <button onClick={handleGoHome} className="home-icon">
                <FaHome />
            </button>
        </div>
    );
}

export default App;
