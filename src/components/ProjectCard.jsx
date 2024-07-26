import React from 'react';
function ProjectCard({ title, description, image, url }) {
  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
    >
      <img 
        src={image} 
        alt={title} 
        className="w-full h-48 object-cover" 
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p>{description}</p>
      </div>
    </a>
  );
}

export default ProjectCard;