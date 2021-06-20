import React, {useState} from 'react'
import {StyleSheet} from "react-native";
import {useRouter} from "next/router";
import ButtonBlue from "./ButtonBlue";


function Features() {
    const router =useRouter();
    // const [modalVisible, setModalVisible] = useState(false);
    const [p2p, setP2p] = useState( "cursor-pointer w-32 lg:w-40 h-10 mr-3 justify-center items-center transition duration-100 hover:bg-gray-300 bg-blue-400 focus:bg-blue-400 rounded-full");

    const [peer, setPeer] = useState( "");
    const [buyCrypto, setBuyCrypto] = useState( "h-0 opacity-0 m-0");
    const [deposit, setDeposit] = useState( "h-0 opacity-0 m-0");

    const [titlePeer, setTitlePeer] = useState( "mt-10 mb-5 text-lg lg:text-2xl font-semibold text-white");
    const [subTitlePeer, setSubTitlePeer] = useState( "mb-10 text-xs lg:text-sm text-white lg:w-4/5");

    const [titleBuy, setTitleBuy] = useState( "my-0 text-lg lg:text-2xl font-semibold text-white");
    const [subTitleBuy, setSubTitleBuy] = useState( "mb-0 text-xs lg:text-sm text-white lg:w-4/5");

    const [titleDeposit, setTitleDeposit] = useState( "my-0 text-lg lg:text-2xl font-semibold text-white");
    const [subTitleDeposit, setSubTitleDeposit] = useState( "mb-0 text-xs lg:text-sm text-white lg:w-4/5");


    const onPressPeer = () => {
        setPeer("opacity-100 h-auto my-0 lg:my-5 flex flex-col justify-start ");
        setBuyCrypto("opacity-0 h-0");
        setDeposit("opacity-0 h-0");
        setTitlePeer("my-5 text-lg lg:text-2xl font-semibold text-white");
        setSubTitlePeer("mb-10 text-sm lg:w-4/5 text-white");
        setTitleBuy("my-0 text-2xl font-semibold text-white");
        setSubTitleBuy("mb-0 text-sm text-white");
        setTitleDeposit("my-0 text-2xl font-semibold text-white");
        setSubTitleDeposit("mb-0 text-sm text-white");
        setP2p("cursor-pointer w-32 lg:w-40  h-10 mr-3 justify-center items-center transition duration-100 hover:bg-gray-300 focus:bg-blue-400 rounded-full");
    };

    const onPressBuy = () => {
        setBuyCrypto("opacity-100 h-auto my-0 lg:my-5 flex flex-col justify-start ");
        setPeer("opacity-0 h-0 m-0");
        setDeposit("opacity-0 h-0 m-0");
        setTitleBuy("my-5 text-lg lg:text-2xl font-semibold text-white");
        setSubTitleBuy("mb-10 text-sm lg:w-4/5 text-white");
        setTitlePeer("my-0 text-2xl font-semibold text-white");
        setSubTitlePeer("mb-0 text-sm text-white");
        setTitleDeposit("my-0 text-2xl font-semibold text-white");
        setSubTitleDeposit("mb-0 text-sm text-white");
        setP2p("cursor-pointer w-32 lg:w-40 h-10 mr-3 justify-center items-center transition duration-100 hover:bg-gray-300 focus:bg-blue-400 rounded-full");
    };

    const onPressDeposit = () => {
        setDeposit("opacity-100 h-auto my-0 lg:my-5 flex flex-col justify-start ");
        setBuyCrypto("opacity-0 h-0 m-0");
        setPeer("opacity-0 h-0 m-0");
        setTitleDeposit("my-5 text-lg lg:text-2xl font-semibold text-white");
        setSubTitleDeposit("mb-10 text-sm lg:w-4/5 text-white");
        setTitlePeer("my-0 text-2xl font-semibold text-white");
        setSubTitlePeer("mb-0 text-sm text-white");
        setTitleBuy("my-0 text-2xl font-semibold text-white");
        setSubTitleBuy("mb-0 text-sm text-white");
        setP2p("cursor-pointer w-32 lg:w-40 h-10 mr-3 justify-center items-center transition duration-100 hover:bg-gray-300 focus:bg-blue-400 rounded-full");
    };



    return (
        <div name="about" id="about"
             className="flex flex-col lg:flex-row bg-black justify-center items-center h-auto w-screen overflow-hidden px-5 lg:px-20 "
        >

            <div className="w-full lg:w-1/2 h-1/2 lg:h-5/6 my-10" >

                <div className="flex flex-row mt-5">

                    <div className="flex flex-col sm:flex-row">
                        <div className="">
                            <button
                                onClick={onPressPeer}
                                className={p2p}
                            >
                                <p className="font-semibold text-xs lg:text-sm text-gray-900">Artificial Intelligence</p>
                            </button>
                        </div>

                        <div className="mt-3 sm:mt-0">
                            <button
                                onClick={onPressBuy}
                                className="cursor-pointer w-24 lg:w-28 h-10 mr-3 justify-center items-center transition duration-100 hover:bg-gray-300 focus:bg-blue-400 rounded-full"
                            >
                                <p className="font-semibold text-xs lg:text-sm text-gray-900">Moments</p>
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row">
                        <div className="">
                            <button
                                onClick={onPressDeposit}
                                className="cursor-pointer w-24 lg:w-28 h-10 mr-3 justify-center items-center transition duration-100 hover:bg-gray-300 focus:bg-blue-400 rounded-full"
                            >
                                <p className="font-semibold text-xs lg:text-sm text-gray-900">E-Commerce</p>
                            </button>
                        </div >
                    </div>
                </div>

                <div className={peer}>
                    <p className={titlePeer}>Bringing AI into Communication</p>
                    <p className={subTitlePeer}>
                        GoFree’s AI allows you to use your voice to take action.
                        Search for exchange partners, surf your contact and manage your
                        wallet without touching the device...
                    </p>

                    <ButtonBlue title="Get Started" onClick={() => router.push(`/exchanges`)}/>
                </div>

                <div className={buyCrypto}>
                    <p className={titleBuy}>Making your Identity Mobile as you are</p>
                    <p className={subTitleBuy}>
                        Your identity should not be restricted to your hard copy ID cards,
                        it should be on the go just as you are, no restriction, no limitation...
                    </p>

                    <ButtonBlue title="Get Started" onClick={() => router.push(`/exchanges`)}/>
                </div>

                <div className={deposit}>
                    <p className={titleDeposit}>Secured with Bank grade encryption</p>
                    <p className={subTitleDeposit}>
                        Use biometric authentication as a quick and secure way
                        to regain access to your accounts if you lost or forget your password....
                    </p>

                    <ButtonBlue title="Get Started" onClick={() => router.push(`/exchanges`)} />
                </div>

            </div>

            <div className="flex w-full lg:w-1/2 h-96 lg:my-10 mb-10 ">
                <img
                    layout="responsive"
                    className="h-full w-full object-cover md:object-contain lg:object-cover"
                    //style={{width: 600, height: 400}}
                    src="/phoneai.gif"
                />
            </div>



        </div>
    )
}

export default Features;

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