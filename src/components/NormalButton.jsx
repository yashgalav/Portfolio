import React from 'react'

export default function NormalButton({ icon, buttonName, onclick }) {
    return (
        <button
            onClick={onclick}
            className="flex items-center space-x-2 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-800 ">
            {icon}
            <span>{buttonName}</span>
        </button>
    )
}
