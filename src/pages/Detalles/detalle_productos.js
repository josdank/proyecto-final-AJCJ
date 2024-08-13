import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Productos.css';
import Pastel1 from '../../assets/img/recetas_de_tartas_para_perros_diy_22348_orig.jpg';
import Pastel2 from '../../assets/img/Tarta-para-perros-1.jpeg';
import Pastel3 from '../../assets/img/tartas-para-perros-1-XxXx80.jpg';
import Empanadas from '../../assets/img/Empanadas.jpg';
import pastelitos from "../../assets/img/pastelitos.jpg";
import minipastel from "../../assets/img/mini-pastel.jpg";
import pastelillos from "../../assets/img/pastelillos.jpg";
import Galletas from "../../assets/img/galletas.jpg";

const DetalleProductos = () => {
    const [quantity, setQuantity] = useState(1);
    const [price, setPrice] = useState(3.00);
    const [mainImage, setMainImage] = useState(Pastel1);
    const [hoverImage, setHoverImage] = useState(null);
    const [isIngredientsVisible, setIsIngredientsVisible] = useState(false);

    const handleIncrease = () => {
        setQuantity(quantity + 1);
        setPrice((quantity + 1) * 3.00);
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
            setPrice((quantity - 1) * 3.00);
        }
    };

    const handleMouseOver = (image) => {
        setHoverImage(image);
    };

    const handleMouseOut = () => {
        setHoverImage(null);
    };

    const handleImageClick = (image) => {
        setMainImage(image);
    };

    const toggleIngredients = () => {
        setIsIngredientsVisible(!isIngredientsVisible);
    };

    const relatedProducts = [
        { src: (pastelillos), name: 'Mini-Pastel', price: '$3.00 c/u' },
        { src: (Galletas), name: 'Galletas', price: '$1.00 c/u' },
        { src: (pastelitos), name: 'Pastelillos', price: '$2.00 c/u' },
        { src: (minipastel), name: 'Pastel', price: '$4.00 c/u' },
        { src: (Empanadas), name: 'Empanadas', price: '$1.00 c/u' },
        { src: 'https://th.bing.com/th/id/OIP.AnicgOYgz1Jiw5FP4q_d0QHaHa?rs=1&pid=ImgDetMain', name: 'Helados', price: '$0.75 c/u' },
        { src: 'https://m.media-amazon.com/images/I/71MPZzuUrLL._SX569_.jpg', name: 'Tortillas', price: '$2.00 c/u' },
        { src: 'https://th.bing.com/th/id/OIP.yvC7Ib7yVOVBiozThlFSHAAAAA?w=474&h=316&rs=1&pid=ImgDetMain', name: 'Huesitos', price: '$1.25 c/u' },
        { src: 'https://th.bing.com/th/id/R.c355db2a4ef84c23dc9531ed99f0b662?rik=8b3T2V%2fa0J2c6A&riu=http%3a%2f%2fwww.polacocina.com%2fwp-content%2fuploads%2f2018%2f11%2fIMG_1393-thegem-blog-timeline-large.jpg&ehk=8Sk8gj4uBICZusetPXVkpTfxJ5v26JD3KoLi4%2f33XbU%3d&risl=&pid=ImgRaw&r=0g', name: 'Premios', price: '$1.75 c/u' },
        { src: 'https://th.bing.com/th/id/OIP.9swjVepit8_3XjuhZN65VQHaHa?w=219&h=219&c=7&r=0&o=5&pid=1.7', name: 'Pedigree', price: '$2.50 c/u' },
        { src: 'https://m.media-amazon.com/images/I/71ADhDMXfSL._AC_SL1500_.jpg', name: 'Welness', price: '$3.00 c/u' },
        { src: 'https://th.bing.com/th/id/OIP.drFfi0R2L7di_VlAPdIUgwHaHa?rs=1&pid=ImgDetMain', name: 'Wiskas', price: '$1.60 c/u' }
    ];

    const responsive = {
        superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
        desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
        tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
    };

    return (
        <div className="product-page">
            <div className="product-detail">
                <div className="image-gallery">
                    <img 
                        src={hoverImage || mainImage} 
                        alt="Pastel Saludable para perro" 
                        className="product-image" 
                    />
                    <div className="thumbnail-images">
                        <img 
                            src={Pastel1} 
                            alt="Thumbnail 1" 
                            onMouseOver={() => handleMouseOver(Pastel1)}
                            onMouseOut={handleMouseOut}
                            onClick={() => handleImageClick(Pastel1)} 
                        />
                        <img 
                            src={Pastel2} 
                            alt="Thumbnail 2" 
                            onMouseOver={() => handleMouseOver(Pastel2)}
                            onMouseOut={handleMouseOut}
                            onClick={() => handleImageClick(Pastel2)} 
                        />
                        <img 
                            src={Pastel3} 
                            alt="Thumbnail 3" 
                            onMouseOver={() => handleMouseOver(Pastel3)}
                            onMouseOut={handleMouseOut}
                            onClick={() => handleImageClick(Pastel3)} 
                        />
                    </div>
                </div>
                <div className="product-info">
                    <h1>Pastel Saludable para perro</h1>
                    <h2>${price.toFixed(2)} c/u</h2>
                    <div className="line"></div>
                    <p className="description-title">Descripción</p>
                    <p>Este delicioso pastel está especialmente formulado para cachorros en crecimiento. Está elaborado con ingredientes de alta calidad que proporcionan una nutrición completa y balanceada, mantieniedo a tu mascota saludable</p>
                    <p>Recomendado para:</p>
                    <ul>
                        <li>Tipo: Perro</li>
                        <li>Edad: Todas las edades</li>
                        <li>
                            <button onClick={toggleIngredients} className="ingredients-toggle">
                                {isIngredientsVisible ? 'Ingredientes' : 'Ingredientes'}
                            </button>
                            {isIngredientsVisible && (
                                <ul className="ingredients-list">
                                    <li>Harina de trigo</li>
                                    <li>Harina de avena</li>
                                    <li>Purée de zanahoria</li>
                                    <li>Huevos</li>
                                    <li>Yogur natural</li>
                                </ul>
                            )}
                        </li>
                    </ul>
                    <div className="action-buttons">
                        <div className="quantity-control">
                            <button onClick={handleDecrease}>-</button>
                            <span>{quantity}</span>
                            <button onClick={handleIncrease}>+</button>
                        </div>
                        <button className="add-to-cart">Añadir al carrito</button>
                    </div>
                </div>
            </div>
            <div className="line"></div>
            <div className="related-products">
                <h3>Productos Relacionados</h3>
                <Carousel responsive={responsive}>
                    {relatedProducts.map((product, index) => (
                        <div className="product-item" key={index}>
                            <img src={product.src} alt={product.name} />
                            <p>{product.name}</p>
                            <p className="price">{product.price}</p>
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );
}

export default DetalleProductos;
