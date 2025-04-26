import { Code ,Globe, Download} from 'lucide-react';
import React from 'react'
import { useRecoilValue } from 'recoil';
import { darkAtom } from '../store/atoms/DarkAtom';

const About = () => {
  const darkMode = useRecoilValue(darkAtom);
  
  
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">About Me</h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
          My journey and expertise in software development
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <Code className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Languages</h3>
            <p>HTML, CSS, JavaScript, React, Node.js</p>
          </div>
          
          <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <Globe className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Experience</h3>
            <p>3+ years of professional development experience</p>
          </div>
          
          <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <Download className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Projects</h3>
            <p>Completed 20+ major projects</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About
