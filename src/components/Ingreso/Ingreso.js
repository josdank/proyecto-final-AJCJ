import React, { useState } from "react";
import estilosIngreso from "./estilosIngreso.css";

function Ingreso() {
  const [email, setEmail] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const emailValid = email.includes("@");
    if (emailValid && termsAccepted) {
      alert(`Email enviado: ${email}`);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="formulario">
      <h1 className="tituloFormulario">Información de contacto</h1>
      <div>
        <label
          htmlFor="email"
          className={`formularioLabel ${error ? "errorLabel" : ""}`}
        >
          Correo electrónico <br></br>
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={`inputFormulario ${error ? "errorInput" : ""}`}
        />
      </div>
      <div>
        <input
          type="checkbox"
          checked={termsAccepted}
          onChange={(e) => setTermsAccepted(e.target.checked)}
        />
        <label className="formularioTerminos">
          Acepto los términos y condiciones
        </label>
      </div>
      <button type="submit" className="formularioEnviar">
        Enviar
      </button>
    </form>
  );
}

export default Ingreso;
