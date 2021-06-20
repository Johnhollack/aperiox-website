import React, {useState} from 'react'
import TopBar from "./TopBar";
import Welcome from "./Welcome";
import ButtonDark from "./ButtonDark";
import {faApple, faGooglePlay} from "@fortawesome/free-brands-svg-icons";



function BodyZero() {

    const onPress = () => {
    };

    return (
        <div className="flex flex-col md:flex-row h-5/6 w-screen">
            <div className="flex flex-col h-1/2 md:h-full w-full md:w-3/5 justify-center items-center">
                <div className="flex flex-col justify-center items-center">
                    <div className="">
                        <img src="/logo.svg" alt="GoFree Logo" className="h-10 w-10"/>
                    </div>
                    <div className="px-10 py-10">
                        <p className="text-white font-base text-lg md:text-3xl text-center font-sans">Connecting a billion Africans with </p>
                        <p className="text-white font-base text-lg md:text-3xl text-center font-sans">calls, chats, banking and more</p>
                    </div>
                </div>
                <div className="md:mt-10 flex justify-center">
                    <ButtonDark subtitle="COMING SOON" title="Google PlayStore" icon={faGooglePlay} />
                    <ButtonDark subtitle="COMING SOON" title="App Store" icon={faApple} />
                </div>
            </div>

            <div className="flex h-1/2 md:h-auto w-full md:w-2/5 justify-center items-center">
                <img src="/phone.png" alt="Phone Demo" className=" h-full w-4/6 object-contain"/>
            </div>
        </div>
    )
}

export default BodyZero;