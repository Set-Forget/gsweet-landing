import { useState } from 'react'

export default function BoilerSection({title, spanTitle, children, titleColor}) {

  return (
    <section className='w-full flex flex-col justify-center items-center p-4'>
        <h2 className={`text-3xl font-bold tracking-tight text-${titleColor} sm:text-4xl`}>
            {title} <span className='text-[#DA581A]'>{spanTitle}</span>
        </h2>
        {children}
    </section>
  )
}