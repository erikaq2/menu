import React, { useState } from 'react';
import SidebarMenu from './components/SidebarMenu';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={`main-container ${menuOpen ? 'menu-open' : ''}`}>
      <SidebarMenu isOpen={menuOpen} setIsOpen={setMenuOpen} />

      <div className="content">
        <h1>Bienvenidos 😊</h1>
        <p>Este es el contenido principal de la app de la droguería.</p>

        {/* Aquí puedes ir agregando más secciones */}

        <Footer />
      </div>
    </div>
  );
}

export default App;
