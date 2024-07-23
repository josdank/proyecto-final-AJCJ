import React, { useState } from 'react';
import Tienda from './pages/Tienda/Tienda';
import ProductDetail from './pages/Detalles/detalle_productos';
import './App.css';

function App() {
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleProductSelect = (product) => {
        setSelectedProduct(product);
    };

    const handleBackToStore = () => {
        setSelectedProduct(null);
    };

    return (
        <div className="App">
            {selectedProduct ? (
                <div>
                    <button onClick={handleBackToStore}>Volver a la tienda</button>
                    <ProductDetail product={selectedProduct} />
                </div>
            ) : (
                <Tienda onProductSelect={handleProductSelect} />
            )}
        </div>
    );
}

export default App;
