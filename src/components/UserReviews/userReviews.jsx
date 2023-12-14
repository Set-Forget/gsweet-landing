import { useState } from 'react';
import ButtonFreeTrial from '../ButtonFreeTrial/ButtonFreeTrial';
import UserReviewCard from '../UserReviewCard/userReviewCard';
import imgSarah from '/src/assets/sarah2.jpg'
import imgElena from '/src/assets/elena.jpg'
import imgRaj from '/src/assets/raj2.jpg'

export default function UserReviews() {
    let bgColor = "[#DA581A]";
    let textColor = "white"; 
    let reviewsArray = [
        {
            cardColor: "white",
            textColor : "black",
            url: imgSarah,
            name: "Ms. Sarah Thompson, High School Teacher",
            review: "Gliddr has transformed my classroom experience. Now, I can easily track each student's participation and guide our discussions more effectively. A game-changer for online learning!"
        },
        {
            cardColor: "[#DA581A]",
            textColor : "white",
            url: imgElena,
            name: "Elena Rodriguez, Tutor",
            review: "Text analysis saves me so much time. I can quickly grasp the main themes of our discussions and ensure we cover all essential points. Highly recommend Gliddr to all educators!"

        },
        {
            cardColor: "white",
            textColor : "black",
            url: imgRaj,
            name: "Dr. Raj Mehta, College Professor",
            review: "The AI-generated questions are a brilliant feature. They often lead to deeper discussions and help students explore topics from different angles."

        }
    ]
    return (
        <section className='flex flex-col justify-center items-center p-4'>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                User <span className='text-[#DA581A]'>Reviews</span>
            </h2>
            <div className='flex flex-row gap-5 my-12 w-5/6'>
                {reviewsArray.map(item => <UserReviewCard cardColor={item.cardColor} textColor={item.textColor} url={item.url} name={item.name} review={item.review}></UserReviewCard> )}
            </div>
        <div className='bg-[#FAE7DE] flex flex-col justify-center items-center p-8 rounded-lg w-5/6 my-12'>
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
        Unleash the Full Potential of Google Docs with Gliddr.
        </h2>
        <p className="mx-auto my-6 max-w-xl text-lg leading-8 text-black-600">
        Pay once and Launch as many as needed.          </p>
        <ButtonFreeTrial bgColor={bgColor} textColor={textColor}></ButtonFreeTrial>
        <p className="mx-auto my-6 max-w-xl text-base leading-8 text-gray-600">
        *Only $5.99 per month after free trial         </p>
        </div>
        </section>
    )
}