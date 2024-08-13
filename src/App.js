import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Tienda from './pages/Tienda/Tienda';
import DetalleProductos from './pages/Detalles/detalle_productos';
import Nosotros from "./pages/Nostros/nosotros";
import Comida from "./pages/ComidaDoggift/comida";
import Mascotas from "./pages/CuidadoMascotas/Mascotas";
import Header from './components/NavigationBar/Header';
import Footer from "./components/Footer/Footer";
import './App.css';
import Terms from './pages/Terms/Terms';
import CookiesPolicy from './pages/CookiesPolicy/CookiesPolicy';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import { FaHome } from 'react-icons/fa';
import Home from "./pages/Home/Home";

const App = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleProductSelect = (product) => {
        setSelectedProduct(product);
    };

    const handleBackToStore = () => {
        setSelectedProduct(null);
    };

    return (
        <Router>
            <div className="App">
                <Header
                    onShowProductList={() => handleProductSelect(null)}
                    onShowNosotros={() => {}}
                    onShowHome={() => {}}
                />
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/nosotros" element={<Nosotros />} />
                    <Route path="/tienda" element={<Tienda onProductSelect={handleProductSelect} />} />
                    <Route path="/comida" element={<Comida />} />
                    <Route path="/mascotas" element={<Mascotas />} />
                    <Route path="/detalle/:id" element={<DetalleProductos />} />
                    <Route path="/detalle_productos" component={DetalleProductos} />
                    <Route path="/terms" element={<Terms />} />
                    <Route path="/cookies" element={<CookiesPolicy />} />
                    <Route path="/privacy" element={<PrivacyPolicy />} />
                </Routes>
                <Footer
                    onShowTerms={() => {}}
                    onShowCookiesPolicy={() => {}}
                    onShowPrivacyPolicy={() => {}}
                />
                <button onClick={() => window.location.href = '/home'} className="home-icon">
                    <FaHome />
                </button>
            </div>
        </Router>
    );
}

export default App;
