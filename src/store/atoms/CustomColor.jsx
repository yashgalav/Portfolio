import React from 'react'
import { atom } from 'recoil'

export const textColor = atom({
    key : "textColor",
    default: "text-purple-600"
})

export const bgColor = atom({
    key : "bgColor",
    default: "bg-purple-700"
})

export const hoverColor = atom({
    key : "hoverColor",
    default: "text-purple-600"
})
