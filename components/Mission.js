import React, {useState} from 'react'



function Mission() {

    //const [modalVisible, setModalVisible] = useState(false);

    const onPress = () => {
    };


    return (
        <div className="flex flex-col h-auto px-10 bg-white w-full md:px-20 justify-center items-center overflow-hidden ">
            <p className="text-white mt-20 text-gray-700 w-full text-sm md:text-xl text-left font-sans">Our Mission</p>
            <p className="text-white font-base my-5 text-2xl w-full md:text-6xl text-blue-400 font-sans text-left">
                To build a seamless, trusted and innovative financial network that enables people and businesses to go free across Africa.
            </p>
            <p className="text-white mb-20 text-gray-700 w-full text-sm text-left md:text-xl font-sans">
                Provide every african even to the hard to reach regions access to safe and affordable financial services. So people across Africa can live better lives.
            </p>
        </div>
    )
}

export default Mission;