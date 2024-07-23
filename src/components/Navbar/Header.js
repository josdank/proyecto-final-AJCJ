import React from 'react';
import './Header.css';
import Tienda from '../../pages/Tienda/ProductShowcase'
import Nosotros from '../../pages/Nostros/nosotros'

const Header = () => {
  return (
    <header className="header">
      <h1>DogGift</h1>
      <nav>
        <ul>
          <button>Productos</button>
          <button>Categorías</button>
          <button>Promociones</button>
          <button>Contacto</button>
          <button>Nosotros</button>
          <button><i class="fa-solid fa-bag-shopping"></i></button>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
