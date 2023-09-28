import { useState } from 'react';
import { Link } from "react-router-dom";
import PrivacyPolicy from '../privacyPolicy/privacyPolicy';
// aca va el import de privacy policy



export default function Footer() {

  return (
    <footer className="max-w-full bg-[#DA581A] h-[5vh]">
        <ul className='flex flex-row justify-center items-center list-style-none text-white'>
            <li  className="px-4"><a href="mailto:thepatrickdempsey@gmail.com">Contact</a></li>
            <li  className="px-4"><Link to="/gsweet/tc">Terms &amp; Conditions</Link></li>
            <li  className="px-4"><Link to="/gsweet/privacy-policy">Privacy policy</Link></li>
            <li  className="px-4"><Link to="/gsweet/google-disclosure">Google Disclosure</Link></li>
        </ul>
    </footer>
  )
}