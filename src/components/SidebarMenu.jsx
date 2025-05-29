import React from 'react';
import './SidebarMenu.css';

function SidebarMenu({ isOpen, setIsOpen }) {
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Botón hamburguesa, solo visible cuando el menú está cerrado */}
      {!isOpen && (
        <button className="hamburger" onClick={toggleMenu}>
          ☰
        </button>
      )}

      <nav className={`sidebar ${isOpen ? 'open' : ''}`}>
        {/* Botón cerrar dentro del menú */}
        {isOpen && (
          <button className="close-btn" onClick={toggleMenu}>
            ×
          </button>
        )}

        <ul>
          <li>Compras</li>
          <li>Srvicios Especiales</li>
          <li>Cotizaciones</li>
          <li>Usuarios</li>
          <li>Proveedores</li>
          <li>Clientes</li>
          <li>Clientes Atrasados</li>
          <li>Productos</li>
          <li>Inventario</li>
          <li>Ingresos</li>
          <li>Egresos</li>
          <li>Zeta</li>
          <li>Pedidos</li>
          <li>Devoluciones</li>
          <li>Ajustes Inventario</li>
          <li>Cierre Diario</li>
          <li>Traspasos</li>
          <li>Kardex</li>
        </ul>
      </nav>

      {isOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </>
  );
}

export default SidebarMenu;
