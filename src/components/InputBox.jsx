import React from 'react'
import { darkAtom } from '../store/atoms/DarkAtom';
import { useRecoilValue } from 'recoil';

export default function InputBox({label,name,value,onchange,placeholder,err}) {
    const darkMode = useRecoilValue(darkAtom);
    return (
        <div>
            <label className="block mb-2">{label}</label>
            <input
                type="text"
                name={name}
                value={value}
                required
                onChange={onchange}
                className={`w-full px-4 py-2 rounded-lg ${darkMode ? `bg-gray-700` : `bg-gray-100`}`}
                placeholder={placeholder}
            />
            {err && <p className="error">{err}</p>}
        </div>
    )
}
