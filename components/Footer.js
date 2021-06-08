import React, {useState} from 'react'
import Link from "next/link";
import HeaderItem from "./HeaderItem";
import {faInstagram, faLinkedin, faTwitter} from "@fortawesome/free-brands-svg-icons";



function Footer() {

    //const [modalVisible, setModalVisible] = useState(false);

    const onPress = () => {
    };


    return (
        <div className="flex flex-col h-auto md:h-96 bg-blue-400 w-full md:px-20 justify-evenly items-start overflow-hidden ">

            <div className="flex flex-col ml-10 md:ml-0 sm:flex-row mb-10 w-full justify-start items-start ">
                <Link href='/'>
                    <div className="flex cursor-pointer justify-center mt-10 sm:mr-10 md:mr-20 items-start">
                        <img src="/logo.svg" alt="GoFree Logo" className="h-6 w-6 mr-1"/>
                        <p className="text-white py-1 md:py-0 text-sm font-semibold">GoFree</p>
                    </div>
                </Link>

                <div className="flex flex-col w-32 mt-10 sm:mr-10 md:mr-20">
                    <p className="text-white font-bold text-base text-left mb-5 font-sans">About Us</p>
                    <p className="cursor-pointer hover:text-black text-white font-base text-sm my-2  font-sans text-left">About</p>
                    <p className="cursor-pointer hover:text-black text-white font-base text-sm my-2  font-sans text-left">Career</p>
                    <p className="cursor-pointer hover:text-black text-white font-base text-sm my-2  font-sans text-left">Business Contacts</p>
                    <p className="cursor-pointer hover:text-black text-white font-base text-sm my-2  font-sans text-left">Terms</p>
                    <p className="cursor-pointer hover:text-black text-white font-base text-sm my-2  font-sans text-left">Privacy</p>
                    <p className="cursor-pointer hover:text-black text-white font-base text-sm my-2  font-sans text-left">Announcement</p>
                </div>

                <div className="flex flex-col w-32 mt-10 sm:mr-10 md:mr-20">
                    <p className="text-white font-bold text-base text-left mb-5  font-sans">Products</p>
                    <p className="cursor-pointer hover:text-black text-white font-base text-sm my-2  font-sans text-left">Quick Pay</p>
                    <p className="cursor-pointer hover:text-black text-white font-base text-sm my-2  font-sans text-left">QR Code Payments</p>
                    <p className="cursor-pointer hover:text-black text-white font-base text-sm my-2  font-sans text-left">Program Payments</p>
                    <p className="cursor-pointer hover:text-black text-white font-base text-sm my-2  font-sans text-left">Business Payments</p>
                    <p className="cursor-pointer hover:text-black text-white font-base text-sm my-2  font-sans text-left">In-App Payments</p>
                    <p className="cursor-pointer hover:text-black text-white font-base text-sm my-2  font-sans text-left">Web Payments</p>
                </div>

                <div className="flex flex-row items-center my-10 md:ml-20 ">
                    <HeaderItem icon={faLinkedin} url="https://www.linkedin.com/company/swiftpayapp" />
                    <HeaderItem icon={faTwitter} url="https://twitter.com/gofreeHQ" />
                    <HeaderItem icon={faInstagram} url="https://instagram.com/gofreeHQ" />
                </div>
            </div>

            <div className="flex ml-10 md:ml-0  w-full ">
                <p className="text-white text-start mb-5 text-sm font-semibold">Copyright © 2021 GoFree. All Rights Reserved</p>
            </div>



        </div>
    )
}

export default Footer;