import React from 'react'
import { NavLink } from './Navbar'
import { darkAtom } from '../store/atoms/DarkAtom'
import { useRecoilValue } from 'recoil'

export default function Footer() {
    const darkMode = useRecoilValue(darkAtom)

    return (
        <div className={`flex w-full absolute bottom-0 pb-3 ${darkMode ? `bg-gray-800` : `bg-slate-300`}`}>
            <div className={`container mx-5 md:mx-auto h-20 md:h-14 ${darkMode ? `bg-gray-800` : `bg-slate-300`} relative `}>

                <NavLink className={"grid grid-cols-3 font-sans md:absolute md:right-0 md:bottom-0 md:flex md:gap-3"} />

                <p className='font-sans md:absolute md:bottom-0 '>© 2025 Yash. Built with ❤️ and passion.</p>
            </div>
        </div>
    )
}
