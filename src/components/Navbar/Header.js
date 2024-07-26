import React from 'react';
import './Header.css';

const Header = ({ onShowProductList, onShowNosotros }) => {
    return (
        <header className="header">
            <div className='head'>
                <FontAwesomeIcon icon="fa-brands fa-x-twitter" />
                <FontAwesomeIcon icon="fa-brands fa-tiktok" />
                <FontAwesomeIcon icon="fa-brands fa-facebook" />
                <FontAwesomeIcon icon="fa-brands fa-instagram" />
            </div>

            <div className='navbar'>

            </div>
            <script src="https://kit.fontawesome.com/3e22398672.js" crossorigin="anonymous"></script>
        </header>
    );
};

export default Header;
