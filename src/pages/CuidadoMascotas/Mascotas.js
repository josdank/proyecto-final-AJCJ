import React from 'react';
import '../CuidadoMascotas/Mascotas.css';

function Mascotas() {
  return (
    <div className="mascotas">
      <h1>APRENDE TODO SOBRE EL CUIDADO DE TU MASCOTA</h1>
      <div className="seccion parallax">
        <div className="texto">
          <h2>Sobre los perros...</h2>
          <p>Para el cuidado de la alimentación de tu perro, es importante ofrecerle carnes magras como pollo, pavo y ternera, siempre cocidos y sin condimentos. Estas proteínas son esenciales para su salud y desarrollo. Además, puedes incluir en su dieta verduras como zanahorias, judías verdes, guisantes y calabaza, las cuales aportan fibra y vitaminas.</p>
          <p>Por otro lado, hay alimentos que debes evitar a toda costa. El chocolate y la cafeína contienen teobromina, que es tóxica para los perros y puede causar desde vómitos hasta problemas cardíacos.</p>
        </div>
      </div>
      <div className="seccion parallax">
        <div className="texto">
          <h2>Sobre los gatos...</h2>
          <p>La dieta de tu gato debe incluir carnes magras como pollo, pavo, ternera y pescado, siempre cocidos y sin condimentos. Estos alimentos son fundamentales para satisfacer sus necesidades proteicas. Puedes ofrecerle puré de calabaza, que es beneficioso para su digestión, y huevos cocidos en pequeñas cantidades como una buena fuente de proteína. El pescado, especialmente el salmón, puede ser una excelente adición ocasional a su dieta, aunque debe ser limitado debido a su alto contenido de grasa.</p>
        </div>
      </div>
      <div className="seccion parallax">
        <div className="texto">
          <h2>Salud de tu nascotas...</h2>
          <p>Las visitas regulares al veterinario son esenciales para mantener la salud de tus mascotas. Vacunas, desparasitaciones, y chequeos son necesarios para prevenir enfermedades. También es importante mantener una buena higiene, como el cepillado dental y el cuidado del pelaje.</p>
        </div>
      </div>
    </div>
  );
}

export default Mascotas;
