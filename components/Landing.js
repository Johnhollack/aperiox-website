import React, {useState} from 'react'
import TopBar from "./TopBar";
import Welcome from "./Welcome";
import {View} from "react-native-web";



function Landing() {

    const onPress = () => {
    };

    return (
        <div className="flex flex-col h-auto md:h-screen overflow-hidden w-screen justify-evenly">
            <TopBar />
            <Welcome />
        </div>
    )
}

export default Landing;