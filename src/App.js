import React, { useState } from 'react';
import Tienda from './pages/Tienda/Tienda';
import DetalleProductos from './pages/Detalles/detalle_productos';
import Nosotros from "./pages/Nostros/nosotros";
import Comida from "./pages/ComidaDoggift/comida";
import Header from './components/NavigationBar/Header';
import Footer from "./components/Footer/Footer";
import './App.css';
import Terms from './pages/Terms/Terms';
import CookiesPolicy from './pages/CookiesPolicy/CookiesPolicy';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import { FaHome } from 'react-icons/fa';

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
        setView('tienda');
        window.scrollTo(0, 0);
    };

    const handleShowTerms = () => {
        setView('terms');
    };

    const handleShowCookiesPolicy = () => {
        setView('cookies');
    };

    const handleShowPrivacyPolicy = () => {
        setView('privacy');
    };

    let content;

    switch (view) {
        case 'productDetail':
            content = (
                <div>
                    <button onClick={handleBackToStore}>Volver a la tienda</button>
                    <DetalleProductos product={selectedProduct} />
                </div>
            );
            break;
        case 'tienda':
            content = (
                <div>
                    <button onClick={handleBackToStore}>Volver al Home</button>
                    <Tienda onProductSelect={handleProductSelect} />
                </div>
            );
            break;
        case 'terms':
            content = (
                <div>
                    <Terms />
                    <button onClick={handleGoHome}>Acepto los términos</button>
                </div>
            );
            break;
        case 'cookies':
            content = (
                <div>
                    <CookiesPolicy />
                    <button onClick={handleGoHome}>Acepto las políticas de cookies</button>
                </div>
            );
            break;
        case 'privacy':
            content = (
                <div>
                    <PrivacyPolicy />
                    <button onClick={handleGoHome}>Acepto la protección de datos</button>
                </div>
            );
            break;
        default:
            content = <Nosotros />;
    }

    return (
        <div className="App">
            <Header
                onShowProductList={handleShowProductList}
                onShowNosotros={handleShowNosotros}
            />
            {content}
            <Footer
                onShowTerms={handleShowTerms}
                onShowCookiesPolicy={handleShowCookiesPolicy}
                onShowPrivacyPolicy={handleShowPrivacyPolicy}
            />
            <button onClick={handleGoHome} className="home-icon">
                <FaHome/>
            </button>
        </div>
    );
}

export default App;
