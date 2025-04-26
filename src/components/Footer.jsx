import React from 'react'
import StarGif from './StarGif'

export default function Footer() {
    return (
        <div className='flex justify-center bg-slate-300 shadow-2xl  '>
            <div className='container bg-green-200  relative'>

                <StarGif />
                <div className='flex flex-col md:flex-row '>
                    <div className='flex'>
                        <div className='flex-col'>
                            <div className='font-sans text-xl'>
                                Get Started
                            </div>
                            <div className='mt-3 font-bold text-2xl'>
                                I Help Companies
                                {<br />} Move Faster
                            </div>
                        </div>

                    </div>


                    <div className='font-light text-xl' >
                        Put themselves in the merchant's shoes. It is meant to partner
                        on the long run.
                    </div>

                    <img className='h-32 w-52 ' src="/src/assets/block.png" alt="" />


                </div>



            </div>

        </div>
    )
}

