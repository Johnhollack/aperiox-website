import React, {useState} from 'react'
import {StyleSheet, Text, View, Image, TouchableOpacity} from "react-native";
import {windowWidth, windowHeight} from "../utils/Dimentions";
import ModalSheet from "./ModalSheet";
import ButtonYellow from "./ButtonYellow";
import {useRouter} from "next/router";


function BodyTwo() {
    const router =useRouter();
    //const [modalVisible, setModalVisible] = useState(false);
    const [commerce, setCommerce] = useState( "cursor-pointer w-24 md:w-28 h-10 mr-3 justify-center items-center transition duration-100 hover:bg-gray-100 bg-yellow-500 focus:bg-yellow-500 rounded-full");

    const [peer, setPeer] = useState( "");
    const [buyCrypto, setBuyCrypto] = useState( "h-0 opacity-0 m-0");
    const [deposit, setDeposit] = useState( "h-0 opacity-0 m-0");

    const [titlePeer, setTitlePeer] = useState( "my-5 text-lg md:text-2xl font-semibold text-gray-900");
    const [subTitlePeer, setSubTitlePeer] = useState( "mb-10 text-xs md:text-sm text-gray-700 w-4/5");

    const [titleBuy, setTitleBuy] = useState( "my-0 text-lg md:text-2xl font-semibold text-gray-900");
    const [subTitleBuy, setSubTitleBuy] = useState( "mb-0 text-xs md:text-sm text-gray-700 w-4/5");

    const [titleDeposit, setTitleDeposit] = useState( "my-0 text-lg md:text-2xl font-semibold text-gray-900");
    const [subTitleDeposit, setSubTitleDeposit] = useState( "mb-0 text-xs md:text-sm text-gray-700 w-4/5");


    const onPressPeer = () => {
        setPeer("opacity-100 h-auto my-0 md:my-5 flex flex-col justify-start ");
        setBuyCrypto("opacity-0 h-0");
        setDeposit("opacity-0 h-0");
        setTitlePeer("my-5 text-lg md:text-2xl font-semibold text-gray-900");
        setSubTitlePeer("mb-10 text-sm w-4/5 text-gray-700");
        setTitleBuy("my-0 text-2xl font-semibold text-gray-900");
        setSubTitleBuy("mb-0 text-sm text-gray-700");
        setTitleDeposit("my-0 text-2xl font-semibold text-gray-900");
        setSubTitleDeposit("mb-0 text-sm text-gray-700");
        setCommerce("cursor-pointer w-32 md:w-40 h-10 mr-3 justify-center items-center transition duration-100 hover:bg-gray-100 focus:bg-yellow-500 rounded-full");
    };

    const onPressBuy = () => {
        setBuyCrypto("opacity-100 h-auto my-0 md:my-5 flex flex-col justify-start ");
        setPeer("opacity-0 h-0 m-0");
        setDeposit("opacity-0 h-0 m-0");
        setTitleBuy("my-5 text-lg md:text-2xl font-semibold text-gray-900");
        setSubTitleBuy("mb-10 text-sm w-4/5 text-gray-700");
        setTitlePeer("my-0 text-2xl font-semibold text-gray-900");
        setSubTitlePeer("mb-0 text-sm text-gray-700");
        setTitleDeposit("my-0 text-2xl font-semibold text-gray-900");
        setSubTitleDeposit("mb-0 text-sm text-gray-700");
        setCommerce("cursor-pointer w-32 md:w-40 h-10 mr-3 justify-center items-center transition duration-100 hover:bg-gray-100 focus:bg-yellow-500 rounded-full");
    };

    const onPressDeposit = () => {
        setDeposit("opacity-100 h-auto my-0 md:my-5 flex flex-col justify-start ");
        setBuyCrypto("opacity-0 h-0 m-0");
        setPeer("opacity-0 h-0 m-0");
        setTitleDeposit("my-5 text-lg md:text-2xl font-semibold text-gray-900");
        setSubTitleDeposit("mb-10 text-sm w-4/5 text-gray-700");
        setTitlePeer("my-0 text-2xl font-semibold text-gray-900");
        setSubTitlePeer("mb-0 text-sm text-gray-700");
        setTitleBuy("my-0 text-2xl font-semibold text-gray-900");
        setSubTitleBuy("mb-0 text-sm text-gray-700");
        setCommerce("cursor-pointer w-32 md:w-40 h-10 mr-3 justify-center items-center transition duration-100 hover:bg-gray-100 focus:bg-yellow-500 rounded-full");
    };


    return (
        <div className="flex flex-col md:flex-row h-auto bg-gray-200 w-screen overflow-hidden">
            <div className="w-screen md:w-1/2 h-5/6 ml-10 my-10 " >
                <div className="">
                    <p className="font-semibold text-2xl md:text-3xl text-gray-900">A full suite of products</p>
                </div>

                <View style={styles.navigationContainer}>
                    <div className="">
                        <button
                            onClick={onPressPeer}
                            className={commerce}
                        >
                            <p className="font-semibold text-xs md:text-sm text-gray-900">E-Commerce</p>
                        </button>
                    </div>

                    <div className="">
                        <button
                            onClick={onPressBuy}
                            className="cursor-pointer w-28 h-10 mr-3 justify-center items-center transition duration-100 hover:bg-gray-100 focus:bg-yellow-500 rounded-full"
                        >
                            <p className="font-semibold text-xs md:text-sm text-gray-900">Swap</p>
                        </button>
                    </div>

                </View>

                <div className={peer}>
                    <p className={titlePeer}>Trade seamlessly with Aperiox Exchange</p>
                    <p className={subTitlePeer}>Do do you want to buy or sell any commodity of your choice
                        as well as being in control of your financial services?
                        You can trade both locally and internationally using our commerce platform.
                        Start by using the button below.</p>

                    <ButtonYellow title="Start Trading" onClick={() => router.push(`/exchanges`)}/>
                </div>

                <div className={buyCrypto}>
                    <p className={titleBuy}>Instantly Swap your fiat and crypto currencies</p>
                    <p className={subTitleBuy}>We will have a multi-swap system that enables swapping tokens across popular blockchains.
                        You will be able to instantly swap your fiat and cyrpto currencies from one currency to another
                        and and vise versa.
                        .</p>

                    <ButtonYellow title="Start Trading" onClick={() => router.push(`/exchanges`)}/>
                </div>



            </div>

            <div className="flex w-5/6 md:w-1/2 h-96 ml-10 md:ml-0 md:mr-10 md:my-10 mb-10 ">
                <img
                    layout="responsive"
                    style={{width: 600, height: 400}}
                    src='/e-commerce.svg'

                />
            </div>
        </div>
    )
}

export default BodyTwo;

const styles = StyleSheet.create({
    container: {
        top: 600,
        width: '100%',
        height: 500,
        backgroundColor: "white",
        paddingHorizontal: 50,
        position: 'absolute',
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