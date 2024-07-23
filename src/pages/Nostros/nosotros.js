import React from 'react';
import logo from '../../assets/img/logo.png';
import calidad from '../../assets/img/calidadPNG.png'
import salud from '../../assets/img/alimentacionSanaWEBP.png'
import estilos from '../Nostros/nosotros.css'
import Header from '../../components/Navbar/Header';
import Footer from '../../components/Footer/Footer';

import Tienda from '../../assets/img/tienda.jpg'
import Empanadas from '../../assets/img/Empanadas.jpg'
import Pastelillos from '../../assets/img/pastelillos.jpg'

export const nosotros = () => {
  return (
    <div>
      <Header></Header>
      <div className='nosotros'>
        <div className='quienesSomos'>
          <img src={logo} alt="Logo" className='doggiftLogo'></img>
          <h2>¿Quiénes somos?</h2>
          <p> En Doggift, somos apasionados por la salud y el bienestar de tus mascotas. 
            El propósito de Doggift es el de ofrecer alternativas más saludables a las croquetas tradicionales, 
            nuestra empresa se especializa en alimentos orgánicos y nutritivos que transforman la dieta de 
            las mascotas. <br></br> Creemos firmemente que una alimentación adecuada es esencial para una 
            vida larga y feliz, y es por eso que nos dedicamos a proporcionar productos elaborados con 
            ingredientes naturales y libres de aditivos artificiales. Cada uno de nuestros alimentos está 
            cuidadosamente formulado para ofrecer una nutrición óptima, respetando los más altos estándares 
            de calidad y sostenibilidad. </p>
            <img src={Tienda} className='tienda'></img>
        </div>
          
        <div className='calidad'>
          <img src={calidad} alt="Logo" className='calidadLogo'></img>
          <h2>Calidad</h2>
          <p> En Doggift, la calidad es <b> nuestro pilar fundamental </b>. Nos dedicamos a ofrecer alimentos orgánicos 
            y nutritivos para mascotas, utilizando únicamente ingredientes naturales y libres de aditivos 
            artificiales. <br></br> Cada producto es cuidadosamente formulado y sometido a rigurosos controles de calidad 
            para asegurar que proporcionamos solo lo mejor para la salud y el bienestar de las mascotas. </p>
        </div>  
          
        <div className='alimentacionSalud'>
          <img src={salud} alt="Logo" className='alimentacionLogo'></img>
          <h2>Alimentación y salud</h2>
          <p> La salud de las mascotas está directamente influenciada por lo que consumen diariamente. Una dieta 
            rica en nutrientes esenciales puede prevenir enfermedades, mejorar la energía y el estado de ánimo, y 
            fortalecer el sistema inmunológico.<br></br> En Doggift, nos comprometemos a ofrecer productos que no solo 
            satisfacen el apetito de las mascotas, sino que también apoyan su bienestar general. Creemos que al 
            proporcionar alimentos de alta calidad, estamos invirtiendo en la salud futura de las mascotas, 
            asegurando que vivan vidas plenas y saludables. </p>
            <div className='fotos'> 
              <img src={Empanadas} className='empanadas'></img>
              <img src={Pastelillos} className='pastelillos'></img>
            </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default nosotros;
