import React, {useState} from 'react'
import Link from "next/link";
import HeaderItem from "./HeaderItem";
import {faTelegram, faInstagram, faLinkedin, faTwitter, faFacebook, faGithub, faMedium,} from "@fortawesome/free-brands-svg-icons";



function Footer() {

    //const [modalVisible, setModalVisible] = useState(false);

    const onPress = () => {
    };


    return (
        <div className="flex flex-col justify center lg:justify-start lg:items-start h-auto w-screen overflow-hidden px-5 lg:px-20">
            <div className="flex flex-col lg:flex-row w-full ">
                <div className="flex w-full lg:w-1/2 justify-between">
                    <div className="flex flex-col my-10 ">
                        <p className="mb-5 text-sm font-bold ">About Us</p>
                        <p onClick={() => router.push(`/`)} className="mb-2 text-sm cursor-pointer hover:text-black text-gray-100">About</p>
                        <Link href={'/'}>
                            <a
                                target="_blank" rel="noopener noreferrer">
                                <p className="mb-2 text-sm cursor-pointer hover:text-black text-gray-100">Career</p>
                            </a>
                        </Link>
                        <Link href={'https://t.me/gofreeHQ'}>
                            <a
                                target="_blank" rel="noopener noreferrer">
                                <p className="mb-2 text-sm cursor-pointer hover:text-black text-gray-100">Case studies</p>
                            </a>
                        </Link>
                        <p onClick={() => router.push(`/`)} className="mb-2 text-sm cursor-pointer hover:text-black text-gray-100">Contact Us</p>
                        <p onClick={() => router.push(`/`)} className="mb-2 text-sm cursor-pointer hover:text-black text-gray-100">Terms</p>
                        <p onClick={() => router.push(`/`)} className="mb-2 text-sm cursor-pointer hover:text-black text-gray-100">Privacy</p>
                    </div>
                    <div className="flex flex-col my-10 ">
                        <p className="mb-5 text-sm font-bold ">Payments</p>
                        <p className="mb-2 text-sm cursor-pointer hover:text-black text-gray-100">Quick Pay</p>
                        <p className="mb-2 text-sm cursor-pointer hover:text-black text-gray-100">QR Code Payments</p>
                        <p className="mb-2 text-sm cursor-pointer hover:text-black text-gray-100">Program Payments</p>
                        <p className="mb-2 text-sm cursor-pointer hover:text-black text-gray-100">Business Payments</p>
                        <p className="mb-2 text-sm cursor-pointer hover:text-black text-gray-100">In-App Payments</p>
                        <p className="mb-2 text-sm cursor-pointer hover:text-black text-gray-100">Web Payments</p>
                    </div>
                    <div className="flex flex-col my-10 ">
                        <p className="mb-5 text-sm font-bold ">Products</p>
                        <p className="mb-2 text-sm cursor-pointer hover:text-black text-gray-100">Wallets</p>
                        <p className="mb-2 text-sm cursor-pointer hover:text-black text-gray-100">E-Commerce</p>
                        <p className="mb-2 text-sm cursor-pointer hover:text-black text-gray-100">Exchange</p>
                        <p className="mb-2 text-sm cursor-pointer hover:text-black text-gray-100">mobilePOS</p>
                    </div>
                </div>


                <div className="flex lg:flex-col w-full lg:w-1/2 justify-evenly lg:items-center">
                    <div className="flex justify-evenly items-center w-2/3">
                        <HeaderItem icon={faTelegram} url="https://t.me/gofreeHQ" />
                        <HeaderItem icon={faFacebook} url="https://facebook.com/gofreeHQ" />
                        <HeaderItem icon={faTwitter} url="https://twitter.com/gofreeHQ" />
                        <HeaderItem icon={faInstagram} url="https://instagram.com/gofreeHQ" />
                        <HeaderItem icon={faLinkedin} url="https://www.linkedin.com/company/gofree" />
                        <HeaderItem icon={faGithub} url="https://github.com/gofreeHQ" />
                        <HeaderItem icon={faMedium} url="https://medium.com/gofreeHQ" />
                    </div>
                    <Link href='/'>
                        <div className="flex cursor-pointer w-32 justify-center items-center">
                            <img src="/logo.svg" alt="GoFree Logo" className="h-8 w-8 lg:h-10 lg:w-10 lg:mt-5 object-cover"/>
                        </div>
                    </Link>
                </div>
            </div>

            <div className="flex w-full  ">
                <p className="my-10 text-xs text-gray-100">Copyright @ 2021 GoFree Inc. |  All Rights Reserved.</p>
            </div>

        </div>
    )
}

export default Footer;