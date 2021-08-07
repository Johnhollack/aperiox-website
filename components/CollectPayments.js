import React, {useState} from 'react';



const CollectPayments = () => {

    //const [modalVisible, setModalVisible] = useState(false);

    const onPress = () => {
    };

    return (
        <div className="flex flex-col md:h-screen md:flex-row py-10 md:px-20">

            <div className="flex h-96 md:h-auto py-10 w-full md:w-1/2 justify-center items-center">
                <img src="/s3.png" alt="" className=" h-full w-full object-contain"/>
            </div>


            <div className="flex flex-col md:w-1/2 mx-auto justify-center items-center md:items-start">
                
                <p className="text-white font-sans rounded font-bold md:font-semibold md:text-2xl">COLLECT PAYMENTS</p>
                <div className="flex md:flex-col">
                    <p className="text-white font-sans rounded font-bold md:text-6xl pr-1">FROM YOUR</p>
                    <p className="text-white font-sans rounded font-bold md:text-6xl">CUSTOMERS</p>
                </div>

            </div>


        </div>
    )
}

export default CollectPayments;