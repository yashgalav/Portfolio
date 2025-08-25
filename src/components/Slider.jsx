import React from 'react'
import Marquee from 'react-fast-marquee'
import { useRecoilValue } from 'recoil';
import { darkAtom } from '../store/atoms/DarkAtom';
import { useMediaQuery } from 'react-responsive';
import express from "../assets/expressimg.png";
import java from "../assets/javaimg.png";
import jira from "../assets/jiraimg.png"
import mongo from "../assets/mongodbimg.png"
import mysql from "../assets/mysqlimg.png"
import next from "../assets/nextimg.png"
import node from "../assets/nodeimg.png"
import postgres from "../assets/postgresimg.png"
import postman from "../assets/postmanimg.png"
import react from "../assets/reactimg.png"
import slack from "../assets/slackimg.png"
import springboot from "../assets/springbootimg.png"

export default function Slider() {
  const darkMode = useRecoilValue(darkAtom);
  const isMobile = useMediaQuery({ maxWidth: 600 });
  const imgs = [
    express,
    java,
    jira,
    mongo,
    mysql,
    next,
    node,
    postgres,
    postman,
    react,
    slack,
    springboot,
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

