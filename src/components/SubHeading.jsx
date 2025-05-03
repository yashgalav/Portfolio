import React from 'react'
import { useRecoilValue } from 'recoil'
import { darkAtom } from '../store/atoms/DarkAtom'

export default function SubHeading({text, customClass}) {
    const darkMode = useRecoilValue(darkAtom)

    return (
        <p className={`text-xl ${customClass} ${darkMode ? `text-gray-300` : `text-gray-600`}`}>
        {text}
        </p>
    )
}
