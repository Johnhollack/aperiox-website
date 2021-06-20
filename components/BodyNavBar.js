import React, {useState} from 'react'
import TopBar from "./TopBar";
import Welcome from "./Welcome";
import ButtonDark from "./ButtonDark";
import {faApple, faGooglePlay, faInstagram, faLinkedin, faTwitter} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import HeaderItem from "./HeaderItem";



function BodyNavBar() {

    const onPress = () => {
    };

    return (
        <div className="flex flex-col lg:flex-row w-screen h-12 justify-between px-3 md:px-10 items-center border-t border-gray-300">
            <p className="text-white py-1 md:py-0 text-xs md:text-sm md:font-semibold">Copyright © 2021 GoFree. All Rights Reserved</p>

            <div className="flex justify-evenly items-center">
                <p className="cursor-pointer hover:text-black text-white w-16 md:w-24 text-center text-xs md:text-sm md:font-semibold">About</p>
                <Link href='/payments'>
                    <p className="cursor-pointer hover:text-black text-white w-16 md:w-24 text-center text-xs md:text-sm md:font-semibold">Payments</p>
                </Link>
                <p className="cursor-pointer hover:text-black text-white w-16 md:w-24 text-center text-xs md:text-sm md:font-semibold">Help</p>
                <p className="cursor-pointer hover:text-black text-white w-16 md:w-24 text-center text-xs md:text-sm md:font-semibold">Terms</p>
                <p className="cursor-pointer hover:text-black text-white w-16 md:w-24 text-center text-xs md:text-sm md:font-semibold">Privacy</p>
                <div className="flex justify-evenly items-center">
                    <div className="flex flex-row items-center md:ml-10">
                        <HeaderItem icon={faLinkedin} url="https://www.linkedin.com/company/swiftpayapp" />
                        <HeaderItem icon={faTwitter} url="https://twitter.com/gofreeHQ" />
                        <HeaderItem icon={faInstagram} url="https://instagram.com/gofreeHQ" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default BodyNavBar;