import { useState } from 'react'

export default function FaqsCard({ question, answer }) {

    // State to manage the visibility of the answer
    const [isOpen, setIsOpen] = useState(false);

    // Toggle the visibility state
    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='w-5/12 p-4 border-white border-2 rounded-2xl flex flex-col relative'>
            <div className='flex flex-row justify-between items-center mb-4'>
                <p className='text-white'>{question}</p>
                <svg onClick={toggleOpen} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="add (1) 3 (traced)" clip-path="url(#clip0_30_242)">
                        <g id="Black">
                            <path id="Vector" d="M12.0457 0.112501C11.5804 0.290627 11.219 0.600002 10.966 1.03125C10.6679 1.54219 10.6724 1.45781 10.6724 5.63438C10.6724 8.32969 10.6588 9.45 10.6227 9.5625C10.5233 9.85313 10.6453 9.84375 6.62485 9.84375C2.58633 9.84375 2.67667 9.83906 2.17525 10.1531C1.5383 10.5516 1.18594 11.2078 1.18594 12C1.18594 12.7922 1.5383 13.4484 2.17525 13.8469C2.67667 14.1609 2.58633 14.1563 6.61581 14.1563C9.21329 14.1563 10.2929 14.1703 10.4014 14.2078C10.6814 14.3109 10.6724 14.1844 10.6724 18.3563C10.6724 22.5469 10.6679 22.4531 10.9705 22.9734C11.3545 23.6344 11.987 24 12.7504 24C13.5138 24 14.1463 23.6344 14.5302 22.9734C14.8329 22.4531 14.8284 22.5469 14.8284 18.3563C14.8284 14.1844 14.8193 14.3109 15.0994 14.2078C15.2078 14.1703 16.2875 14.1563 18.885 14.1563C22.9144 14.1563 22.8241 14.1609 23.3255 13.8469C23.9625 13.4484 24.3148 12.7922 24.3148 12C24.3148 11.2078 23.9625 10.5516 23.3255 10.1531C22.8241 9.83906 22.9144 9.84375 18.885 9.84375C16.2875 9.84375 15.2078 9.82969 15.0994 9.79219C14.8193 9.68906 14.8284 9.81563 14.8284 5.64375C14.8284 1.45313 14.8329 1.54688 14.5302 1.02656C14.2727 0.585939 13.8888 0.267189 13.4009 0.0937519C13.0305 -0.0421867 12.4161 -0.0328102 12.0457 0.112501Z" fill="white" />
                        </g>
                    </g>
                    <defs>
                        <clipPath id="clip0_30_242">
                            <rect width="23.1289" height="24" fill="white" transform="translate(0.222229)" />
                        </clipPath>
                    </defs>
                </svg>

            </div>
            <div className={`overflow-hidden transition-max-height duration-300 ${isOpen ? 'max-h-60' : 'max-h-0'}`}>
                <div className="answer p-4 text-white">
                    {answer}
                </div>
            </div>
        </div>
    )
}
