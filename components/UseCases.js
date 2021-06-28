import React, {useState} from 'react'



function UseCases() {

    //const [modalVisible, setModalVisible] = useState(false);

    const onPress = () => {
    };


    return (
        <div className="flex flex-col h-auto w-full px-20 justify-start items-center overflow-hidden py-10 md:py-20">
            <div className="flex flex-col w-full justify-center items-center">
                <p className="text-white font-semibold text-2xl md:text-3xl text-center font-sans ">Use cases</p>
                <div className="w-16 bg-white h-1 rounded-full mt-1 mb-5"></div>
            </div>

            <div className="flex flex-col md:flex-row w-full items-center justify-evenly my-5 md:my-10">
                <div className="flex flex-col mb-10 md:mb-0 drop-shadow justify-between items-center h-60 w-72 bg-gray-100 ">
                    <img src="/shopping.png" alt="Youtube PlayButton" className="h-40 w-full object-cover"/>
                    <p className="text-white font-bold mb-5 text-gray-700 text-center font-sans">Shopping</p>
                </div>
                <div className="flex flex-col mb-10 md:mb-0 drop-shadow justify-between items-center h-60 w-72 bg-gray-100 ">
                    <img src="/food.png" alt="Youtube PlayButton" className="h-40 w-full object-cover"/>
                    <p className="text-white font-bold mb-5 text-gray-700 text-center font-sans">Restaurants</p>
                </div>
                <div className="flex flex-col mb-10 md:mb-0 drop-shadow justify-between items-center h-60 w-72 bg-gray-100 ">
                    <img src="/zion.jpg" alt="Youtube PlayButton" className="h-40 w-full object-cover"/>
                    <p className="text-white font-bold mb-5 text-gray-700 text-center font-sans">Place of Worship</p>
                </div>
            </div>

            <div className="flex flex-col md:flex-row w-full items-center justify-evenly my-5 md:my-10">
                <div className="flex flex-col mb-10 md:mb-0 drop-shadow justify-between items-center h-60 w-72 bg-gray-100 ">
                    <img src="/medical.png" alt="Youtube PlayButton" className="h-40 w-full object-cover"/>
                    <p className="text-white font-bold mb-5 text-gray-700 text-center font-sans">Medical Care</p>
                </div>
                <div className="flex flex-col mb-10 md:mb-0 drop-shadow justify-between items-center h-60 w-72 bg-gray-100 ">
                    <img src="/transport.png" alt="Youtube PlayButton" className="h-40 w-full object-cover"/>
                    <p className="text-white font-bold mb-5 text-gray-700 text-center font-sans">Transportation</p>
                </div>
                <div className="flex flex-col mb-10 md:mb-0 drop-shadow justify-between items-center h-60 w-72 bg-gray-100 ">
                    <img src="/class.jpg" alt="Youtube PlayButton" className="h-40 w-full object-cover"/>
                    <p className="text-white font-bold mb-5 text-gray-700 text-center font-sans">Education</p>
                </div>
            </div>
        </div>
    )
}

export default UseCases;