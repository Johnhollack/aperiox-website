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
    const [p2p, setP2p] = useState( "cursor-pointer w-28 h-10 mr-3 justify-center items-center transition duration-100 hover:bg-gray-300 bg-yellow-500 focus:bg-yellow-500 rounded-full");

    const [peer, setPeer] = useState( "");
    const [buyCrypto, setBuyCrypto] = useState( "h-0 opacity-0 m-0");
    const [deposit, setDeposit] = useState( "h-0 opacity-0 m-0");

    const [titlePeer, setTitlePeer] = useState( "my-5 text-2xl font-semibold text-white");
    const [subTitlePeer, setSubTitlePeer] = useState( "mb-10 text-sm  md:font-semibold text-gray-300 ");

    const [titleBuy, setTitleBuy] = useState( "my-0 text-2xl font-semibold text-white");
    const [subTitleBuy, setSubTitleBuy] = useState( "mb-0 text-sm  md:font-semibold text-gray-300 ");

    const [titleDeposit, setTitleDeposit] = useState( "my-0 text-2xl font-semibold text-white");
    const [subTitleDeposit, setSubTitleDeposit] = useState( "mb-0 text-sm  md:font-semibold text-gray-300 ");


    const onPressPeer = () => {
        setPeer("opacity-100 h-auto my-0 md:my-5 flex flex-col justify-start ");
        setBuyCrypto("opacity-0 h-0");
        setDeposit("opacity-0 h-0");
        setTitlePeer("my-5 text-2xl font-semibold text-white");
        setSubTitlePeer("mb-10 text-sm  md:font-semibold text-gray-300");
        setTitleBuy("my-0 text-2xl font-semibold text-white");
        setSubTitleBuy("mb-0 text-sm  md:font-semibold text-gray-300");
        setTitleDeposit("my-0 text-2xl font-semibold text-white");
        setSubTitleDeposit("mb-0 text-sm  md:font-semibold text-gray-300");
        setP2p("cursor-pointer w-28 h-10 mr-3 justify-center items-center transition duration-100 hover:bg-gray-300 focus:bg-yellow-500 rounded-full");
    };

    const onPressBuy = () => {
        setBuyCrypto("opacity-100 h-auto my-0 md:my-5 flex flex-col justify-start ");
        setPeer("opacity-0 h-0 m-0");
        setDeposit("opacity-0 h-0 m-0");
        setTitleBuy("my-5 text-2xl font-semibold text-white");
        setSubTitleBuy("mb-10 text-sm  md:font-semibold text-gray-300");
        setTitlePeer("my-0 text-2xl font-semibold text-white");
        setSubTitlePeer("mb-0 text-sm  md:font-semibold text-gray-300");
        setTitleDeposit("my-0 text-2xl font-semibold text-white");
        setSubTitleDeposit("mb-0 text-sm  md:font-semibold text-gray-300");
        setP2p("cursor-pointer w-28 h-10 mr-3 justify-center items-center transition duration-100 hover:bg-gray-300 focus:bg-yellow-500 rounded-full");
    };

    const onPressDeposit = () => {
        setDeposit("opacity-100 h-auto my-0 md:my-5 flex flex-col justify-start ");
        setBuyCrypto("opacity-0 h-0 m-0");
        setPeer("opacity-0 h-0 m-0");
        setTitleDeposit("my-5 text-2xl font-semibold text-white");
        setSubTitleDeposit("mb-10 text-sm md:font-semibold text-gray-300");
        setTitlePeer("my-0 text-2xl font-semibold text-white");
        setSubTitlePeer("mb-0 text-sm md:font-semibold text-gray-300");
        setTitleBuy("my-0 text-2xl font-semibold text-white");
        setSubTitleBuy("mb-0 text-sm md:font-semibold text-gray-300");
        setP2p("cursor-pointer w-28 h-10 mr-3 justify-center items-center transition duration-100 hover:bg-gray-300 focus:bg-yellow-500 rounded-full");
    };


    return (
        <div className="flex flex-col ">
            <Head>
                <title>Apeirox</title>
                <meta name="Apeirox" content="Connecting Trades" />
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

            <div className="flex flex-col mt-10 md:flex-row h-auto">

                <div className="w-5/6 h-5/6 ml-10 mb-10 md:my-10 " >
                    <View style={styles.topContainer}>
                        <Text style={styles.textTitle}>The Roadmap</Text>
                    </View>

                    <div className="flex mt-10">
                        <div className="">
                            <button
                                onClick={onPressPeer}
                                className={p2p}
                            >
                                <p className="font-semibold text-sm text-gray-700">Q2 2021</p>
                            </button>
                        </div>

                        <div className="">
                            <button
                                onClick={onPressBuy}
                                className="cursor-pointer w-28 h-10 mr-3 justify-center items-center transition duration-100 hover:bg-gray-300 focus:bg-yellow-500 rounded-full"
                            >
                                <p className="font-semibold text-sm text-gray-700">Q3 2021</p>
                            </button>
                        </div>

                        <div className="">
                            <button
                                onClick={onPressDeposit}
                                className="cursor-pointer w-28 h-10 mr-3 justify-center items-center transition duration-100 hover:bg-gray-300 focus:bg-yellow-500 rounded-full"
                            >
                                <p className="font-semibold text-sm text-gray-700">Q4 2021</p>
                            </button>
                        </div >
                    </div>

                    <div className={peer}>
                        <p className={titlePeer}>The Initial Push</p>
                        <p className={subTitlePeer}>The Whitebit tokenomics integration will be completed along
                            the completion of the SafeMoon App, Wallet, and Game(s). The Bitmart integration
                            with tokenomics will also be completed in this quarter.
                            We will begin architecting the NFT Exchange as well as video-game integrations.
                            We will be integrating SafeMoon with African Markets in addition to setting up
                            a Charity drive and charity vote. We will be exploring other exchanges
                            (i.e. Binance) and begin architecting the SafeMoon Exchange. We will be
                            expanding the team by 35% and establish a UK/Ireland office.
                            We will be architecting a crypto educational app as well as onboarding new partners.</p>

                        <ButtonYellow title="Start Trading" onClick={() => router.push(`/exchanges`)}/>
                    </div>

                    <div className={buyCrypto}>
                        <p className={titleBuy}>Holding the Line</p>
                        <p className={subTitleBuy}>We will finish our crypto educational app and begin
                            our own charity project. We will begin a community listing donation raise
                            for several exchanges (i.e. Coinbase, Binance, Kraken). We will finish our
                            NFT exchange and release our first video game with SafeMoon integrated.
                            We will be expanding the team by 25% and do a community meetup (pending covid restrictions).
                            We will also be integrating with other large exchanges (I.e. Binance, Mandala).</p>

                        <ButtonYellow title="Start Trading" onClick={() => router.push(`/exchanges`)}/>
                    </div>

                    <div className={deposit}>
                        <p className={titleDeposit}>To the Moon!</p>
                        <p className={subTitleDeposit}>We will finish the SafeMoon Exchange and our charity project.
                            We will finish integrations with our first African market and begin the next
                            integrations with additional African markets. We will create an African based
                            SafeMoon Office and begin hiring in those markets to create jobs. We will be taking
                            donations for our next charity project and begin a vote on the next project as well.
                            We will be establishing a SafeMoon Scholarship in this quarter as well.</p>

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
