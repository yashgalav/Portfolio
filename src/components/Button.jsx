import React from 'react'
import { useRecoilValue } from 'recoil'
import { darkAtom } from '../store/atoms/DarkAtom'

export default function Button({onClick, trueIcon, falseIcon, isOpen,onBlur}) {
    const isDark = useRecoilValue(darkAtom);
    return (
        <button
                onClick={onClick}
                onBlur={onBlur}
                className={`p-2 rounded-full ${isDark ?`hover:bg-gray-500 hover:text-purple-600`:`hover:bg-gray-300 hover:text-purple-600 `}`}
                type="button"
            >
                {isOpen ? trueIcon : falseIcon}
        </button>
    )
}
