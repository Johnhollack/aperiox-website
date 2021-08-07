import React, {useState} from 'react';



const SupportLovedOnes = () => {

    //const [modalVisible, setModalVisible] = useState(false);

    const onPress = () => {
    };

    return (
        <div className="flex flex-col-reverse md:h-screen md:flex-row py-10 md:px-20">

            <div className="flex flex-col md:w-1/2 mx-auto justify-center items-center md:items-start md:pl-32">
                
                <p className="text-white font-sans rounded font-bold md:font-semibold md:text-2xl">SUPPORT LOVED</p>
                <div className="flex md:flex-col">
                    <p className="text-white font-sans rounded font-bold md:text-6xl pr-1">ONES WHEN</p>
                    <p className="text-white font-sans rounded font-bold md:text-6xl">NEEDED MOST</p>
                </div>

            </div>

            <div className="flex h-96 md:h-auto py-10 w-full md:w-1/2 justify-center items-center">
                <img src="/s4.png" alt="" className=" h-full w-full object-contain"/>
            </div>

      </div>
    )
}

export default SupportLovedOnes;