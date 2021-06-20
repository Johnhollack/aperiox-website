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
                <title>ApeiroX</title>
                <meta name="ApeiroX - exchanges" content="Connecting Trades" />
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
                        <p className="font-extrabold text-3xl md:text-5xl">ApeiroX</p>
                        <p className="font-semibold mt-3 text-sm md:text-base text-gray-300">How to buy Aperiox (APX)</p>
                    </div>

                    <div className="flex h-auto my-5 md:mt-10 w-3/4">

                        <Link href={'https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x989d5fbbbf11f0bccd774cb364eb0349e7b1a56f'}>
                            <a target="_blank" rel="noopener noreferrer">
                                <button
                                    className="bg-yellow-500 h-10 text-sm rounded w-36 text-black font-semibold hover:bg-yellow-400 ">
                                    Buy on Pancake
                                </button>
                            </a>
                        </Link>

                        <Link href={'https://privatesales.apeirox.com/'}>
                            <a target="_blank" rel="noopener noreferrer">
                                <button
                                    className="bg-gray-900 h-10 text-sm rounded font-semibold w-24 mx-3 hover:bg-gray-700 ">
                                    Private Sale
                                </button>
                            </a>
                        </Link>

                        <Link href={'https://bscscan.com/token/0x989d5fbbbf11f0bccd774cb364eb0349e7b1a56f'}>
                            <a target="_blank" rel="noopener noreferrer">
                                <button
                                    className="bg-gray-700 h-10 text-sm rounded font-semibold w-28 mr-5 hover:bg-gray-400 ">
                                    Bsc Scan
                                </button>
                            </a>
                        </Link>
                    </div>

                    <div className="my-10">
                        <p className="font-semibold mt-3 text-sm text-red-400  text-justify">
                            Recommended to read on PC, and follow along on your Phone to make it easier.
                            This will take approximately 15-30 minutes if you're new.
                        </p>

                        <p className="font-semibold mt-10 text-base  text-white">The first step is to make a wallet.</p>
                        <p className="mt-3 text-normal text-gray-200  text-justify">
                            Create your wallet with Trust Wallet. Keep your phrase under wraps! Never give it out to anybody and keep it safe! Make a note of the contract address shown below!
                        </p>
                        <p className="font-semibold mt-5 text-sm  text-yellow-300">0x989d5fbbbf11f0bccd774cb364eb0349e7b1a56f</p>


                        <p className="font-semibold mt-10 text-base  text-white">The second step is to Sync ApeiroX with your wallet.</p>
                        <p className="mt-3 text-normal text-gray-200  text-justify">
                            Search for "ApeiroX" using the icon in the top-right corner. Tap "Add Custom Token" if it isn't already there.
                        </p>
                        <p className="mt-3 text-sm  text-gray-200  text-justify">
                            Change the "Ethereum" next to Network to "Smart Chain" at the top. Copy and paste the contract address from this page into the Contract Address field.
                        </p>
                        <p className="mt-3 text-sm  text-gray-200  text-justify">
                            Put "ApeiroX" as the name and APX as the symbol. The number of decimals will be 18.
                        </p>
                        <p className="mt-3 text-sm  text-gray-200  text-justify">
                            Click "Done" at the top, and ApeiroX should now be in your wallet!
                        </p>


                        <p className="font-semibold mt-10 text-base text-white">The third step is to Purchase the "Binance Smart Chain" (BSC)</p>
                        <p className="mt-3 text-sm  text-gray-200  text-justify">
                            On the trust wallet's main screen, press "Smart Chain," then "Buy" in the upper right. Have documentation to establish your identification available for this stage, as it may need KYC verification.
                        </p>
                        <p className="mt-3 text-sm  text-red-400  text-justify">
                            If the transaction fails, you may need to contact your bank to request that foreign transactions be permitted.
                        </p>
                        <p className="mt-3 text-sm  text-gray-200  text-justify">
                            There may be a delay while your transaction is completed after you make a purchase. Be patient; this is very normal!
                        </p>

                        <p className="font-semibold mt-10 text-base text-white">The Fourth Step is to Replace BSC with ApeiroX!</p>
                        <p className="mt-3 text-sm  text-gray-200  text-justify">
                            Go to DApps (or "Browser" for iPhones) at the bottom of the main screen once your transaction has cleared and you have BSC in your Trust Wallet.
                        </p>
                        <p className="mt-3 text-sm  text-gray-200  text-justify">
                            If the Browser button is not displayed at the bottom of the iPhone screen, open Safari and put trust:/browser enable in the URL field, then return to the trust wallet.
                        </p>
                        <p className="mt-3 text-sm  text-gray-200  text-justify">
                            Find PancakeSwap under the DApps, or Browser area and open it. In the top-right corner, connect your Trust Wallet. Scroll down to the "Exchange" section.
                        </p>
                        <p className="mt-3 text-sm  text-gray-200  text-justify">
                            Simply click Exchange and wait for the transaction to settle after the slippage is established and you have the BNB amount you want to swap for ApeiroX as displayed. This procedure may not be instantaneous, and depending on traffic, it might take anything from a few minutes to an hour.
                        </p>
                        <p className="mt-3 text-sm  text-gray-200  text-justify">
                            You should have ApeiroX in your Trust Wallet after the transaction has cleared!
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
