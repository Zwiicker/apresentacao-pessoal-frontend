import React from 'react';
import Navbar from './components/Navbar'; // Importando o componente Navbar
import Home from './pages/Home'; // Importando o componente Home
import Footer from './components/Footer'; // Importando o componente Footer

// Definindo o componente principal App
function App() {
  return (
    // Div principal que envolve todo o conteúdo da aplicação
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar /> {/* Renderizando o componente Navbar */}
      <Home /> {/* Renderizando o componente Home */}
      <Footer /> {/* Renderizando o componente Footer */}
    </div>
  );
}

export default App; // Exportando o componente App como padrão