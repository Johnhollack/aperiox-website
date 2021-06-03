// @generated: @expo/next-adapter@2.1.75
import React, {useEffect, useState} from 'react';
import Head from 'next/head';
import { StyleSheet, View, } from 'react-native';
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Link from "next/link";
import Footer from "../components/Footer";




function Exchange() {

    const onPress = () => {

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
                classIconExchange="text-yellow-500 h-0 lg:h-6 group-hover:animate-bounce group-hover:text-yellow-500 group-hover:text-yellow-500 "
                classTitleExchange="text-yellow-500 opacity-0 lg:opacity-100 text-xs font-bold py-3 group-hover:text-yellow-500 uppercase group-hover:opacity-100 tracking-widest"
                classIconForum="h-0 lg:h-6 group-hover:animate-bounce group-hover:text-yellow-500 group-hover:text-yellow-500 "
                classTitleForum="opacity-0 lg:opacity-100 text-xs font-bold py-3 group-hover:text-yellow-500 uppercase group-hover:opacity-100 tracking-widest"
                classIconRoadmap="h-0 lg:h-6 group-hover:animate-bounce group-hover:text-yellow-500 group-hover:text-yellow-500 "
                classTitleRoadmap="opacity-0 lg:opacity-100 text-xs font-bold py-3 group-hover:text-yellow-500 uppercase group-hover:opacity-100 tracking-widest"
                classIconProduct="h-0 lg:h-6 group-hover:animate-bounce group-hover:text-yellow-500 group-hover:text-yellow-500 "
                classTitleProduct="opacity-0 lg:opacity-100 text-xs font-bold py-3 group-hover:text-yellow-500 uppercase group-hover:opacity-100 tracking-widest"
                classIconPartners="h-0 lg:h-6 group-hover:animate-bounce group-hover:text-yellow-500 group-hover:text-yellow-500 "
                classTitlePartners="opacity-0 lg:opacity-100 text-xs font-bold py-3 group-hover:text-yellow-500 uppercase group-hover:opacity-100 tracking-widest"
                classIconTokenomics="h-0 lg:h-6 group-hover:animate-bounce group-hover:text-yellow-500 group-hover:text-yellow-500 "
                classTitleTokenomics="opacity-0 lg:opacity-100 text-xs font-bold py-3 group-hover:text-yellow-500 uppercase group-hover:opacity-100 tracking-widest"
                classIconAbout="h-0 lg:h-6 group-hover:animate-bounce group-hover:text-yellow-500 group-hover:text-yellow-500 "
                classTitleAbout="opacity-0 lg:opacity-100 text-xs font-bold py-3 group-hover:text-yellow-500 uppercase group-hover:opacity-100 tracking-widest"

            />

            <div className="flex flex-col h-auto w-5/6 md:w-3/5 mt-20">

                <div className="ml-10 ">
                    <div className=" ">
                        <p className="font-extrabold text-3xl md:text-5xl">Apeirox</p>
                        <p className="font-semibold mt-3 text-sm md:text-base text-gray-300">How to buy Aperiox (APX)</p>
                    </div>

                    <div className="flex h-auto my-5 md:mt-10 w-3/4">

                        <Link href={'https://bscscan.com/token/0xcdc3d1e33c0ba574d593d193070aacc335481bb9'}>
                            <a target="_blank" rel="noopener noreferrer">
                                <button
                                    className="bg-gray-500 h-10 text-sm rounded font-semibold w-28 mr-5 hover:bg-gray-400 ">
                                    Bsc Scan
                                </button>
                            </a>
                        </Link>

                        <Link href={'https://bscscan.com/token/0xcdc3d1e33c0ba574d593d193070aacc335481bb9'}>
                            <a target="_blank" rel="noopener noreferrer">
                                <button
                                    className="bg-yellow-500 h-10 text-sm rounded w-36 text-black font-semibold hover:bg-yellow-400 ">
                                    Buy on Pancake
                                </button>
                            </a>
                        </Link>

                    </div>

                    <div className="my-10">
                        <p className="font-semibold mt-3 text-sm text-red-400  text-justify">
                            Recommended to read on PC, and follow along on your Phone to make it easier.
                            This will take approximately 15-30 minutes if you're new.
                        </p>

                        <p className="font-semibold mt-10 text-base  text-white">Step 1: Create a Wallet</p>
                        <p className="mt-3 text-normal text-gray-200  text-justify">
                            Download Trust Wallet and create a wallet. Keep your phrase a secret! Never share
                            it with anyone and store it properly! Make sure to copy the contract address below! The token smart contract address on the Binance Smart Chain is
                        </p>
                        <p className="font-semibold mt-5 text-sm  text-yellow-300">0xcdc3d1e33c0ba574d593d193070aacc335481bb9</p>


                        <p className="font-semibold mt-10 text-base  text-white">Step 2: Add Apeirox to the Wallet</p>
                        <p className="mt-3 text-normal text-gray-200  text-justify">
                            Tap the icon in the top-right and search for "Apeirox". If it's not there, tap "Add Custom Token".
                        </p>
                        <p className="mt-3 text-sm  text-gray-200  text-justify">
                            At the top, tap "Ethereum" next to Network, and change it to "Smart Chain".
                            Copy the contract address on this page and put it in the Contract Address box.
                        </p>
                        <p className="mt-3 text-sm  text-gray-200  text-justify">
                            Next, put "Apeirox" as the name, and the symbol as APX. Decimals will be 9
                        </p>
                        <p className="mt-3 text-sm  text-gray-200  text-justify">
                            Click "Done" at the top and you should now have Apeirox added to your wallet!
                        </p>


                        <p className="font-semibold mt-10 text-base text-white">Step 3: Buy "Binance Smart Chain" (BSC)</p>
                        <p className="mt-3 text-sm  text-gray-200  text-justify">
                            Tap on "Smart Chain" on the main screen of trust wallet, then tap "Buy" in the top right.
                            This step may require KYC verification, so have documents ready to prove your identity.
                        </p>
                        <p className="mt-3 text-sm  text-red-400  text-justify">
                            If the transaction won't go through, you may need to contact your bank to allow international transactions.
                        </p>
                        <p className="mt-3 text-sm  text-gray-200  text-justify">
                            After purchasing, there may be a delay while your transaction is processed. Be patient, this is normal!
                        </p>

                        <p className="font-semibold mt-10 text-base text-white">Step 4: Swap BSC for Apeirox!</p>
                        <p className="mt-3 text-sm  text-gray-200  text-justify">
                            Once your transaction has been cleared, and you have BSC on your Trust Wallet,
                            Go to DApps (or "Browser" for iPhones) at the bottom of the main screen.
                            If the Browser button is not visible at the bottom for iPhone,
                            open Safari and in the URL type trust://browser_enable, then return to trust wallet.
                        </p>
                        <p className="mt-3 text-sm  text-gray-200  text-justify">
                            Open the DApps, or Browser, section and find PancakeSwap and open it.
                            Connect your Trust Wallet in the top-right. Scroll down a little to the "Exchange" box
                        </p>
                        <p className="mt-3 text-sm  text-gray-200  text-justify">
                            Click the settings icon and set the slippage to 12%. If you want to give it the best possible change to clear,
                            increase the deadline. By default it should be set to 20 minutes, which is fine.
                        </p>
                        <p className="mt-3 text-sm  text-gray-200  text-justify">
                            Once the slippage is set, and you have the BNB amount set that you wish to swap for
                            Apeirox as shown, just click Swap and wait patiently for the transaction to clear.
                            This process may not be instant and can take anywhere from a few minutes up to an hour
                            sometimes, depending on traffic.
                        </p>
                        <p className="mt-3 text-sm  text-gray-200  text-justify">
                            Once the transaction has been cleared, you should have Apeirox in your Trust Wallet!
                        </p>
                        <p className="mt-3 text-sm  text-yellow-300">
                            Now all that's left is to HODL!
                        </p>

                    </div>


                </div>


            </div>

            <Footer className=" "/>


        </div>
    );
}

export default Exchange;


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
