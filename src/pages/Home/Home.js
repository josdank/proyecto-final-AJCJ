import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../assets/img/1.jpg';
import img2 from "../../assets/img/1.png";
import img3 from "../../assets/img/3.jpg";
import img4 from "../../assets/img/4.jpg";
import Galletas from "../../assets/img/galletas.jpg";
import Ingreso from '../../components/Ingreso/Ingreso'

const Home = () => {
  const headerStyle = {
    backgroundImage: `url('/images/1.jpg')`,
    backgroundSize: 'cover',
    padding: '0 20px',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: 'white',
  };

  const headerTitleStyle = {
    fontSize: '4rem',
    marginBottom: '20px',
  };

  const headerSubtitleStyle = {
    fontSize: '1.5rem',
    marginBottom: '30px',
  };

  const shopButtonStyle = {
    backgroundColor: '#ff6600',
    color: 'white',
    padding: '15px 30px',
    textDecoration: 'none',
    fontWeight: 'bold',
    borderRadius: '5px',
  };

  const sectionTitleStyle = {
    fontSize: '2.5rem',
    marginBottom: '40px',
    color: '#333',
  };

  const sectionStyle = {
    padding: '50px 20px',
    textAlign: 'center',
  };

  const gridStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    flexWrap: 'wrap',
    flexDirection: 'row', // Para asegurar que las imágenes estén en una fila
  };

  const smallImageStyle = {
    width: '200px', // Ajusta el tamaño de la imagen
    height: 'auto',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  };

  const cardStyle = {
    backgroundColor: '#ffcc99',
    border: 'none',
    borderRadius: '5px',
    padding: '20px',
    width: '300px',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  };

  const productImageStyle = {
    width: '100%',
    height: 'auto',
    marginBottom: '15px',
  };

  const productNameStyle = {
    fontSize: '1.5rem',
    marginBottom: '10px',
  };

  const productPriceStyle = {
    fontSize: '1.2rem',
    color: '#ff6600',
  };

  const testimonialStyle = {
    backgroundColor: '#ffcc99',
    borderRadius: '5px',
    padding: '20px',
    margin: '20px',
    textAlign: 'left',
    color: '#333',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  };

  const footerStyle = {
    padding: '20px',
    backgroundColor: '#333',
    color: 'white',
    textAlign: 'center',
  };

  return (
    <div className="home-container">
      <header style={headerStyle}>
        <h1 style={headerTitleStyle}>¡Bienvenido a DOGGIFT!</h1>
        <p style={headerSubtitleStyle}>El mejor lugar para consentir a tu mascota</p>
        <Link to="/tienda" style={shopButtonStyle}>Ir a la Tienda</Link>
      </header>

      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Comida Saludable</h2>
        <p>Una alternativa a las croquetas y premios saludables para mascotas.</p>
        <div style={gridStyle}>
          <img src="https://th.bing.com/th/id/OIP.CjJXuzT1vxUJmPnFXL654gHaGD?w=215&h=180&c=7&r=0&o=5&pid=1.7" alt="Imagen 1" style={smallImageStyle} />
          <img src="https://th.bing.com/th/id/R.b182fdfafd58f8f2e40cc927241cd6f3?rik=vuF0%2f0hfijbAHw&pid=ImgRaw&r=0" alt="Imagen 2" style={smallImageStyle} />
          <img src="https://i.pinimg.com/originals/8f/48/bd/8f48bde317872556079ce8f539eb444f.jpg" alt="Imagen 3" style={smallImageStyle} />
          <img src="https://th.bing.com/th/id/OIP.YUEQrS7KX2od-wXV_ovfigHaEz?w=264&h=180&c=7&r=0&o=5&pid=1.7" alt="Imagen 4" style={smallImageStyle} />
        </div>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Ofertas Especiales</h2>
        <div style={gridStyle}>
          <div style={cardStyle}>
            <img src="https://recetasbarf.com/wp-content/uploads/2020/03/Preparaci%C3%B3n-de-la-comida-barf-para-perros-768x512.png" alt="Comida Saludable para Mascotas" style={productImageStyle} />
            <h3 style={productNameStyle}>Comida Saludable para Mascotas</h3>
            <p style={productPriceStyle}>Desde $15.99</p>
          </div>
          <div style={cardStyle}>
            <img src="https://th.bing.com/th/id/OIP.a3-JcDBvjRjBM0eJ_F0TJAHaEK?w=322&h=181&c=7&r=0&o=5&pid=1.7" alt="Snacks Naturales" style={productImageStyle} />
            <h3 style={productNameStyle}>Snacks Naturales</h3>
            <p style={productPriceStyle}>Desde $9.99</p>
          </div>
          <div style={cardStyle}>
            <img src="https://th.bing.com/th/id/OIP.EprL-E5WlgaftbgX8jb9HQAAAA?w=180&h=180&c=7&r=0&o=5&pid=1.7" alt="Juguetes para Mascotas" style={productImageStyle} />
            <h3 style={productNameStyle}>Juguetes para Mascotas</h3>
            <p style={productPriceStyle}>Desde $12.99</p>
          </div>
        </div>
      </section>

      <Ingreso></Ingreso>

      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Amor Mascotas</h2>
        <div style={gridStyle}>
          <div style={testimonialStyle}>
            <p>“Los pasteles para mascotas de DogGift son simplemente increíbles. Nuestro perro los devora en segundos y siempre quiere más. ¡Altamente recomendado!”</p>
            <p><strong>Carlos Gomez</strong>, Barcelona</p>
          </div>
          <div style={testimonialStyle}>
            <p>“Nuestra mascota adora la comida de DogGift. ¡Es increíblemente deliciosa y saludable!”</p>
            <p><strong>Luna Perez</strong>, Madrid</p>
          </div>
        </div>
      </section>

      <footer style={footerStyle}>
        <p>© 2024 DOGGIFT. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Home;

