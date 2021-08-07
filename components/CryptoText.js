import React, {useState} from 'react';



const CryptoText = () => {

    //const [modalVisible, setModalVisible] = useState(false);

    const onPress = () => {
    };

    return (
        <div className="flex w-screen h-auto md:px-20">

            <p className="text-white w-full font-sans rounded text-justify px-5 md:px-20 ">
                In addition to fiat currency and cryptocurrency payments and transfers, GoFree provides
                a "one-stop shop" for all crypto-based financial operations and needs for its users. 
                GoFree integrates a mobile crypto-to-crypto exchange to carry out cryptocurrency exchanges
                and trades, as well as fiat-to-fiat exchage to support local to international currency conversion.
                The exchage supports a broad range of fiat currencies and cryptocurrencies that are listed and traded
                on the main exchanges, as well as conversion to andd from other tokens. With one click, users can dedicate
                funds to DeFi and enjoy interest gains for their crypto assets .
            </p>

        </div>
    )
}

export default CryptoText;