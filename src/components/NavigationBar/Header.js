import React, { useEffect, useRef, useState } from 'react';
import './estilo.css';
import Logo from '../../assets/img/logoDoggift.png';
import Icono from '../../assets/img/iconoDoggift.png';
import HamburguesaMenu from '../../assets/img/hamburguesaMenu.png';

const Header = ({ onShowView, onSearch, cart = [] }) => {
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

    const handleNavigation = (view) => (e) => {
        e.preventDefault();
        if (onShowView) {
            onShowView(view);
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
                    <a href='#' className='logo' onClick={handleNavigation('home')}>
                        <img src={Logo} alt="Logo" className='doggiftLogo' />
                    </a>
                    <div ref={opcionesRef} className='header__navbar--opciones'>
                        <a href="#" onClick={handleNavigation('Home')}>
                            <i className="fa-solid fa-house"></i>
                            <span className='header__navbar--opciones--nombre'>HOME</span>
                        </a>
                        <a href="#" onClick={handleNavigation('tienda')}>
                            <i className="fa-solid fa-shop"></i>
                            <span className='header__navbar--opciones--nombre'>TIENDA</span>
                        </a>
                        <a href="#" onClick={handleNavigation('mascotas')}>
                            <i className="fa-solid fa-dog"></i>
                            <span className='header__navbar--opciones--nombre'>CUIDADO MASCOTAS</span>
                        </a>
                        <a href="#" onClick={handleNavigation('comida')}>
                            <i className="fa-solid fa-bone"></i>
                            <span className='header__navbar--opciones--nombre'>COMIDA DOGGIFT</span>
                        </a>
                        <a href="#" onClick={handleNavigation('nosotros')}>
                            <img src={Icono} alt='Icono' className='doggiftIcono' />
                            <span className='header__navbar--opciones--nombre'>NOSOTROS</span>
                        </a>
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
                                <a className="fa-solid fa-magnifying-glass" id='lupaNavbar' onClick={handleSearchSubmit}></a>
                                <div className='linea'></div>
                                <a className="fa-solid fa-cart-shopping" id='carritoNavbar' onClick={handleNavigation('carrito')}></a>
                                <div className='linea'></div>
                                <div className='cantidades'>
                                    <div className='carrito_contador'>
                                        {cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
                                    </div>
                                    <div className='carrito_contador_items'>
                                        {cart.reduce((total, item) => total + item.quantity, 0)}
                                    </div>
                                    <div className='carrito_contador_itemsPalabra'>items</div>
                                </div>
                                <div className='lineaHamburguesa'></div>
                                <a href="#" id='hamburguesaNavbar' onClick={handleClick}>
                                    <img src={HamburguesaMenu} className='hamburguesaMenu' alt="Menú" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
