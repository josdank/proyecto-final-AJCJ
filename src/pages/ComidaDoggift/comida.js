import React from 'react';
import './About.css';
import Calidad_Alta from '../../assets/img/1.jpg';
import Ingrefientes_naturales from '../../assets/img/2.jpg';
import Sabor from '../../assets/img/3.jpg';
import Nutricion from '../../assets/img/4.jpg';

const About = () => {
  return (
    <div className="about-container">
      {/* Sección de Encabezado */}
      <section className="about-header">
        <h1>Comida para Mascotas DOGGIFT</h1>
        <p>Alimenta a tus mascotas con lo mejor. Porque ellos merecen lo mejor.</p>
      </section>

      {/* Sección 1: Calidad Superior */}
      <section className="quality-section">
        <div className="section-content">
          <img src={Calidad_Alta} alt="Calidad Superior" />
          <div className="text-content">
            <h2>Calidad Superior en Cada Bocado</h2>
            <p>
              En DOGGIFT, creemos que la calidad es clave. Nuestra comida para mascotas está elaborada con los más altos estándares, utilizando ingredientes frescos y nutritivos que aseguran que tu mascota reciba lo mejor en cada comida.
            </p>
            <p>
              Porque cuando se trata de tus seres queridos, solo lo mejor es suficiente. Descubre la diferencia que puede hacer una nutrición premium.
            </p>
          </div>
        </div>
      </section>

      {/* Sección 2: Ingredientes Naturales */}
      <section className="natural-ingredients-section">
        <div className="section-content reverse">
          <img src={Ingrefientes_naturales} alt="Ingredientes Naturales" />
          <div className="text-content">
            <h2>Ingredientes Naturales</h2>
            <p>
              Sabemos que la salud de tu mascota es lo más importante. Por eso, todos nuestros productos están hechos con ingredientes 100% naturales, seleccionados cuidadosamente para proporcionar la mejor nutrición posible.
            </p>
            <p>
              No hay aditivos artificiales ni conservantes, solo la bondad natural que tu mascota merece.
            </p>
          </div>
        </div>
      </section>

      {/* Sección 3: Sabor que Encanta */}
      <section className="taste-section">
        <div className="section-content">
          <img src={Sabor} alt="Sabor Increíble" />
          <div className="text-content">
            <h2>Sabor que Encanta</h2>
            <p>
              Los perros y gatos no solo necesitan nutrición; también merecen disfrutar de su comida. DOGGIFT ofrece una gama de sabores irresistibles que tus mascotas adorarán.
            </p>
            <p>
              Cada comida es una fiesta para sus papilas gustativas, hecha con amor y cuidado. ¡Verás la diferencia en la forma en que devoran cada bocado!
            </p>
          </div>
        </div>
      </section>

      {/* Sección 4: Nutrición Equilibrada */}
      <section className="balanced-nutrition-section">
        <div className="section-content reverse">
          <img src={Nutricion} alt="Nutrición Equilibrada" />
          <div className="text-content">
            <h2>Nutrición Equilibrada</h2>
            <p>
              Nuestra fórmula equilibrada asegura que tu mascota obtenga todas las vitaminas y minerales esenciales que necesita para una vida larga y saludable. No se trata solo de alimentar, sino de nutrir de verdad.
            </p>
            <p>
              Con DOGGIFT, puedes estar seguro de que estás proporcionando lo mejor para su salud a largo plazo.
            </p>
          </div>
        </div>
      </section>

      {/* Sección 5: Llamado a la Acción */}
      <section className="cta-section">
        <h2>Haz que Cada Comida Cuente</h2>
        <p>¡No esperes más! Dale a tu mascota la nutrición que merece.</p>
        <button className="cta-button">Compra Ahora</button>
      </section>
    </div>
  );
};

export default About;
