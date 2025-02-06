import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Link from "next/link";

function Footer() {
    return (
        <div className="w-full footer px-2 py-14 text-white bg-slate-800">
            <div className="w-full space-x-12 flex flex-wrap justify-center">
            <FontAwesomeIcon icon={faFacebook} size="2xl" className="hover:text-slate-400 cursor-pointer duration-200 transition-all w-10" />
            <FontAwesomeIcon icon={faInstagram} size="2xl" className="hover:text-slate-400 cursor-pointer duration-200 transition-all w-10"/>
            <FontAwesomeIcon icon={faYoutube} size="2xl" className="hover:text-slate-400 cursor-pointer duration-200 transition-all w-10"/>
            <FontAwesomeIcon icon={faTwitter} size="2xl" className="hover:text-slate-400 cursor-pointer duration-200 transition-all w-10"/>
            </div>
            <div className="flex w-full space-x-8 md:space-x-16 justify-center py-12">
                <Link href='/' className="hover:text-slate-400 duration-200 transition-all font-bold">
                <p className="text-sm">Terms & Conditions</p>
                </Link>
                <Link href='/' className="hover:text-slate-400 duration-200 transition-all font-bold">
                <p className="text-sm">Privacy Policy</p>
                </Link>
                <Link href='/' className="hover:text-slate-400 duration-200 transition-all font-bold">
                <p className="text-sm">About Us</p>
                </Link>
                <Link href='/' className="hover:text-slate-400 duration-200 transition-all font-bold">
                <p className="text-sm">Contact Us</p>
                </Link>
            </div>
            <p className="text-center font-bold cursor-default">Copyright © 2025 QUICKCART. | All rights reserved</p>
        </div>
    );
}

export default Footer;