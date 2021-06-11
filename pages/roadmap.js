// @generated: @expo/next-adapter@2.1.75
import React, {useEffect, useState} from 'react';
import Head from 'next/head';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import ButtonYellow from "../components/ButtonYellow";
import {useRouter} from "next/router";
import Footer from "../components/Footer";




function Roadmap() {
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
        <div className="flex flex-col ">
            <Head>
                <title>ApeiroX</title>
                <meta name="ApeiroX - roadmap" content="Connecting Trades" />
                <link rel="icon" href="/logo.svg" />
            </Head>

            <Header />

            <NavBar
                classIconHome="h-0 lg:h-6 group-hover:animate-bounce group-hover:text-yellow-500 group-hover:text-yellow-500 "
                classTitleHome="opacity-0 lg:opacity-100 text-xs font-bold py-3 group-hover:text-yellow-500 uppercase group-hover:opacity-100 tracking-widest"
                classIconAirdrop="h-0 lg:h-6 group-hover:animate-bounce group-hover:text-yellow-500 group-hover:text-yellow-500 "
                classTitleAirdrop="opacity-0 lg:opacity-100 text-xs font-bold py-3 group-hover:text-yellow-500 uppercase group-hover:opacity-100 tracking-widest"
                classIconBounty="h-0 lg:h-6 group-hover:animate-bounce group-hover:text-yellow-500 group-hover:text-yellow-500 "
                classTitleBounty="opacity-0 lg:opacity-100 text-xs font-bold py-3 group-hover:text-yellow-500 uppercase group-hover:opacity-100 tracking-widest"
                classIconWhitepaper="h-0 lg:h-6 group-hover:animate-bounce group-hover:text-yellow-500 group-hover:text-yellow-500 "
                classTitleWhitepaper="opacity-0 lg:opacity-100 text-xs font-bold py-3 group-hover:text-yellow-500 uppercase group-hover:opacity-100 tracking-widest"
                classIconExchange="h-0 lg:h-6 group-hover:animate-bounce group-hover:text-yellow-500 group-hover:text-yellow-500 "
                classTitleExchange="opacity-0 lg:opacity-100 text-xs font-bold py-3 group-hover:text-yellow-500 uppercase group-hover:opacity-100 tracking-widest"
                classIconForum="h-0 lg:h-6 group-hover:animate-bounce group-hover:text-yellow-500 group-hover:text-yellow-500 "
                classTitleForum="opacity-0 lg:opacity-100 text-xs font-bold py-3 group-hover:text-yellow-500 uppercase group-hover:opacity-100 tracking-widest"
                classIconRoadmap="text-yellow-500 h-0 lg:h-6 group-hover:animate-bounce group-hover:text-yellow-500 group-hover:text-yellow-500 "
                classTitleRoadmap="text-yellow-500 opacity-0 lg:opacity-100 text-xs font-bold py-3 group-hover:text-yellow-500 uppercase group-hover:opacity-100 tracking-widest"
                classIconProduct="h-0 lg:h-6 group-hover:animate-bounce group-hover:text-yellow-500 group-hover:text-yellow-500 "
                classTitleProduct="opacity-0 lg:opacity-100 text-xs font-bold py-3 group-hover:text-yellow-500 uppercase group-hover:opacity-100 tracking-widest"
                classIconPartners="h-0 lg:h-6 group-hover:animate-bounce group-hover:text-yellow-500 group-hover:text-yellow-500 "
                classTitlePartners="opacity-0 lg:opacity-100 text-xs font-bold py-3 group-hover:text-yellow-500 uppercase group-hover:opacity-100 tracking-widest"
                classIconTokenomics="h-0 lg:h-6 group-hover:animate-bounce group-hover:text-yellow-500 group-hover:text-yellow-500 "
                classTitleTokenomics="opacity-0 lg:opacity-100 text-xs font-bold py-3 group-hover:text-yellow-500 uppercase group-hover:opacity-100 tracking-widest"
                classIconAbout="h-0 lg:h-6 group-hover:animate-bounce group-hover:text-yellow-500 group-hover:text-yellow-500 "
                classTitleAbout="opacity-0 lg:opacity-100 text-xs font-bold py-3 group-hover:text-yellow-500 uppercase group-hover:opacity-100 tracking-widest"

            />

            <div className="flex flex-col md:flex-row bg-gray-200 h-auto w-screen overflow-hidden">

                <div className="w-screen md:w-4/5 h-5/6 ml-10 my-10 " >
                    <div className="">
                        <p className="font-semibold text-2xl md:text-3xl text-gray-900">The Roadmap</p>
                    </div>

                    <div className="flex flex-row mt-10">
                        <div className="flex flex-col sm:flex-row ">
                            <div className="">
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

                            <div className="">
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
                        <p className={subTitleBuy}>Product development, Launch of product (Beta phase), Onboarding phase (aggregators, verifiers and dispatchers), Market expansion across Africa
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


            <Footer className=" "/>

        </div>
    );
}

export default Roadmap;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    text: {
        fontSize: 16,
    },
    textTitleContainer: {
        width: 500,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginTop: 100,
    },
    textTitle: {
        fontSize: 34,
        fontWeight: 'bold',
        color: 'whitesmoke',
        lineHeight: 50,
    },
    textSubtitle: {
        fontSize: 16,
        fontWeight: 600,
        lineHeight: 22,
        color: '#969494',
        paddingTop: 10,
    },
    inputContainer: {
        flexDirection: 'row',
        marginTop: 40,
    },
    emailContainer: {
        backgroundColor: 'white',
        width: 300,
        height: 40,
        borderRadius: 5,
        alignItems: "baseline",
    },
    textInput: {
        width: '100%',
        height: '100%',
        color: 'black',
        paddingHorizontal: 10,
        fontSize: 14,
        fontWeight: 'normal',
    },
    downloadContainer: {
        flexDirection: 'row',
       marginTop: 40,
        width: 600,
    },
});
