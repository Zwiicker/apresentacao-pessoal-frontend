import React from 'react';
import profilePic from '../assets/profile-pic.jpg'; // Substitua pelo caminho da sua imagem

function Home() {

  return (
    <div className="flex flex-col min-h-screen font-poppins">
      {/* Menu de Navegação */}
      <main className="flex-grow p-12 mt-16 ">
        {/* Seção Sobre Mim */}
        <section id="sobre" className="flex justify-start mb-20">
          <div className="flex flex-col md:flex-row items-center">
            {/* Imagem */}
            <img
              src={profilePic} // Substitua pelo caminho da sua imagem
              alt="Henrique"
              className="w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-blue-950 mb-4 md:mb-0 md:mr-6"
            />
            <div className="text-center md:text-left ml-4">
              <h1 className="text-2xl font-bold mb-5 text-blue-950">Olá, meu nome é</h1>
              <h2 className="text-4xl font-bold mb-5 text-blue-600 ">Henrique Zwicker</h2>
              <p className="text-2xl   text-blue-950">Desenvolvedor focado em carreira na programação, sempre buscando aprender e crescer em áreas como desenvolvimento web e frameworks.</p>
            </div>
          </div>
        </section>                   
      </main>
    </div>
  );
}

export default Home;
