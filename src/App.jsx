import React from 'react';
import Navbar from './components/Navbar'; // Importando o componente Navbar
import Home from './pages/Home'; // Importando o componente Home

// Definindo o componente principal App
function App() {
  return (
    // Div principal que envolve todo o conteúdo da aplicação
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar /> {/* Renderizando o componente Navbar */}
      <Home /> {/* Renderizando o componente Home */}
    </div>
  );
}

export default App; // Exportando o componente App como padrão