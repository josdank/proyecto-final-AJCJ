import React from 'react';
import './Header.css';
import Logo from '../../assets/image/logoDoggift.png'
import Icono from '../../assets/images/iconoDoggift.png'

const Header = ({ onShowProductList, onShowNosotros }) => {
    return (
        <header className="header">
            <div className='header__background'>
                <div className='head'>
                    <i class="fa-brands fa-x-twitter"></i>
                    <i class="fa-brands fa-tiktok"></i>
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-instagram"></i>
                </div>
            </div>

            <div className='header__navbar'>
                <div className='navbar'>
                    <img src={Logo} alt="Logo" className='doggiftLogo'></img>
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
                                <i class="fa-solid fa-magnifying-glass"></i>
                                <div className='linea'></div>
                            
                                <i class="fa-solid fa-cart-shopping"></i>
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
