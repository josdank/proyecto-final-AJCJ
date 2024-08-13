import React from 'react';
import './Filtros.css';

const Filtros = ({ aplicarFiltros }) => {
    return (
        <div className="filtros">
            <h3>Categorías</h3>
            <label><input type="checkbox" /> Snacks</label>
            <label><input type="checkbox" /> Comida</label>
            <label><input type="checkbox" /> Pasteles</label>
            <label><input type="checkbox" /> Enlatados</label>
            <h3>Filtrar por Precio</h3>
            <input type="range" min="0" max="50" />
            <button>Filtrar</button>
            <h3>Disponibilidad</h3>
            <label><input type="checkbox" /> En oferta</label>
            <label><input type="checkbox" /> Disponible</label>
        </div>
    );
};

export default Filtros;
