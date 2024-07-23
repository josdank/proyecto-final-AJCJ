import React, { useState } from 'react';

const Facturacion = ({ total }) => {
    const [datosFactura, setDatosFactura] = useState({ nombre: '', direccion: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDatosFactura(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes manejar el envío de los datos de la factura
        console.log('Datos de Facturación:', datosFactura);
    };

    return (
        <div className="facturacion">
            <h2>Factura</h2>
            <p>Total de la compra: ${total.toFixed(2)}</p>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Nombre:
                        <input
                            type="text"
                            name="nombre"
                            value={datosFactura.nombre}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Dirección:
                        <input
                            type="text"
                            name="direccion"
                            value={datosFactura.direccion}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default Facturacion;
