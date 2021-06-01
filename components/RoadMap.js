import React, {useState} from 'react'
import {StyleSheet, Text, View, Image, TouchableOpacity} from "react-native";
import {windowWidth, windowHeight} from "../utils/Dimentions";
import ModalSheet from "./ModalSheet";
import ButtonYellow from "./ButtonYellow";
import {useRouter} from "next/router";


function RoadMap() {
    const router =useRouter();
    // const [modalVisible, setModalVisible] = useState(false);
    const [p2p, setP2p] = useState( "cursor-pointer w-28 h-10 mr-3 justify-center items-center transition duration-100 hover:bg-gray-300 bg-yellow-500 focus:bg-yellow-500 rounded-full");

    const [peer, setPeer] = useState( "");
    const [buyCrypto, setBuyCrypto] = useState( "h-0 opacity-0 m-0");
    const [deposit, setDeposit] = useState( "h-0 opacity-0 m-0");

    const [titlePeer, setTitlePeer] = useState( "my-5 text-2xl font-semibold text-gray-900");
    const [subTitlePeer, setSubTitlePeer] = useState( "mb-10 text-sm  md:font-semibold text-gray-700 ");

    const [titleBuy, setTitleBuy] = useState( "my-0 text-2xl font-semibold text-gray-900");
    const [subTitleBuy, setSubTitleBuy] = useState( "mb-0 text-sm  md:font-semibold text-gray-700 ");

    const [titleDeposit, setTitleDeposit] = useState( "my-0 text-2xl font-semibold text-gray-900");
    const [subTitleDeposit, setSubTitleDeposit] = useState( "mb-0 text-sm  md:font-semibold text-gray-700 ");


    const onPressPeer = () => {
        setPeer("opacity-100 h-auto my-0 md:my-5 flex flex-col justify-start ");
        setBuyCrypto("opacity-0 h-0");
        setDeposit("opacity-0 h-0");
        setTitlePeer("my-5 text-2xl font-semibold text-gray-900");
        setSubTitlePeer("mb-10 text-sm  md:font-semibold text-gray-700");
        setTitleBuy("my-0 text-2xl font-semibold text-gray-900");
        setSubTitleBuy("mb-0 text-sm  md:font-semibold text-gray-700");
        setTitleDeposit("my-0 text-2xl font-semibold text-gray-900");
        setSubTitleDeposit("mb-0 text-sm  md:font-semibold text-gray-700");
        setP2p("cursor-pointer w-28 h-10 mr-3 justify-center items-center transition duration-100 hover:bg-gray-300 focus:bg-yellow-500 rounded-full");
    };

    const onPressBuy = () => {
        setBuyCrypto("opacity-100 h-auto my-0 md:my-5 flex flex-col justify-start ");
        setPeer("opacity-0 h-0 m-0");
        setDeposit("opacity-0 h-0 m-0");
        setTitleBuy("my-5 text-2xl font-semibold text-gray-900");
        setSubTitleBuy("mb-10 text-sm  md:font-semibold text-gray-700");
        setTitlePeer("my-0 text-2xl font-semibold text-gray-900");
        setSubTitlePeer("mb-0 text-sm  md:font-semibold text-gray-700");
        setTitleDeposit("my-0 text-2xl font-semibold text-gray-900");
        setSubTitleDeposit("mb-0 text-sm  md:font-semibold text-gray-700");
        setP2p("cursor-pointer w-28 h-10 mr-3 justify-center items-center transition duration-100 hover:bg-gray-300 focus:bg-yellow-500 rounded-full");
    };

    const onPressDeposit = () => {
        setDeposit("opacity-100 h-auto my-0 md:my-5 flex flex-col justify-start ");
        setBuyCrypto("opacity-0 h-0 m-0");
        setPeer("opacity-0 h-0 m-0");
        setTitleDeposit("my-5 text-2xl font-semibold text-gray-900");
        setSubTitleDeposit("mb-10 text-sm md:font-semibold text-gray-700");
        setTitlePeer("my-0 text-2xl font-semibold text-gray-900");
        setSubTitlePeer("mb-0 text-sm md:font-semibold text-gray-700");
        setTitleBuy("my-0 text-2xl font-semibold text-gray-900");
        setSubTitleBuy("mb-0 text-sm md:font-semibold text-gray-700");
        setP2p("cursor-pointer w-28 h-10 mr-3 justify-center items-center transition duration-100 hover:bg-gray-300 focus:bg-yellow-500 rounded-full");
    };



    return (
        <div className="flex flex-col md:flex-row bg-gray-200 h-auto">

            <div className="w-5/6 h-5/6 ml-10 mb-10 md:my-10 " >
                <View style={styles.topContainer}>
                    <Text style={styles.textTitle}>The Roadmap</Text>
                </View>

                <View style={styles.navigationContainer}>
                    <div className="">
                        <button
                            onClick={onPressPeer}
                            className={p2p}
                        >
                            <p className="font-semibold text-sm text-gray-900">Q2 2021</p>
                        </button>
                    </div>

                    <div className="">
                        <button
                            onClick={onPressBuy}
                            className="cursor-pointer w-28 h-10 mr-3 justify-center items-center transition duration-100 hover:bg-gray-300 focus:bg-yellow-500 rounded-full"
                        >
                            <p className="font-semibold text-sm text-gray-900">Q3 2021</p>
                        </button>
                    </div>

                    <div className="">
                        <button
                            onClick={onPressDeposit}
                            className="cursor-pointer w-28 h-10 mr-3 justify-center items-center transition duration-100 hover:bg-gray-300 focus:bg-yellow-500 rounded-full"
                        >
                            <p className="font-semibold text-sm text-gray-900">Q4 2021</p>
                        </button>
                    </div >
                </View>

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