import React, {useState} from 'react'
import TopBar from "./TopBar";
import Welcome from "./Welcome";



function Landing() {

    const onPress = () => {
    };

    return (
        <div className="flex flex-col h-screen w-screen absolute justify-evenly">
            <TopBar />
            <Welcome />
        </div>
    )
}

export default Landing;