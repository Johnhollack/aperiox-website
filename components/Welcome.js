import React, {useState} from 'react'
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";



function Welcome() {

    //const [modalVisible, setModalVisible] = useState(false);

    const onPress = () => {
    };



    return (
        <div className="flex flex-col md:flex-row h-5/6 w-full justify-end items-start md:justify-start md:items-end ">
            <div className="flex flex-col px-5 md:px-20 py-10">
                <p className="text-white font-base text-xl md:text-5xl text-center font-sans">Welcome to GoFree Payments</p>
                <div className="flex items-center mt-3">
                    <p className="text-white font-base text-base md:text-2xl text-center font-sans">Watch to learn more</p>
                    <Link href="https://instagram.com/gofreeHQ">
                        <a
                            target="_blank" rel="noopener noreferrer">
                            <img src="/play-btn.png" alt="Youtube PlayButton" className="h-12 w-12 ml-3"/>
                        </a>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default Welcome;