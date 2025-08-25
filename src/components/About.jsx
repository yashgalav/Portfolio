import { Code, Globe, Download } from 'lucide-react';
import React from 'react'
import { useRecoilValue } from 'recoil';
import { darkAtom } from '../store/atoms/DarkAtom';
import Lottie from 'lottie-react';
import animationData from "/src/animations/about.json"
import Slider from './Slider';

const About = () => {
  const darkMode = useRecoilValue(darkAtom);


  return (
    <div className=" py-20 px-6 ">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Know Who I'M</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 '>
          <div className='flex justify-center items-center'>
              <span className='flex items-center w-52 h-52 md:h-96 md:w-96'>
                <Lottie animationData={animationData} loop={true} />
              </span>
          </div>
        <section className="p-6 max-w-3xl mx-auto">
          <ul className={`list-disc list-inside space-y-2 ${darkMode?"text-gray-300": "text-black"}`}>
            <li>Hi Everyone, I am <strong>Yash Kumar</strong> from India</li>
            <li>👨‍💻 <strong>Software Engineer with 3+ years of experience</strong> in full-stack web development</li>
            <li>⚙️ Skilled in building scalable, maintainable, and performance-driven applications</li>
            <li>🧰 Proficient in modern tech stacks including <strong>React, Node.js, Spring Boot, and MySQL</strong></li>
            <li>📈 Experience working with startups, agencies, and solo entrepreneurs</li>
            <li>🎯 Capable of taking a project from concept to launch — independently or as part of a team</li>
            <li>🤝 Committed to clear communication, timely delivery, and exceeding client expectations</li>
            <li>🌍 Open to freelance opportunities globally — <strong>let's build something great together!</strong></li>
          </ul>
        </section>
        </div>
        

        <Slider/>
      </div>
    </div>
  );
};

export default About
