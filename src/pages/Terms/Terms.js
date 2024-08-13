import React from 'react';
import './Terms.css';

const Terms = () => {
        const handleAcceptTerms = () => {
                // Redirige a la página principal
                window.location.href = '/home';
        };

        return (
            <div className="terms-page">
                    <h1>Términos y Condiciones</h1>
                    <p>Última actualización: Agosto 2024</p>
                    <h2>1. Aceptación de los Términos</h2>
                    <p>Al acceder y usar nuestro sitio web, usted acepta cumplir y estar sujeto a los siguientes términos y condiciones. Si no está de acuerdo con alguno de estos términos, por favor no use nuestro sitio web.</p>

                    <h2>2. Uso del Sitio</h2>
                    <p>Usted se compromete a utilizar el sitio web solo para fines legales y de manera que no infrinja los derechos de terceros. No debe usar el sitio para publicar material que sea ilegal, difamatorio o perjudicial.</p>

                    <h2>3. Propiedad Intelectual</h2>
                    <p>Todo el contenido del sitio web, incluidos textos, gráficos, logotipos y software, es propiedad de nuestra empresa o de nuestros proveedores de contenido y está protegido por leyes de propiedad intelectual.</p>

                    <h2>4. Modificaciones</h2>
                    <p>Nos reservamos el derecho de modificar estos términos en cualquier momento. Cualquier cambio será publicado en esta página, y su uso continuado del sitio después de los cambios constituye su aceptación de los términos modificados.</p>

                    <h2>5. Limitación de Responsabilidad</h2>
                    <p>No seremos responsables por cualquier daño directo, indirecto, incidental o consecuente que resulte del uso o la incapacidad de usar nuestro sitio web.</p>

                    <h2>6. Contacto</h2>
                    <p>Para cualquier pregunta sobre estos términos, por favor contáctenos a <a href="mailto:contacto@doggift.com">contacto@doggift.com</a>.</p>

                    <button onClick={handleAcceptTerms} className="accept-button">Acepto los términos</button>
            </div>
        );
};

export default Terms;
