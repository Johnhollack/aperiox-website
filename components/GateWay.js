import React, {useState} from 'react'



function GateWay() {

    //const [modalVisible, setModalVisible] = useState(false);

    const onPress = () => {
    };

    return (
        <div className="flex w-full h-96 justify-center bg-white items-center md:pb-20 ">
            <img
                layout="responsive"
                className="h-full w-full md:w-3/5 object-contain"
                //style={{width: 800, height: 400}}
                src="/gateway.gif"
            />
        </div>
    )
}

export default GateWay;