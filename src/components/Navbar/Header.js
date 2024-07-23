import React from 'react';
import './Header.css';

const Header = ({ onShowProductList, onShowNosotros }) => {
    return (
        <header className="header">
            <h1 onClick={onShowNosotros} style={{ cursor: 'pointer' }}>DogGift</h1>
            <nav>
                <ul>
                    <button onClick={onShowProductList}>Productos</button>
                    <button>Categorías</button>
                    <button>Promociones</button>
                    <button>Contacto</button>
                    <button onClick={onShowNosotros}>Nosotros</button>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
