import React from 'react'
import StarGif from './StarGif'
import { useRecoilValue } from 'recoil'
import { darkAtom } from '../store/atoms/DarkAtom'

export default function Banner() {
    const darkMode = useRecoilValue(darkAtom)
    return (
        <div className={`${darkMode? `bg-gray-800`:`bg-slate-300`} mb-20 md:mb-0 shadow-2xl`}>
            <div className='container mx-auto relative'>

                <div>
                <StarGif />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 items-center gap-6 ml-5 px-2'>
                    <div className='flex mt-14 '>
                        <div className='flex-col '>
                            <div className='font-sans text-xl'>
                                Get Started
                            </div>
                            <div className='mt-3 font-bold text-2xl'>
                                I Help Companies
                                {<br />} Move Faster
                            </div>
                        </div>
                    </div>
                    <div className='font-light text-xl max-w-md md:mt-14 md:-ml-10 mb-4 md:mb-0' >
                        Put themselves in the merchant's shoes. It is meant to partner
                        on the long run.
                    </div>
                    <img className='h-32 w-52 md:mt-14' src="/src/assets/block.png" alt="" />
                </div>
            </div>
        </div>
    )
}

