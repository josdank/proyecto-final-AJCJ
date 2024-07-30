import React, { useState } from 'react';
import Tienda from './pages/Tienda/Tienda';
import ProductDetail from './pages/Detalles/detalle_productos';
import Nosotros from "./pages/Nostros/nosotros";
import Header from './components/NavigationBar/Header'; // Asegúrate de que el Header esté correctamente importado
import './App.css';
import Footer from "./components/Footer/Footer";

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
            <Footer/>
        </div>
    );
}

export default App;
