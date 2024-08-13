import React, { useEffect, useRef, useState } from 'react';
import './estilo.css';
import Logo from '../../assets/img/logoDoggift.png'
import Icono from '../../assets/img/iconoDoggift.png'
import HamburguesaMenu from '../../assets/img/hamburguesaMenu.png'


const Header = ({ onShowProductList, onShowNosotros }) => {
    const [scrolled, setHasScrolled] = useState(false);
    const apply = 400; // Valor de scroll para aplicar la clase
    const tolerance = 10; // Margen para evitar el flickering
    let opcionesRef = useRef(null);
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            if (scrollPosition > apply + tolerance) {
                if (!scrolled) {
                    setHasScrolled(true);
                }
            } else if (scrollPosition < apply - tolerance) {
                if (scrolled) {
                    setHasScrolled(false);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
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
    return (
        <header className='header'>
            <div className={`header__background ${scrolled ? 'scrolled' : 'header__background'}`}>
                <div className='head'>
                    <a href='https://twitter.com/' class="fa-brands fa-x-twitter"></a>
                    <a href='https://www.google.com/' class="fa-brands fa-tiktok"></a>
                    <a class="fa-brands fa-facebook"></a>
                    <a class="fa-brands fa-instagram"></a>
                </div>
            </div>

            <div className='header__navbar'>
                <div className='navbar'>
                    <a href='' className='logo'>
                        <img src={Logo} alt="Logo" className='doggiftLogo'></img>
                    </a>
                    <div ref={opcionesRef} className='header__navbar--opciones'>
                        <a className='homeA'>
                            <i class="fa-solid fa-house"></i>
                            <span className='header__navbar--opciones--nombre'>HOME</span>
                        </a>
                        <a>
                            <i class="fa-solid fa-shop"></i>
                            <span className='header__navbar--opciones--nombre'>TIENDA</span>
                        </a>
                        <a>
                            <i class="fa-solid fa-dog"></i>
                            <span className='header__navbar--opciones--nombre'>CUIDADO MASCOTAS</span>
                        </a>
                        <a>
                            <i class="fa-solid fa-bone"></i>
                            <span className='header__navbar--opciones--nombre'>COMIDA DOGGIFT</span>
                        </a>
                        <a>
                            <img src={Icono} alt='Icono' className='doggiftIcono'></img>
                            <span className='header__navbar--opciones--nombre'>NOSOTROS</span>
                        </a>
                    </div>

                    <div className='header__navbar--busqueda'>
                        <div className='bloqueDos'>
                            <div className='header__navbar--busqueda--lupa'>
                                <a class="fa-solid fa-magnifying-glass" id='lupaNavbar'></a>
                                <div className='linea'></div>

                                <a class="fa-solid fa-cart-shopping" id='carritoNavbar'></a>
                                <div className='linea'></div>
                                <div className='cantidades'>
                                    <div className='carrito_contador'>0.00</div>
                                    <div className='carrito_contador_items'>0</div>
                                    <div className='carrito_contador_itemsPalabra'>items</div>
                                </div>
                                <div className='lineaHamburguesa'></div>
                                <a href="#" id='hamburguesaNavbar' onClick={handleClick}>
                                    <img src={HamburguesaMenu} className='hamburguesaMenu'></img>
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
