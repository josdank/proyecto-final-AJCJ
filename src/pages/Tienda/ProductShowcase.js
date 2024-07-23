// src/componentes/ProductShowcase.js
import React from 'react';
import './ProductShowcase.css';
import pollo from '../../assets/img/pollo.png'
import galleta from '../../assets/img/galleta.png'
import Header from '../../components/Navbar/Header';
import Footer from '../../components/Footer/Footer';

const ProductShowcase = () => {
  const handleButtonClickDetalles = () => {
    window.location.href = '../Detalles/detalle_productos.js';
  };

  return (
    <div>
      <Header></Header>
      <section className="product-showcase">
        <h2>Lo mejor para tu mascota</h2>
        <div className="product">
          <img src={pollo} onClick={handleButtonClickDetalles} alt="Pollo" />
          <p>Comida de Pollo Premium</p>
        </div>
        <div className="product">
          <img src={galleta} alt="Galleta" />
          <p>Galletas Saludables</p>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default ProductShowcase;
