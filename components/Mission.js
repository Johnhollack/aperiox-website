import React, {useState} from 'react'



function Mission() {

    //const [modalVisible, setModalVisible] = useState(false);

    const onPress = () => {
    };


    return (
        <div className="flex flex-col md:flex-row h-screen bg-gray-300 w-screen justify-end items-start mb-10 md:mb-0 md:justify-start md:items-end ">
            <div className="flex flex-col px-5 md:px-10 py-10">
                <p className="text-white font-base text-base md:text-1xl text-center font-sans">Our Mission</p>
                <p className="text-white font-base text-2xl md:text-5xl text-center font-sans">
                    To build a seemless, trusted and innovative financial network that enables people and businesses to go free across Africa.
                </p>
                <p className="text-white font-base text-base md:text-1xl text-center font-sans">
                    To build a seemless, trusted and innovative financial network that enables people and businesses to go free across Africa.
                </p>
            </div>
        </div>
    )
}

export default Mission;