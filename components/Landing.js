import React, {useState} from 'react'
import TopBar from "./TopBar";
import Welcome from "./Welcome";



function Landing() {

    const onPress = () => {
    };

    return (
        <div className="flex flex-col h-96 md:h-screen overflow-hidden w-screen absolute justify-evenly">
            <TopBar />
            <Welcome />
        </div>
    )
}

export default Landing;