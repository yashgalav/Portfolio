import React from 'react'
import { useRecoilValue } from 'recoil';
import { darkAtom } from '../store/atoms/DarkAtom';

const Work = () => {
  const darkMode = useRecoilValue(darkAtom);
  
  
  const projects = [
    {
      title: "E-commerce Platform",
      category: "Web Development",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Social Media App",
      category: "Mobile Development",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Portfolio Website",
      category: "Frontend Development",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Dashboard Design",
      category: "UI/UX Design",
      image: "/api/placeholder/400/300"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">My Work</h2>
        <p className={`text-center ${darkMode ? `text-gray-300` : `text-gray-600`} mb-12`}>
          Check out some of my latest projects
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`rounded-lg overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className={`${darkMode ? `text-gray-300` : `text-gray-600`}`}>{project.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work