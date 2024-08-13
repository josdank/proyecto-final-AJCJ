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
        setView('home');
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

    const renderContent = () => {
        switch (view) {
            case 'productDetail':
                return (
                    <div>
                        <button onClick={handleBackToStore}>Volver a la tienda</button>
                        <DetalleProductos product={selectedProduct} />
                    </div>
                );
            case 'tienda':
                return <Tienda onProductSelect={handleProductSelect} />;
            case 'terms':
                return (
                    <div>
                        <Terms />
                    </div>
                );
            case 'cookies':
                return (
                    <div>
                        <CookiesPolicy />
                    </div>
                );
            case 'privacy':
                return (
                    <div>
                        <PrivacyPolicy />
                    </div>
                );
            default:
                return <Nosotros />;
        }
    };

    return (
        <div className="App">
            <Header
                onShowProductList={handleShowProductList}
                onShowNosotros={handleShowNosotros}
                onShowHome = {handleGoHome}
            />
            {renderContent()}
            <Footer
                onShowTerms={handleShowTerms}
                onShowCookiesPolicy={handleShowCookiesPolicy}
                onShowPrivacyPolicy={handleShowPrivacyPolicy}
            />
            <button onClick={handleGoHome} className="home-icon">
                <FaHome />
            </button>
        </div>
    );
}

export default App;
