import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2024 DogGift. Todos los derechos reservados.</p>
      <div>
        <a href="#faq">FAQ</a>
        <a href="#contact">Contacto</a>
        <a href="#privacy">Privacidad</a>
      </div>
    </footer>
  );
};

export default Footer;
