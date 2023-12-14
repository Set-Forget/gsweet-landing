import { useState } from 'react'
import img1 from '/src/assets/MacBook Pro 14.png'

import ButtonFreeTrial from '../ButtonFreeTrial/ButtonFreeTrial';

export default function Hero() {
  let bgColor = "[#DA581A]";
  let textColor = "white"; 
  
  return (
    <section className="max-w-full  bg-[#df5e20]/[.15]">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Enhance Digital Classrooms with <span className='text-[#DA581A]'>Gliddr</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Elevate your Google Docs teaching experience, turning every document into a dynamic learning space.
          </p>
          <img src={img1} alt="" srcset="" />
          <div className="mt-10 flex items-center justify-center gap-x-6">
          <ButtonFreeTrial bgColor={bgColor} textColor={textColor}></ButtonFreeTrial>
          </div>
        </div>
      </div>
    </section>
  )
}
