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

            <div className="flex flex-col md:flex-row w-full items-center md:justify-evenly md:my-10">
                <div className="flex my-5 md:my-0 bg-gray-100 h-52 w-72 md:w-96 ">
                    <div className="flex flex-col px-5 justify-center items-center">
                        <img src="/cart.png" alt="Youtube PlayButton" className="h-6 w-6 object-contain"/>
                        <p className="text-white w-20 md:w-24 mt-3 font-bold text-gray-700 text-xs text-center font-sans">Shopping</p>
                    </div>
                    <img src="/shopping.png" alt="Shopping" className="h-full w-52 md:w-72 object-cover"/>
                </div>

                <div className="flex my-5 md:my-0 bg-gray-100 h-52 w-72 md:w-96 ">
                    <div className="flex flex-col px-5 justify-center items-center">
                        <img src="/fork.png" alt="Youtube PlayButton" className="h-6 w-6 object-contain"/>
                        <p className="text-white w-20 md:w-24 mt-3 font-bold text-gray-700 text-xs text-center font-sans">Restaurants</p>
                    </div>
                    <img src="/food.png" alt="Food" className="h-full w-52 md:w-72 object-cover"/>
                </div>
            </div>

            <div className="flex flex-col md:flex-row w-full items-center md:justify-evenly md:my-10">
                <div className="flex mb-5 md:mb-0 bg-gray-100 h-52 w-72 md:w-96  ">
                    <div className="flex flex-col px-5 justify-center items-center">
                        <img src="/doctor.png" alt="Youtube PlayButton" className="h-6 w-6 object-contain"/>
                        <p className="text-white w-20 md:w-24 mt-3 font-bold text-gray-700 text-xs text-center font-sans">Medical Care</p>
                    </div>
                    <img src="/medical.png" alt="Medical" className="h-full w-52 md:w-72 object-cover"/>
                </div>

                <div className="flex mb-5 md:mb-0 bg-gray-100 h-52 w-72 md:w-96  ">
                    <div className="flex flex-col px-5 justify-center items-center">
                        <img src="/bus.png" alt="Youtube PlayButton" className="h-6 w-6 object-contain"/>
                        <p className="text-white w-20 md:w-24 mt-3 font-bold text-gray-700 text-xs text-center font-sans">Transportation</p>
                    </div>
                    <img src="/transport.png" alt="Transport" className="h-full w-52 md:w-72 object-cover"/>
                </div>
            </div>




        </div>
    )
}

export default UseCases;