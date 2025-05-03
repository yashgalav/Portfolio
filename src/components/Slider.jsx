import React from 'react'
import Marquee from 'react-fast-marquee'
import { useRecoilValue } from 'recoil';
import { darkAtom } from '../store/atoms/DarkAtom';
import { useMediaQuery } from 'react-responsive';

export default function Slider() {
  const darkMode = useRecoilValue(darkAtom);
  const isMobile = useMediaQuery({ maxWidth: 600 });
  const imgs = [
    "/src/assets/expressimg.png",
    "/src/assets/javaimg.png",
    "/src/assets/jiraimg.png",
    "/src/assets/mongodbimg.png",
    "/src/assets/mysqlimg.png",
    "/src/assets/nextimg.png",
    "/src/assets/nodeimg.png",
    "/src/assets/postgresimg.png",
    "/src/assets/postmanimg.png",
    "/src/assets/reactimg.png",
    "/src/assets/slackimg.png",
    "/src/assets/springbootimg.png",
  ]


  return (
    <div className='mb-10'>
      <Marquee
    gradient={true}
    gradientColor={darkMode ? '#111827' : '#F1F5F9'}
    style={{borderRadius: '5px',
    textShadow: '2px' 
   }}
   gradientWidth={isMobile ?100:300}
    >
       {imgs.map((logo) => (
        <div key={logo}>
          <img 
          
          src={`${logo}`}
          alt={logo.replace(".png", "")}
          className="mx-8 max-w-none w-32 h-26 shadow-white"
        />
        </div>
      ))}
    </Marquee>
    </div>
  )
}

