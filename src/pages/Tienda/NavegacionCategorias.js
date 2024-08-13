import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom
import './NavegacionCategorias.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCookieBite, faHamburger, faBirthdayCake, faBox } from '@fortawesome/free-solid-svg-icons';

const NavegacionCategorias = ({ cambiarCategoria }) => {
    return (
        <div className="navegacion-categorias">
            <nav>
                <ul>
                    <li onClick={() => cambiarCategoria('Snacks')}>
                        <FontAwesomeIcon icon={faCookieBite} />
                        Snacks
                    </li>
                    <li onClick={() => cambiarCategoria('Comida')}>
                        <FontAwesomeIcon icon={faHamburger} />
                        Comida
                    </li>
                    <li onClick={() => cambiarCategoria('Pasteles')}>
                        <FontAwesomeIcon icon={faBirthdayCake} />
                        Pasteles
                    </li>
                    <li onClick={() => cambiarCategoria('Enlatados')}>
                        <FontAwesomeIcon icon={faBox} />
                        Enlatados
                    </li>
                    <li>
                        <Link to="/detalles">
                            <FontAwesomeIcon icon={faBox} />
                            Detalles Producto
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default NavegacionCategorias;
