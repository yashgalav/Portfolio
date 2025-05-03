import React from 'react'
import { useRecoilValue } from 'recoil'
import { darkAtom } from '../store/atoms/DarkAtom'
import Heading from './Heading'
import CustomLottie from './CustomLottie'

export default function ServiceCard({ anime, heading, description, imageClass, key, headingSize}) {
    const darkMode = useRecoilValue(darkAtom)

    return (
        <div
            key= {key}
            className={`p-6 rounded-lg mb-5 transform md:hover:-translate-y-6 hover:scale-105 md:transition duration-300 ${darkMode ? 'bg-gray-800 ' : 'bg-white'} shadow-lg`}
        >
            <CustomLottie data={anime} customClass={`${imageClass}   md:w-[300px] md:h-[150%]`} />
            <Heading text={heading} size={headingSize} color={"text-purple-600 shadow-purple-500 shadow-lg rounded-lg"}/>
            <p className={`text-center mt-4 font-medium  ${darkMode ? `text-gray-300` : `text-gray-600`}`}>{description}</p>
        </div>
    )
}
