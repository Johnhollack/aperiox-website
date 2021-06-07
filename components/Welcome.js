import React, {useState} from 'react'



function Welcome() {

    //const [modalVisible, setModalVisible] = useState(false);

    const onPress = () => {
    };



    return (
        <div className="flex flex-col md:flex-row h-5/6 w-screen justify-end items-start mb-10 md:mb-0 md:justify-start md:items-end ">
            <div className="flex flex-col px-5 md:px-10 py-10">
                <p className="text-white font-base text-2xl md:text-5xl text-center font-sans">Welcome to GoFree Payments</p>
                <div className="flex items-center mt-3">
                    <p className="text-white font-base text-base md:text-1xl text-center font-sans">Watch to learn more</p>
                    <img src="/play-btn.png" alt="Youtube PlayButton" className="h-10 w-10 ml-3"/>
                </div>
            </div>
        </div>
    )
}

export default Welcome;