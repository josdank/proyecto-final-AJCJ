import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Importar useParams y useNavigate para obtener parámetros de URL y navegar
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

const DetalleProductos = ({ agregarAlCarrito }) => {
    const { id } = useParams(); // Obtén el ID del producto de la URL
    const navigate = useNavigate(); // Para redirigir a la página de detalles del producto
    const [producto, setProducto] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [mainImage, setMainImage] = useState(Pastel1);
    const [hoverImage, setHoverImage] = useState(null);
    const [isIngredientsVisible, setIsIngredientsVisible] = useState(false);

    useEffect(() => {
        // Simulación de obtención del producto según el ID
        const productos = [
            { id: 1, name: 'Pastel Saludable para perro', price: 3.00, src: Pastel1, description: 'Este delicioso pastel está especialmente formulado para cachorros en crecimiento...' },
            // Agregar más productos si es necesario
        ];
        const prod = productos.find(p => p.id === parseInt(id));
        setProducto(prod);
        setMainImage(prod ? prod.src : Pastel1);
    }, [id]);

    if (!producto) {
        return <div>No se encontró el producto.</div>;
    }

    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleAddToCart = () => {
        agregarAlCarrito({ ...producto, quantity });
        alert(`${producto.name} añadido al carrito.`);
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

    const handleProductClick = (productId) => {
        navigate(`/detalle_producto/${productId}`);
    };

    const relatedProducts = [
        { id: 2, src: pastelillos, name: 'Mini-Pastel', price: '$3.00 c/u' },
        { id: 3, src: Galletas, name: 'Galletas', price: '$1.00 c/u' },
        { id: 4, src: pastelitos, name: 'Pastelillos', price: '$2.00 c/u' },
        { id: 5, src: minipastel, name: 'Pastel', price: '$4.00 c/u' },
        { id: 6, src: Empanadas, name: 'Empanadas', price: '$1.00 c/u' },
        // Agregar más productos relacionados si es necesario
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
                        alt={producto.name}
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
                    <h1>{producto.name}</h1>
                    <h2>${(producto.price * quantity).toFixed(2)} c/u</h2>
                    <div className="line"></div>
                    <p className="description-title">Descripción</p>
                    <p>{producto.description}</p>
                    <p>Recomendado para:</p>
                    <ul>
                        <li>Tipo: Perro</li>
                        <li>Edad: Todas las edades</li>
                        <li>
                            <button onClick={toggleIngredients} className="ingredients-toggle">
                                {isIngredientsVisible ? 'Ocultar Ingredientes' : 'Mostrar Ingredientes'}
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
                        <button className="add-to-cart" onClick={handleAddToCart}>Añadir al carrito</button>
                    </div>
                </div>
            </div>
            <div className="line"></div>
            <div className="related-products">
                <h3>Productos Relacionados</h3>
                <Carousel responsive={responsive}>
                    {relatedProducts.map((product, index) => (
                        <div
                            className="product-item"
                            key={index}
                            onClick={() => handleProductClick(product.id)}
                        >
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
