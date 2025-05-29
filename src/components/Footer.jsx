import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="vision">Nuestra visión: Ser la droguería de confianza para el bienestar de todas las familias quindianas.</p>

        <div className="contact-info">
          <p>📱 Celular: 312 345 6789</p>
          <p>📍 Dirección: Calle 10 # 15-25, Armenia, Quindío</p>
        </div>

        <div className="social-icons">
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Droguería Quintero. Todos los derechos reservados.
      </div>
    </footer>
  );
}

export default Footer;
