import { useState } from 'react';
import ButtonFreeTrial from '../ButtonFreeTrial/ButtonFreeTrial'
import BoilerSection from '../BoilerSection/BoilerSection';
import FaqsCard from '../FaqsCard/FaqsCard';


export default function Faqs() {
    let bgColor = "white";
    let textColor = "[#DA581A]"; 
    let title = "FAQ'S";
    let titleColor = "white";
    let sectionClassList = "flex flex-wrap"
    let faqsArray = [
        {
            question: "How do I install Gsweet on my Google Docs?",
            answer: "To use Gsweet, you'll first need to install our Google Chrome extension. Once installed, you can then add Gsweet from the Google Docs Add-On store. After installation, log in through the extension to access all the features seamlessly within your Google Docs."
        },
        {
            question: "Is Gsweet suitable for all grade levels?",
            answer: "Absolutely! Gsweet is designed to be versatile, catering to educators and students across various grade levels, making collaborative learning more effective and insightful."
        },
        {
            question: "How does the AI-powered question generation work?",
            answer: "Gsweet's AI analyzes the content of the document and, based on the themes and keywords, suggests relevant follow-up questions to stimulate discussion and exploration"
        },
        {
            question: "Is my data safe with Gsweet?",
            answer: "Data privacy is our top priority. Gsweet only analyzes the content for the features you use and does not store or share your data externally."
        },
        {
            question: "Do I need both the Chrome extension and the Add-On to use Gsweet?",
            answer: "Yes, to fully utilize Gsweet's features, users need to install both the Google Chrome extension and the Google Docs Add-On. This ensures a seamless and integrated experience within Google Docs."
        },
        {
            question: "Do all participants need to install the Chrome extension and the Add-On to join a session?",
            answer: "Yes, for a complete and integrated experience, all participants need to install both the Gsweet Google Chrome extension and the Google Docs Add-On. This ensures everyone can fully engage with all the features during a session."
        },
    ]
    return (
        <section className="max-w-full bg-[#DA581A] px-6 py-24 sm:px-6 sm:py-12 flex flex-col items-center justify-center">
            <BoilerSection title={title} spanTitle={""} sectionClassList={sectionClassList} titleColor={titleColor}>
                <div className='flex flex-wrap justify-center items-center gap-5 my-4'>
                    {faqsArray.map(item => <FaqsCard question={item.question} answer={item.answer}></FaqsCard>)}
                </div>
            </BoilerSection>
            <ButtonFreeTrial bgColor={bgColor} textColor={textColor}></ButtonFreeTrial>
        </section>
    )
}
