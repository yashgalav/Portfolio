import { Code, Globe, Palette, Smartphone } from 'lucide-react';
import React from 'react'
import { useRecoilValue } from 'recoil';
import { darkAtom } from '../store/atoms/DarkAtom';

const Service = () => {
  const darkMode = useRecoilValue(darkAtom);
  
  
  const service = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Development",
      description: "Building responsive and dynamic web applications using modern technologies"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Development",
      description: "Creating cross-platform mobile applications"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Frontend Development",
      description: "Crafting beautiful and functional user interfaces"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Designing intuitive and engaging user experiences"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">My Services</h2>
        <p className={`text-center ${darkMode ? `text-gray-300` :`text-gray-600`} mb-12`}>
          What I can offer to help your business grow
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {service.map((service, index) => (
            <div 
              key={index}
              className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}
            >
              <div className="text-blue-600 mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className= {`${darkMode ? `text-gray-300` :`text-gray-600`}`}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service