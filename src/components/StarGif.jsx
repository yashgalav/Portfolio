import React from 'react'

export default function StarGif() {
    return (
        <div className='absolute -top-12 left-9 '>
            <div className=' flex justify-center items-center relative'>
                <img className='h-5 w-5 z-50 absolute left-auto' src="/src/assets/Shape.png" alt="" />
                <img className='h-24 w-24   animate-spin-slow  ' src="/src/assets/Star.png" alt="" />
            </div>
        </div>
    )
}
