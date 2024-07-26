import React from 'react';
import { FaLinkedin, FaGithub, FaReact, FaJsSquare,FaHtml5,FaAngular,FaJava,FaPython} from 'react-icons/fa'; // Usando react-icons
import { SiTypescript,SiCsharp,SiDotnet} from 'react-icons/si';
import ProjectCard from '../components/ProjectCard';
import profilePic from '../assets/profile-pic.jpg'; // Substitua pelo caminho da sua imagem



function Home() {

  const skills = [
    { name: "HTML & CSS",  icon: <FaHtml5 className="text-orange-600 text-2xl" /> ,level: 60 },
    { name: "JavaScript",  icon: <FaJsSquare className="text-yellow-500 text-2xl" /> ,level: 50 },
    { name: "C#", icon: <SiCsharp className="text-purple-600 text-2xl" />, level: 50  },
    { name: "Java", icon: <FaJava className="text-red-700 text-2xl" />, level: 50  },
    { name: "React", icon: <FaReact className="text-blue-600 text-2xl" /> ,level: 35 },
    { name: "Angular", icon: <FaAngular className="text-red-600 text-2xl" />, level: 30 },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-500 text-2xl" />,level: 30 },
    { name: ".NET", icon: <SiDotnet className="text-purple-700 text-2xl" />, level: 30  },
    { name: "Python", icon: <FaPython className="text-blue-600 text-2xl" />,level: 30  },

  ];

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

     {/* Seção Habilidades */}
      <section id="habilidades" className="mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map(skill => (
            <div key={skill.name} className="p-4 border border-gray-300 rounded-lg bg-white shadow-md animate-grow">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-200">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold">{skill.name}</h3>
              </div>
              <div className="relative pt-1">
                <div className="flex items-center justify-between mb-2">
                </div>
                <div className="flex h-4 mt-1 overflow-hidden rounded-full bg-gray-200">
                  <div
                    className="flex flex-col justify-center text-center whitespace-nowrap bg-gradient-to-r from-blue-400 bg-blue-950 animate-grow"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

        {/* Seção Projetos Recentes */}
        <section id="projetos" className="mb-20">
          <h2 className="text-3xl font-bold mb-6 ">Projetos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard 
              title="Site sobre Dragon ball Z" 
              description="Explore um site dedicado ao universo de Dragon Ball Z, com detalhes sobre os personagens, suas habilidades e a evolução da série" 
              image="\project-one.png"
              url="https://js-dragonballz-dev-git-main-zwiicker.vercel.app/"
            />
            <ProjectCard 
              title="Lista de tarefas" 
              description="Aplicação intuitiva para gerenciar suas tarefas diárias, permitindo criar, editar e organizar suas atividades de forma eficiente" 
              image="\project-two.png" 
              url="https://02-todolist-zwiicker.vercel.app/"
            />
            <ProjectCard 
              title="Site web sobre a franquia GTA V" 
              description="Descubra tudo sobre a famosa franquia GTA V com um site que oferece informações detalhadas" 
              image="\project-three.png" 
              url="https://zwiicker.github.io/html-gtav-dev/"
            />
          </div>
        </section>

        {/* Seção Contato */}
        <section id="contato" className="mb-12">
          <ul className="flex justify-center space-x-6">
            <li>
              <a 
                href="https://www.linkedin.com/in/henriquezgm/" 
                className="flex items-center space-x-2 text-blue-600 hover:underline transition duration-300"
              >
                <FaLinkedin className="h-12 w-12 text-blue-600" />
                <span>LinkedIn</span>
              </a>
            </li>
            <li>
              <a 
                href="https://github.com/Zwiicker" 
                className="flex items-center space-x-4 text-gray-800 hover:underline transition duration-300"
              >
                <FaGithub className="h-12 w-12 text-gray-800" />
                <span>GitHub</span>
              </a>
            </li>
          </ul>
        </section>
      </main>

    </div>
  );
}

export default Home;
