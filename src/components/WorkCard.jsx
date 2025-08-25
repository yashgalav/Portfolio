import React from 'react'
import { useRecoilValue } from 'recoil'
import { darkAtom } from '../store/atoms/DarkAtom'
import NormalButton from './NormalButton';
import { Code, Code2, Github, Link2 } from 'lucide-react';

export default function WorkCard({ title, description ,onclick, link, github }) {
    const darkMode = useRecoilValue(darkAtom);
    
    return (
        <div
            className={`transform md:hover:-translate-y-6 hover:scale-105 md:transition duration-300 rounded-lg overflow-hidden mb-10 md:mb-0 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}
        >
            <div className="w-full max-w-2xl aspect-video rounded-lg overflow-hidden shadow-lg">
                <iframe
                    className="w-full h-full"
                    src={link}
                    title="YouTube Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>

            <div className="p-4 ">
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <div className={`${darkMode ? `text-gray-300` : `text-gray-600`}`}>{description}</div>
            </div>
            <div className='flex justify-start items-start p-2 space-x-2 '>
                {onclick && <NormalButton 
                    buttonName={"Visit"}
                    icon={<Link2 />}
                    onclick={onclick}
                />}
                {github && 
                    <NormalButton 
                    buttonName={"Code"}
                    icon={<Code2 />}
                    onclick={github}
                />
                }
            </div>
        </div>
    )
}
