import { useState } from 'react';
import ButtonFreeTrial from '../ButtonFreeTrial/ButtonFreeTrial';
import UserReviewCard from '../UserReviewCard/userReviewCard';

export default function UserReviews() {
    let bgColor = "[#DA581A]";
    let textColor = "white"; 
    let reviewsArray = [
        {
            cardColor: "white",
            textColor : "black",
            url: "",
            name: "Nicholas C",
            review: "It´s a great product"
        },
        {
            cardColor: "[#DA581A]",
            textColor : "white",
            url: "",
            name: "Alen S",
            review: "It´s a great product"

        },
        {
            cardColor: "white",
            textColor : "black",
            url: "",
            name: "Nicholas C",
            review: "It´s a great product"

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
          <ButtonFreeTrial bgColor={bgColor} textColor={textColor}></ButtonFreeTrial>
        <div className='bg-[#FAE7DE] flex flex-col justify-center items-center p-8 rounded-lg w-5/6 my-12'>
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
        Get the power of coding in Google sheets with formula studio
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