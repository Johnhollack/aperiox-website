import React, {useState} from 'react'



function UseCases() {

    //const [modalVisible, setModalVisible] = useState(false);

    const onPress = () => {
    };


    return (
        <div className="flex flex-col h-auto bg-white w-screen md:px-20 justify-start items-center overflow-hidden ">
            <div className="flex flex-col my-10 w-full justify-center items-center">
                <p className="text-white font-semibold text-gray-900 text-base md:text-2xl text-center font-sans">Use Cases</p>
                <div className="w-24 h-1 bg-blue-400 rounded"></div>
            </div>

            <div className="flex flex-col md:flex-row w-full items-center justify-evenly md:my-0">
                <div className="flex flex-col mb-10 md:mb-0 drop-shadow justify-between items-center h-60 w-72 bg-gray-100 ">
                    <img src="/shopping.png" alt="Youtube PlayButton" className="h-40 w-full object-cover"/>
                    <div className="flex px-5 mb-7 justify-center items-center">
                        <img src="/cart.png" alt="Youtube PlayButton" className="h-6 w-6 object-contain"/>
                        <p className="text-white font-bold ml-5 text-gray-700 text-center font-sans">Shopping</p>
                    </div>
                </div>
                <div className="flex flex-col mb-10 md:mb-0 drop-shadow justify-between items-center h-60 w-72 bg-gray-100 ">
                    <img src="/food.png" alt="Youtube PlayButton" className="h-40 w-full object-cover"/>
                    <div className="flex px-5 mb-7 justify-center items-center">
                        <img src="/fork.png" alt="Youtube PlayButton" className="h-6 w-6 object-contain"/>
                        <p className="text-white font-bold ml-5 text-gray-700 text-center font-sans">Restaurants</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row w-full items-center justify-evenly md:my-10">
                <div className="flex flex-col mb-10 md:mb-0 drop-shadow justify-between items-center h-60 w-72 bg-gray-100 ">
                    <img src="/medical.png" alt="Youtube PlayButton" className="h-40 w-full object-cover"/>
                    <div className="flex px-5 mb-7 justify-center items-center">
                        <img src="/doctor.png" alt="Youtube PlayButton" className="h-6 w-6 object-contain"/>
                        <p className="text-white font-bold ml-5 text-gray-700 text-center font-sans">Medical Care</p>
                    </div>
                </div>
                <div className="flex flex-col mb-10 md:mb-0 drop-shadow justify-between items-center h-60 w-72 bg-gray-100 ">
                    <img src="/transport.png" alt="Youtube PlayButton" className="h-40 w-full object-cover"/>
                    <div className="flex px-5 mb-7 justify-center items-center">
                        <img src="/bus.png" alt="Youtube PlayButton" className="h-6 w-6 object-contain"/>
                        <p className="text-white font-bold ml-5 text-gray-700 text-center font-sans">Transportation</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UseCases;