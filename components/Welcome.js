import React, {useState} from 'react'
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";



function Welcome() {

    //const [modalVisible, setModalVisible] = useState(false);

    const onPress = () => {
    };



    return (
        <div className="flex flex-col-reverse lg:flex-row h-5/6 w-screen py-10">
            <div className="flex flex-col h-1/2 lg:h-full w-full lg:w-1/2 justify-center items-center lg:px-20 px-5">
                <p className="text-white font-semibold text-3xl md:text-6xl text-start rounded-md font-sans">The next-gen app for your money</p>
                <div className="flex items-center mt-5 w-full h-auto">
                    <p className="text-white font-base text-base md:text-2xl text-start rounded-md font-sans">Watch to learn more</p>
                    <Link href="https://instagram.com/gofreeHQ">
                        <a
                            target="_blank" rel="noopener noreferrer">
                            <img src="/play-btn.png" alt="Youtube PlayButton" className="h-12 w-12 ml-3"/>
                        </a>
                    </Link>

                </div>
            </div>

            <div className="flex h-1/2 pt-10 lg:pt-10 lg:h-auto w-full lg:w-1/2 justify-center items-center">
                <img src="/handphone.png" alt="p2p" layout="responsive" className="h-full w-full object-contain"/>
            </div>
        </div>
    )
}

export default Welcome;