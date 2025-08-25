import React from 'react'
import shape from "../assets/Shape.png"
import star from "../assets/Star.png"

export default function StarGif() {
    return (
        <div className='absolute -top-12 left-9 '>
            <div className=' flex justify-center items-center relative'>
                <img className='h-5 w-5 z-50 absolute left-auto' src={shape} alt="" />
                <img className='h-24 w-24   animate-spin-slow  ' src={star} alt="" />
            </div>
        </div>
    )
}
