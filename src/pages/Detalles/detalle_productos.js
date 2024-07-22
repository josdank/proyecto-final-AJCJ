import React, { useState } from 'react';
import '../../pages/Detalles/Productos.css';
import comida from '../../assets/img/ComidaSaluableMascotas.jpg';

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);
  const unitPrice = 1.00;

  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="product-container">
      <div className="product-image-container">
        <img className="product-image" src= {comida} alt="Comida saludable para mascotas" />
      </div>
      <div className="product-details-container">
        <h1 className="product-title">Comida saludable para mascotas</h1>
        <p className="product-price">${(unitPrice * quantity).toFixed(2)}</p>
        <div className="quantity-container">
          <button className="quantity-button" onClick={decrementQuantity}>-</button>
          <span className="quantity-display">{quantity}</span>
          <button className="quantity-button" onClick={incrementQuantity}>+</button>
        </div>
        <p className="product-description">
          Una alternativa a las croquetas y premios saludables, postres y pasteles para mascotas.
          Una nueva forma de amar a tu mascota a través de la comida.
        </p>
        <button className="add-to-cart-button">Add to bag</button>
      </div>
    </div>
  );
};

export default ProductDetail;
