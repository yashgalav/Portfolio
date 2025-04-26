import React from 'react'

export default function Heading({ text, color, size }) {
    return (
        <span>
            <h2 className={`text-4xl md:text-6xl font-normal ${color} ${size}`}>
                {text}
            </h2>
        </span>
    )
}
