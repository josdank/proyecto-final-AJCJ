import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from './Home';

test('renderiza correctamente el componente Home', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
  
    // Verifica que el encabezado principal se renderiza correctamente
    expect(screen.getByText(/¡Bienvenido a DOGGIFT!/i)).toBeInTheDocument();
  
    // Verifica que el subtítulo se renderiza correctamente
    expect(screen.getByText(/El mejor lugar para consentir a tu mascota/i)).toBeInTheDocument();
  
    // Verifica que la sección "Comida Saludable" esté presente en un h2
    const comidaSaludableHeaders = screen.getAllByText(/Comida Saludable/i);
    expect(comidaSaludableHeaders[0]).toBeInTheDocument();
  
    // Verifica que la sección "Ofertas Especiales" esté presente
    expect(screen.getByText(/Ofertas Especiales/i)).toBeInTheDocument();
  
    // Verifica que la sección "Amor Mascotas" esté presente
    expect(screen.getByText(/Amor Mascotas/i)).toBeInTheDocument();
  
    // Verifica que el botón "Ir a la Tienda" tiene el enlace correcto
    const shopLink = screen.getByRole('link', { name: /Ir a la Tienda/i });
    expect(shopLink).toHaveAttribute('href', '/tienda');
  });

  
