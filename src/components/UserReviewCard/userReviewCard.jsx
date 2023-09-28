import { useState } from 'react';

export default function UserReviewCard({cardColor, textColor, url ,name, review}) {
    // aca lo que deberia cambiar es que le pase por parametro flex-row o flex-row-reverse
    return (
        <div className={`flex flex-col justify-center items-center bg-${cardColor} p-2 rounded shadow-md w-1/3`}>
            <svg width="23" height="35" viewBox="0 0 43 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M38.9723 0L42.399 3.26087C40.2041 5.33816 38.4124 7.343 37.0238 9.27536C35.68 11.1594 34.8289 12.5845 34.4705 13.5507C34.1122 14.5169 33.7762 15.6763 33.4627 17.029L33.7314 17.4638C36.7326 17.4638 38.9275 18.1643 40.3161 19.5652C41.7047 20.9662 42.399 23.1401 42.399 26.087C42.399 28.3575 41.6375 30.4106 40.1145 32.2464C38.6363 34.0821 36.7774 35 34.5377 35C31.9845 35 29.8568 34.2271 28.1546 32.6812C26.4525 31.1353 25.6014 28.6473 25.6014 25.2174C25.6014 20.6763 26.9004 15.9903 29.4984 11.1594C32.1413 6.28019 35.2992 2.56039 38.9723 0ZM14.0447 0L17.4714 3.26087C15.2765 5.33816 13.5071 7.31884 12.1633 9.2029C10.8195 11.087 9.94604 12.5362 9.5429 13.5507C9.18455 14.5652 8.8486 15.7246 8.53504 17.029L8.8038 17.4638C11.805 17.4638 13.9999 18.1643 15.3885 19.5652C16.7771 20.9662 17.4714 23.1401 17.4714 26.087C17.4714 28.3575 16.7099 30.4106 15.1869 32.2464C13.7087 34.0821 11.8498 35 9.61009 35C7.05685 35 4.92916 34.2271 3.227 32.6812C1.52485 31.1353 0.673767 28.6473 0.673767 25.2174C0.673767 20.6763 1.97278 15.9903 4.57081 11.1594C7.21363 6.28019 10.3716 2.56039 14.0447 0Z" fill=
                {textColor} />
            </svg>
            <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{ review}</p>
            <img
                className="inline-block h-14 w-14 rounded-full my-8"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
            />
            <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{name}</h3>

        </div>

    )
}
