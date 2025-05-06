import { Code, Globe, Palette, Smartphone } from 'lucide-react';
import React from 'react'
import { useRecoilValue } from 'recoil';
import { darkAtom } from '../store/atoms/DarkAtom';
import ServiceCard from './ServiceCard';
import serviceAnime from '/src/assets/service-anime.json'
import SubHeading from './SubHeading';
import CustomLottie from './CustomLottie';
import webAnime from "/src/assets/web-anime.json"
import uxAnime from "/src/assets/ux-anime.json"
import mobileAnime from "/src/assets/mobile-anime.json"

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
    <div className="py-20 px-6">
      <div className=" container mx-auto">
        
        <CustomLottie data={serviceAnime} customClass={'md:w-[60%]'}/>
        
        <SubHeading customClass={"text-center  mb-12"} text={"What I can offer to help your business grow"}/>

        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCard 
          anime={webAnime} 
          headingSize={"text-center md:text-3xl "} 
          heading={"Web Development"} 
          description={"I specialize in building modern, full-stack web applications using cutting-edge technologies. On the front end, I craft responsive and high-performance interfaces with React.js and Next.js. For back-end development, I work with Node.js and Express, as well as Java with Spring Boot, to create secure and scalable APIs. I’m experienced with both relational and NoSQL databases, including PostgreSQL, MySQL, and MongoDB, ensuring that your data is handled efficiently and reliably. Whether you're looking for a dynamic single-page application or a robust enterprise system, I deliver solutions tailored to your needs, from design to deployment."}
          />
          
          <ServiceCard 
          anime={mobileAnime} 
          headingSize={"text-center md:text-3xl md:mt-10 "} 
          heading={"Mobile Development"}
          imageClass={"md:mt-14"} 
          description={"I build cross-platform mobile applications using Flutter, allowing for a single codebase to run smoothly on both Android and iOS devices. With Flutter’s fast development cycle and expressive UI capabilities, I deliver visually engaging, high-performance apps that provide a seamless user experience. Whether you need a business app, a startup MVP, or a feature-rich mobile product, I focus on clean architecture, responsive design, and efficient state management to ensure your app is reliable and scalable."}/>
          
          <ServiceCard 
          anime={uxAnime} 
          headingSize={"text-center md:text-3xl md:mt-10 mt-5"} 
          heading={"UI/UX  Design"}
          imageClass={"md:mt-14"}
          description={"I design intuitive and user-centered interfaces that enhance usability and create memorable digital experiences. My UI/UX design process focuses on understanding user behavior and aligning it with business goals through thoughtful layout, clear navigation, and responsive design principles. Whether it's for a website or a mobile app, I ensure every screen is both visually appealing and functionally effective. From wireframing and prototyping to final design, I use modern tools and best practices to deliver seamless and engaging user journeys."} />

        </div>
      </div>
    </div>
  );
};

export default Service