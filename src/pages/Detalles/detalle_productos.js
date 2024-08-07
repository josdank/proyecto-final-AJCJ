import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Productos.css';
import Pastel1 from '../../assets/img/recetas_de_tartas_para_perros_diy_22348_orig.jpg';
import Pastel2 from '../../assets/img/Tarta-para-perros-1.jpeg';
import Pastel3 from '../../assets/img/tartas-para-perros-1-XxXx80.jpg';

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
        { src: "https://t2.ea.ltmcdn.com/es/posts/8/4/3/recetas_de_tartas_para_perros_diy_22348_orig.jpg", name: "Mini-Pastel", price: "$1.00 c/u" },
        { src: "https://www.zooplus.es/magazine/wp-content/uploads/2021/11/Tarta-para-perros-1.jpeg", name: "Galletas", price: "$1.00 c/u" },
        { src: "https://www.hogarmania.com/archivos/202401/tartas-para-perros-1-XxXx80.jpg", name: "Pastelitos", price: "$1.00 c/u" },
        { src: "https://truffle-assets.tastemadecontent.net/b20145d5-torta-perros_1920x1080.png", name: "Galletas", price: "$1.00 c/u" }
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
