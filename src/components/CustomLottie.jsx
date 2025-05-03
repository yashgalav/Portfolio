import Lottie from 'lottie-react'
import React from 'react'

export default function CustomLottie({customClass, data}) {
  return (
    <div className='flex justify-center items-center'>
          <div className={`${customClass}`}>
            <Lottie animationData={data} loop={true} />
          </div>
    </div>
  )
}
