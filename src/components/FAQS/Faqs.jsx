import { useState } from 'react';
import ButtonFreeTrial from '../ButtonFreeTrial/ButtonFreeTrial'
import BoilerSection from '../BoilerSection/BoilerSection';
import FaqsCard from '../FaqsCard/FaqsCard';


export default function Faqs() {
    let bgColor = "white";
    let textColor = "[#DA581A]"; 
    let title = "FAQ'S";
    let sectionClassList = "flex flex-wrap"
    let faqsArray = [
        {
            question: "question 1",
            answer: "answer 1"
        },
        {
            question: "question 2",
            answer: "answer 1"
        },
        {
            question: "question 3",
            answer: "answer 1"
        },
        {
            question: "question 4",
            answer: "answer 1"
        },
        {
            question: "question 5",
            answer: "answer 1"
        },
        {
            question: "question 6",
            answer: "answer 1"
        },
    ]
    return (
        <section className="max-w-full bg-[#DA581A] px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
            <BoilerSection title={title} spanTitle={""} sectionClassList={sectionClassList}>
                <div className='flex flex-wrap justify-center items-center gap-5'>
                    {faqsArray.map(item => <FaqsCard question={item.question}></FaqsCard>)}
                </div>
            </BoilerSection>
            <ButtonFreeTrial bgColor={bgColor} textColor={textColor}></ButtonFreeTrial>
        </section>
    )
}
