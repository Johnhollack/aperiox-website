import React, {useState} from 'react'
import {StyleSheet, Text, View, Image, TouchableOpacity} from "react-native";
import {windowWidth, windowHeight} from "../utils/Dimentions";
import ModalSheet from "./ModalSheet";
import ButtonYellow from "./ButtonYellow";



function BodyOne() {

    // const [modalVisible, setModalVisible] = useState(false);
    const [peer, setPeer] = useState( "");
    const [buyCrypto, setBuyCrypto] = useState( "h-0 opacity-0 m-0");
    const [deposit, setDeposit] = useState( "h-0 opacity-0 m-0");

    const [titlePeer, setTitlePeer] = useState( "my-5 text-2xl font-semibold text-gray-900");
    const [subTitlePeer, setSubTitlePeer] = useState( "mb-10 text-sm text-gray-700 ");

    const [titleBuy, setTitleBuy] = useState( "my-0 text-2xl font-semibold text-gray-900");
    const [subTitleBuy, setSubTitleBuy] = useState( "mb-0 text-sm text-gray-700 ");

    const [titleDeposit, setTitleDeposit] = useState( "my-0 text-2xl font-semibold text-gray-900");
    const [subTitleDeposit, setSubTitleDeposit] = useState( "mb-0 text-sm text-gray-700 ");


    const onPressPeer = () => {
        setPeer("opacity-100 h-auto my-10 flex flex-col justify-start ");
        setBuyCrypto("opacity-0 h-0");
        setDeposit("opacity-0 h-0");
        setTitlePeer("my-5 text-2xl font-semibold text-gray-900");
        setSubTitlePeer("mb-10 text-sm text-gray-700");
        setTitleBuy("my-0 text-2xl font-semibold text-gray-900");
        setSubTitleBuy("mb-0 text-sm text-gray-700");
        setTitleDeposit("my-0 text-2xl font-semibold text-gray-900");
        setSubTitleDeposit("mb-0 text-sm text-gray-700");
    };

    const onPressBuy = () => {
        setBuyCrypto("opacity-100 h-auto my-10 flex flex-col justify-start ");
        setPeer("opacity-0 h-0 m-0");
        setDeposit("opacity-0 h-0 m-0");
        setTitleBuy("my-5 text-2xl font-semibold text-gray-900");
        setSubTitleBuy("mb-10 text-sm text-gray-700");
        setTitlePeer("my-0 text-2xl font-semibold text-gray-900");
        setSubTitlePeer("mb-0 text-sm text-gray-700");
        setTitleDeposit("my-0 text-2xl font-semibold text-gray-900");
        setSubTitleDeposit("mb-0 text-sm text-gray-700");
    };

    const onPressDeposit = () => {
        setDeposit("opacity-100 h-auto my-10 flex flex-col justify-start ");
        setBuyCrypto("opacity-0 h-0 m-0");
        setPeer("opacity-0 h-0 m-0");
        setTitleDeposit("my-5 text-2xl font-semibold text-gray-900");
        setSubTitleDeposit("mb-10 text-sm text-gray-700");
        setTitlePeer("my-0 text-2xl font-semibold text-gray-900");
        setSubTitlePeer("mb-0 text-sm text-gray-700");
        setTitleBuy("my-0 text-2xl font-semibold text-gray-900");
        setSubTitleBuy("mb-0 text-sm text-gray-700");
    };



    return (
        <div className="flex bg-white h-auto mt-20">

            <div className="w-1/2 h-5/6 ml-10 my-10" >
                <View style={styles.topContainer}>
                    <Text style={styles.textTitle}>Start buying with crypto</Text>
                </View>

                <View style={styles.navigationContainer}>
                    <div className="">
                        <button
                            onClick={onPressPeer}
                            className="cursor-pointer w-40 h-10 mr-3 justify-center items-center transition duration-100 hover:bg-gray-300 bg-yellow-500 focus:bg-yellow-500 rounded-full"
                        >
                            <p className="font-semibold text-sm text-gray-900">Peer to Peer Trading</p>
                        </button>
                    </div>

                    <div className="">
                        <button
                            onClick={onPressBuy}
                            className="cursor-pointer w-28 h-10 mr-3 justify-center items-center transition duration-100 hover:bg-gray-300 focus:bg-yellow-500 rounded-full"
                        >
                            <p className="font-semibold text-sm text-gray-900">Buy Crypto</p>
                        </button>
                    </div>

                    <div className="">
                        <button
                            onClick={onPressDeposit}
                            className="cursor-pointer w-28 h-10 mr-3 justify-center items-center transition duration-100 hover:bg-gray-300 focus:bg-yellow-500 rounded-full"
                        >
                            <p className="font-semibold text-sm text-gray-900">Fiat Deposit</p>
                        </button>
                    </div >
                </View>

                <div className={peer}>
                    <p className={titlePeer}>Peer to Peer Trading</p>
                    <p className={subTitlePeer}>Safest peer-to-peer marketplace to buy and sell bitcoin with 100+ payment methods.</p>

                    <ButtonYellow title="Start Trading"/>
                </div>

                <div className={buyCrypto}>
                    <p className={titleBuy}>Instantly buy Crypto with your Card</p>
                    <p className={subTitleBuy}>Most convenient way to get your Crypto by Visa MasterCard and Verve.</p>

                    <ButtonYellow title="Start Trading"/>
                </div>

                <div className={deposit}>
                    <p className={titleDeposit}>Deposit Fiat</p>
                    <p className={subTitleDeposit}>Deposit NGN instantly into your Binance account from Any Nigerian bank.</p>

                    <ButtonYellow title="Start Trading"/>
                </div>

            </div>

            <div className="flex w-1/2 h-96 mr-10 my-10 ">
                <img
                    layout="responsive"
                    style={{width: 600, height: 400}}
                    src="/gifmock.gif"

                />
            </div>



        </div>
    )
}

export default BodyOne;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    topContainer: {
        marginTop: 50,
    },
    navigationContainer: {
        marginTop: 20,
        flexDirection: 'row',

    },
    buttonContainer1: {
        marginRight: 20,
        width: 200,
        height: 40,
        backgroundColor: "#fcb316",
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonContainer2: {
        marginRight: 20,
        width: 120,
        height: 40,
        backgroundColor: "transparent",
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    textTitle: {
        fontSize: 32,
        fontWeight: 600,
        color: '#000A17',
        lineHeight: 50,
    },
    textContainer: {
        flexDirection: 'column',
        marginLeft: 5,
    },
    text0: {
        fontSize: 10,
        fontWeight: 400,
        color: 'white'
    },
    text1: {
        fontSize: 12,
        fontWeight: 600,
        color: 'white'
    },
});