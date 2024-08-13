import React from 'react';
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
                </ul>
            </nav>
        </div>
    );
};

export default NavegacionCategorias;
