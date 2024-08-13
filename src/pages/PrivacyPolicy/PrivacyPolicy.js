import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
        const handleAcceptPrivacy = () => {
                // Redirige a la página principal
                window.location.href = '/';
        };

        return (
            <div className="privacy-policy-page">
                    <h1>Protección de Datos</h1>
                    <p>Última actualización: Agosto 2024</p>
                    <h2>1. Información que Recopilamos</h2>
                    <p>Recopilamos información personal que usted nos proporciona al registrarse en nuestro sitio, realizar una compra o contactarnos. Esto incluye su nombre, dirección de correo electrónico, dirección postal y detalles de pago.</p>

                    <h2>2. Cómo Usamos Su Información</h2>
                    <p>Utilizamos su información para procesar pedidos, responder a consultas y mejorar nuestros servicios. También podemos usar su información para enviarle ofertas y promociones si ha dado su consentimiento para recibirlas.</p>

                    <h2>3. Protección de Datos</h2>
                    <p>Implementamos medidas de seguridad para proteger su información personal contra acceso no autorizado, alteración, divulgación o destrucción. Sin embargo, ningún método de transmisión por Internet o de almacenamiento electrónico es 100% seguro.</p>

                    <h2>4. Compartición de Datos</h2>
                    <p>No compartimos su información personal con terceros, excepto cuando es necesario para procesar su pedido o cuando la ley lo requiere.</p>

                    <h2>5. Sus Derechos</h2>
                    <p>Usted tiene derecho a acceder, corregir o eliminar su información personal. Puede ejercer estos derechos poniéndose en contacto con nosotros a través de <a href="mailto:contacto@doggift.com">contacto@doggift.com</a>.</p>

                    <h2>6. Cambios en la Política de Privacidad</h2>
                    <p>Podemos actualizar nuestra política de privacidad ocasionalmente. Cualquier cambio será publicado en esta página.</p>

                    <h2>7. Contacto</h2>
                    <p>Si tiene preguntas sobre nuestra política de privacidad, por favor contáctenos a <a href="mailto:contacto@doggift.com">contacto@doggift.com</a>.</p>

                    <button onClick={handleAcceptPrivacy} className="accept-button">Acepto la protección de datos</button>
            </div>
        );
};

export default PrivacyPolicy;
