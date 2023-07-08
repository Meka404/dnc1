import {Container,Row,Col} from 'react-bootstrap'

import React from 'react';

export const Contactanos = () => {
  const handleSubmit = e => {
    e.preventDefault();
    // Lógica para enviar el correo con los datos del formulario
  };

  return (
    <div className="contact-container">
      <div className="contact-form">
        <h2>Contactanos</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nombre:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Correo electrónico:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Consulta:</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
      <div className="map-container">
        {/* Aquí puedes agregar el código para mostrar el mapa de ubicación */}
      </div>
    </div>
  );
};