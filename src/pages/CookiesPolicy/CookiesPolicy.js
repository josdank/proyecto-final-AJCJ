import React from 'react';
import './CookiesPolicy.css';

const CookiesPolicy = () => {
        const handleAcceptCookies = () => {
                // Redirige a la página principal
                window.location.href = '/';
        };

        return (
            <div className="cookies-policy-page">
                    <h1>Políticas de Cookies</h1>
                    <p>Última actualización: Agosto 2024</p>
                    <h2>1. ¿Qué son las Cookies?</h2>
                    <p>Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita un sitio web. Se utilizan para mejorar su experiencia de navegación y para recopilar información sobre el uso del sitio.</p>

                    <h2>2. ¿Cómo Utilizamos las Cookies?</h2>
                    <p>Utilizamos cookies para recordar sus preferencias, para mejorar el funcionamiento del sitio y para analizar el tráfico web. También podemos usar cookies de terceros para fines de publicidad y análisis.</p>

                    <h2>3. Cómo Controlar las Cookies</h2>
                    <p>Usted puede configurar su navegador para bloquear o eliminar cookies. Sin embargo, esto puede afectar la funcionalidad del sitio web. Consulte la configuración de su navegador para más información.</p>

                    <h2>4. Cookies de Terceros</h2>
                    <p>Nuestro sitio puede contener enlaces a sitios web de terceros que pueden usar cookies. No tenemos control sobre estas cookies y le recomendamos revisar las políticas de cookies de esos sitios.</p>

                    <h2>5. Cambios en la Política de Cookies</h2>
                    <p>Podemos actualizar nuestra política de cookies ocasionalmente. Cualquier cambio será publicado en esta página.</p>

                    <h2>6. Contacto</h2>
                    <p>Si tiene alguna pregunta sobre nuestra política de cookies, contáctenos a <a href="mailto:contacto@doggift.com">contacto@doggift.com</a>.</p>

                    <button onClick={handleAcceptCookies} className="accept-button">Acepto las políticas de cookies</button>
            </div>
        );
};

export default CookiesPolicy;
