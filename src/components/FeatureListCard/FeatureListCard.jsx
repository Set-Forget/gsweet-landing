import { useState } from 'react';
import img1 from '/src/assets/MacBook Pro 14.png'


export default function FeatureListCard({title, spanTitle, firstParagraph, secondParagraph, flexDirection }) {
    // aca lo que deberia cambiar es que le pase por parametro flex-row o flex-row-reverse
    return (
    <div className={`flex ${flexDirection} justify-center items-center w-3/4 my-8`}>
        <img className='w-5/12'  src={img1} alt="" />
    <div className='flex flex-col w-1/2 mx-8'>
    <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
        {title} <span className='text-[#DA581A]'>{spanTitle}</span>
    </h2>
    <p className="mt-6 text-base leading-8 text-gray-600">
        {firstParagraph}
    </p>
    <p className="mt-6 text-base leading-8 text-gray-600">
        {secondParagraph}
    </p>
    </div>
    </div>

    )
}
