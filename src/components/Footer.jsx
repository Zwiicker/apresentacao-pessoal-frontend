import React from 'react';


function Footer() {
  return (
    // Container do rodapé com um gradiente de fundo e espaçamento
    <footer className="bg-gradient-to-r from-blue-500 via-blue-950 to-blue-950 p-2 mt-auto rounded-t-lg">
      {/* Texto centralizado no rodapé */}
      <p className="text-white text-center text-lg">© 2024 Henrique Zwicker</p>
    </footer>
  );
}

// Exportação do componente Footer
export default Footer;
