import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './estilo.css';
import Logo from '../../assets/img/logoDoggift.png';
import Icono from '../../assets/img/iconoDoggift.png';
import HamburguesaMenu from '../../assets/img/hamburguesaMenu.png';

const Header = ({ onShowProductList, onShowNosotros, onShowHome, cart = [], onSearch }) => {
    const [scrolled, setHasScrolled] = useState(false);
    const [searchInput, setSearchInput] = useState('');
    const apply = 400;
    const tolerance = 10;
    const opcionesRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            if (scrollPosition > apply + tolerance && !scrolled) {
                setHasScrolled(true);
            } else if (scrollPosition < apply - tolerance && scrolled) {
                setHasScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    const handleClick = (e) => {
        e.preventDefault();
        if (opcionesRef.current) {
            opcionesRef.current.classList.toggle('desplegable');
        }
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (opcionesRef.current && !opcionesRef.current.contains(event.target)) {
                opcionesRef.current.classList.remove('desplegable');
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleSearchInputChange = (e) => {
        setSearchInput(e.target.value);
    };

    const handleSearchSubmit = () => {
        if (onSearch) {
            onSearch(searchInput);
        }
    };

    return (
        <header className='header'>
            <div className={`header__background ${scrolled ? 'scrolled' : ''}`}>
                <div className='head'>
                    <a href='https://twitter.com/' className="fa-brands fa-x-twitter" target="_blank" rel="noopener noreferrer"></a>
                    <a href='https://www.google.com/' className="fa-brands fa-tiktok" target="_blank" rel="noopener noreferrer"></a>
                    <a href='https://www.facebook.com/' className="fa-brands fa-facebook" target="_blank" rel="noopener noreferrer"></a>
                    <a href='https://www.instagram.com/' className="fa-brands fa-instagram" target="_blank" rel="noopener noreferrer"></a>
                </div>
            </div>

            <div className='header__navbar'>
                <div className='navbar'>
                    <Link to="/" className='logo' onClick={onShowHome}>
                        <img src={Logo} alt="Logo" className='doggiftLogo' />
                    </Link>
                    <div ref={opcionesRef} className='header__navbar--opciones'>
                        <Link to="/home" onClick={onShowHome}>
                            <i className="fa-solid fa-house"></i>
                            <span className='header__navbar--opciones--nombre'>HOME</span>
                        </Link>
                        <Link to="/tienda" onClick={onShowProductList}>
                            <i className="fa-solid fa-shop"></i>
                            <span className='header__navbar--opciones--nombre'>TIENDA</span>
                        </Link>
                        <Link to="/comida">
                            <i className="fa-solid fa-bone"></i>
                            <span className='header__navbar--opciones--nombre'>COMIDA DOGGIFT</span>
                        </Link>
                        <Link to="/mascotas">
                            <i className="fa-solid fa-dog"></i>
                            <span className='header__navbar--opciones--nombre'>CUIDADO MASCOTAS</span>
                        </Link>
                        <Link to="/nosotros">
                            <img src={Icono} alt='Icono' className='doggiftIcono' />
                            <span className='header__navbar--opciones--nombre'>NOSOTROS</span>
                        </Link>
                    </div>

                    <div className='header__navbar--busqueda'>
                        <div className='bloqueDos'>
                            <div className='header__navbar--busqueda--lupa'>
                                <input
                                    type="text"
                                    value={searchInput}
                                    onChange={handleSearchInputChange}
                                    placeholder="Buscar..."
                                    className='search-input'
                                />
                                <button className="fa-solid fa-magnifying-glass" id='lupaNavbar' onClick={handleSearchSubmit}></button>
                                <div className='linea'></div>
                                <Link to="/carrito">
                                    <button className="fa-solid fa-cart-shopping" id='carritoNavbar'></button>
                                </Link>
                                <div className='lineaHamburguesa'></div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
