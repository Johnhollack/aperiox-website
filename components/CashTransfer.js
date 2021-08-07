import React, {useState} from 'react';



const CashTransfer = () => {

    //const [modalVisible, setModalVisible] = useState(false);

    const onPress = () => {
    };

    return (
        <div className="flex flex-col md:h-screen md:flex-row py-10 md:px-20">

            <div className="flex h-96 md:h-auto py-10 w-full md:w-1/2 justify-center items-center">
                <img src="/s1.png" alt="" className=" h-full w-full object-contain"/>
            </div>


            <div className="flex md:flex-col md:w-1/2 mx-auto px-5 justify-center">
                
                <p className="text-white font-sans rounded font-bold md:font-semibold md:text-2xl">CASH TRANSFER</p>
                <p className="text-white font-sans rounded font-bold px-1 md:px-0 md:text-6xl">WHILE</p>
                <p className="text-white font-sans rounded font-bold md:text-6xl">CHATTING</p>

            </div>


        </div>
    )
}

export default CashTransfer;