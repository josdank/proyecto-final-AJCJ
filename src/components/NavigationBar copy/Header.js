import React from 'react';
import './estilo.css';
import Logo from '../../assets/img/logoDoggift.png'
import Icono from '../../assets/img/iconoDoggift.png'

const Header = ({ onShowProductList, onShowNosotros }) => {
    return (
        <header className="header">
            <div className='header__background'>
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
                    <div className='header__navbar--opciones'>
                        <a>
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
                        <div>
                            <div className='header__navbar--busqueda--lupa'>
                                <a class="fa-solid fa-magnifying-glass"></a>
                                <div className='linea'></div>
                            
                                <a class="fa-solid fa-cart-shopping"></a>
                                <div className='linea'></div>
                                <div className='cantidades'>
                                    <div className='carrito_contador'>0.00</div>
                                    <div className='carrito_contador_items'>0</div>
                                    <div className='carrito_contador_itemsPalabra'>items</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
