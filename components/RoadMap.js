import React, {useState} from 'react'
import {StyleSheet, Text, View, Image, TouchableOpacity} from "react-native";
import {windowWidth, windowHeight} from "../utils/Dimentions";
import ModalSheet from "./ModalSheet";
import ButtonYellow from "./ButtonYellow";
import {useRouter} from "next/router";


function RoadMap() {
    const router =useRouter();
    // const [modalVisible, setModalVisible] = useState(false);
    const [p2p, setP2p] = useState( "cursor-pointer w-24 md:w-28 h-10 mr-3 justify-center items-center transition duration-100 hover:bg-gray-300 bg-yellow-500 focus:bg-yellow-500 rounded-full");

    const [peer, setPeer] = useState( "");
    const [buyCrypto, setBuyCrypto] = useState( "h-0 opacity-0 m-0");
    const [deposit, setDeposit] = useState( "h-0 opacity-0 m-0");
    const [deposit1, setDeposit1] = useState( "h-0 opacity-0 m-0");

    const [titlePeer, setTitlePeer] = useState( "my-5 text-lg md:text-2xl font-semibold text-gray-900");
    const [subTitlePeer, setSubTitlePeer] = useState( "mb-10 text-xs md:text-sm text-gray-700 w-4/5");

    const [titleBuy, setTitleBuy] = useState( "my-0 text-lg md:text-2xl font-semibold text-gray-900");
    const [subTitleBuy, setSubTitleBuy] = useState( "mb-0 text-xs md:text-sm text-gray-700 w-4/5");

    const [titleDeposit, setTitleDeposit] = useState( "my-0 text-lg md:text-2xl font-semibold text-gray-900");
    const [subTitleDeposit, setSubTitleDeposit] = useState( "mb-0 text-xs md:text-sm text-gray-700 w-4/5");

    const [titleDeposit1, setTitleDeposit1] = useState( "my-0 text-lg md:text-2xl font-semibold text-gray-900");
    const [subTitleDeposit1, setSubTitleDeposit1] = useState( "mb-0 text-xs md:text-sm text-gray-700 w-4/5");


    const onPressPeer = () => {
        setPeer("opacity-100 h-auto my-0 md:my-5 flex flex-col justify-start ");
        setBuyCrypto("opacity-0 h-0");
        setDeposit("opacity-0 h-0");
        setDeposit1("opacity-0 h-0");
        setTitlePeer("my-5 text-lg md:text-2xl font-semibold text-gray-900");
        setSubTitlePeer("mb-10 text-sm w-4/5 text-gray-700");
        setTitleBuy("my-0 text-2xl font-semibold text-gray-900");
        setSubTitleBuy("mb-0 text-sm text-gray-700");
        setTitleDeposit("my-0 text-2xl font-semibold text-gray-900");
        setSubTitleDeposit("mb-0 text-sm text-gray-700");
        setTitleDeposit1("my-0 text-2xl font-semibold text-gray-900");
        setSubTitleDeposit1("mb-0 text-sm text-gray-700");
        setP2p("cursor-pointer w-24 md:w-28  h-10 mr-3 justify-center items-center transition duration-100 hover:bg-gray-300 focus:bg-yellow-500 rounded-full");
    };

    const onPressBuy = () => {
        setBuyCrypto("opacity-100 h-auto my-0 md:my-5 flex flex-col justify-start ");
        setPeer("opacity-0 h-0 m-0");
        setDeposit("opacity-0 h-0 m-0");
        setDeposit1("opacity-0 h-0 m-0");
        setTitleBuy("my-5 text-lg md:text-2xl font-semibold text-gray-900");
        setSubTitleBuy("mb-10 text-sm w-4/5 text-gray-700");
        setTitlePeer("my-0 text-2xl font-semibold text-gray-900");
        setSubTitlePeer("mb-0 text-sm text-gray-700");
        setTitleDeposit("my-0 text-2xl font-semibold text-gray-900");
        setSubTitleDeposit("mb-0 text-sm text-gray-700");
        setTitleDeposit1("my-0 text-2xl font-semibold text-gray-900");
        setSubTitleDeposit1("mb-0 text-sm text-gray-700");
        setP2p("cursor-pointer w-24 md:w-28 h-10 mr-3 justify-center items-center transition duration-100 hover:bg-gray-300 focus:bg-yellow-500 rounded-full");
    };

    const onPressDeposit = () => {
        setDeposit("opacity-100 h-auto my-0 md:my-5 flex flex-col justify-start ");
        setBuyCrypto("opacity-0 h-0 m-0");
        setPeer("opacity-0 h-0 m-0");
        setDeposit1("opacity-0 h-0 m-0");
        setTitleDeposit("my-5 text-lg md:text-2xl font-semibold text-gray-900");
        setSubTitleDeposit("mb-10 text-sm w-4/5 text-gray-700");
        setTitlePeer("my-0 text-2xl font-semibold text-gray-900");
        setSubTitlePeer("mb-0 text-sm text-gray-700");
        setTitleBuy("my-0 text-2xl font-semibold text-gray-900");
        setSubTitleBuy("mb-0 text-sm text-gray-700");
        setTitleDeposit1("my-0 text-2xl font-semibold text-gray-900");
        setSubTitleDeposit1("mb-0 text-sm text-gray-700");
        setP2p("cursor-pointer w-24 md:w-28 h-10 mr-3 justify-center items-center transition duration-100 hover:bg-gray-300 focus:bg-yellow-500 rounded-full");
    };

    const onPressDeposit1 = () => {
        setDeposit1("opacity-100 h-auto my-0 md:my-5 flex flex-col justify-start ");
        setBuyCrypto("opacity-0 h-0 m-0");
        setDeposit("opacity-0 h-0 m-0");
        setPeer("opacity-0 h-0 m-0");
        setTitleDeposit1("my-5 text-lg md:text-2xl font-semibold text-gray-900");
        setSubTitleDeposit1("mb-10 text-sm w-4/5 text-gray-700");
        setTitlePeer("my-0 text-2xl font-semibold text-gray-900");
        setSubTitlePeer("mb-0 text-sm text-gray-700");
        setTitleBuy("my-0 text-2xl font-semibold text-gray-900");
        setSubTitleBuy("mb-0 text-sm text-gray-700");
        setTitleDeposit("my-0 text-2xl font-semibold text-gray-900");
        setSubTitleDeposit("mb-0 text-sm text-gray-700");
        setP2p("cursor-pointer w-24 md:w-28 h-10 mr-3 justify-center items-center transition duration-100 hover:bg-gray-300 focus:bg-yellow-500 rounded-full");
    };



    return (
        <div className="flex flex-col md:flex-row bg-gray-200 h-auto w-screen overflow-hidden">

            <div className="w-screen md:w-4/5 h-5/6 ml-10 my-10 " >
                <div className="">
                    <p className="font-semibold text-2xl md:text-3xl text-gray-900">The Roadmap</p>
                </div>

                <div className="flex flex-row mt-10">
                    <div className="flex flex-col sm:flex-row ">
                        <div className="mb-3 sm:mb-0">
                            <button
                                onClick={onPressPeer}
                                className={p2p}
                            >
                                <p className="font-semibold text-xs md:text-sm text-gray-900">Q2 2021</p>
                            </button>
                        </div>

                        <div className="">
                            <button
                                onClick={onPressBuy}
                                className="cursor-pointer w-24 md:w-28 h-10 mr-3 justify-center items-center transition duration-100 hover:bg-gray-300 focus:bg-yellow-500 rounded-full"
                            >
                                <p className="font-semibold text-xs md:text-sm text-gray-900">Q3 2021</p>
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row ">

                        <div className="mb-3 sm:mb-0">
                            <button
                                onClick={onPressDeposit}
                                className="cursor-pointer w-24 md:w-28 h-10 mr-3 justify-center items-center transition duration-100 hover:bg-gray-300 focus:bg-yellow-500 rounded-full"
                            >
                                <p className="font-semibold text-xs md:text-sm text-gray-900">Q4 2021</p>
                            </button>
                        </div >

                        <div className="">
                            <button
                                onClick={onPressDeposit1}
                                className="cursor-pointer w-24 md:w-28 h-10 mr-3 justify-center items-center transition duration-100 hover:bg-gray-300 focus:bg-yellow-500 rounded-full"
                            >
                                <p className="font-semibold text-xs md:text-sm text-gray-900">Q1 2022</p>
                            </button>
                        </div >
                    </div>

                </div>

                <div className={peer}>
                    <p className={titlePeer}>First Quarter</p>
                    <p className={subTitlePeer}>Project conceptualization, Company registration, Deployment of smart contract, Whitepaper development, Airdrops and bounties (phase 1), Launching on exchanges, Marketing  campaigns
                    </p>

                    <ButtonYellow title="Start Trading" onClick={() => router.push(`/exchanges`)}/>
                </div>

                <div className={buyCrypto}>
                    <p className={titleBuy}>Second Quarter</p>
                    <p className={subTitleBuy}>Product development, Onboarding phase (aggregators, verifiers and dispatchers), Launch of product (Beta phase), Market expansion across Africa
                    </p>

                    <ButtonYellow title="Start Trading" onClick={() => router.push(`/exchanges`)}/>
                </div>

                <div className={deposit}>
                    <p className={titleDeposit}>Third Quarter</p>
                    <p className={subTitleDeposit}>Strategic partnerships, Bounty campaigns (phase 2), Product updates
                    </p>

                    <ButtonYellow title="Start Trading" onClick={() => router.push(`/exchanges`)}/>
                </div>

                <div className={deposit1}>
                    <p className={titleDeposit1}>Fourth Quarter</p>
                    <p className={subTitleDeposit1}>Scaling across other countries around the world (Europe, Asia, America), Financial licensings

                    </p>

                    <ButtonYellow title="Start Trading" onClick={() => router.push(`/exchanges`)}/>
                </div>

            </div>

        </div>
    )
}

export default RoadMap;

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