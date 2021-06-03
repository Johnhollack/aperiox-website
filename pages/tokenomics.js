// @generated: @expo/next-adapter@2.1.75
import React, {useEffect, useState} from 'react';
import Head from 'next/head';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Link from "next/link";
import Footer from "../components/Footer";




function Tokenomics() {



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
                classIconRoadmap="h-0 lg:h-6 group-hover:animate-bounce group-hover:text-yellow-500 group-hover:text-yellow-500 "
                classTitleRoadmap="opacity-0 lg:opacity-100 text-xs font-bold py-3 group-hover:text-yellow-500 uppercase group-hover:opacity-100 tracking-widest"
                classIconProduct="h-0 lg:h-6 group-hover:animate-bounce group-hover:text-yellow-500 group-hover:text-yellow-500 "
                classTitleProduct="opacity-0 lg:opacity-100 text-xs font-bold py-3 group-hover:text-yellow-500 uppercase group-hover:opacity-100 tracking-widest"
                classIconPartners="h-0 lg:h-6 group-hover:animate-bounce group-hover:text-yellow-500 group-hover:text-yellow-500 "
                classTitlePartners="opacity-0 lg:opacity-100 text-xs font-bold py-3 group-hover:text-yellow-500 uppercase group-hover:opacity-100 tracking-widest"
                classIconTokenomics="text-yellow-500 h-0 lg:h-6 group-hover:animate-bounce group-hover:text-yellow-500 group-hover:text-yellow-500 "
                classTitleTokenomics="text-yellow-500 opacity-0 lg:opacity-100 text-xs font-bold py-3 group-hover:text-yellow-500 uppercase group-hover:opacity-100 tracking-widest"
                classIconAbout="h-0 lg:h-6 group-hover:animate-bounce group-hover:text-yellow-500 group-hover:text-yellow-500 "
                classTitleAbout="opacity-0 lg:opacity-100 text-xs font-bold py-3 group-hover:text-yellow-500 uppercase group-hover:opacity-100 tracking-widest"

            />

            <div className="flex flex-col h-auto w-5/6 mt-20">

                <div className="ml-10 ">
                    <div className=" ">
                        <p className="font-extrabold text-3xl md:text-5xl">Apeirox</p>
                        <p className="font-semibold mt-3 text-sm md:text-base text-gray-300">Tokenomics</p>
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
                                    className="bg-yellow-500 h-10 text-sm rounded w-40 text-black font-semibold hover:bg-yellow-400 ">
                                    Buy on Pancake
                                </button>
                            </a>
                        </Link>

                    </div>


                    <div className="my-10">
                        <p className="font-semibold text-sm t-3 text-normal text-yellow-300">
                            The APX token is a BEP-20 Binance Smart Chain token. ApeiroX's
                            decentralized services would be launched with this coin. Although we plan
                            to move to our own native blockchain in the near future, the technical paper
                            for the blockchain and how the migration will be made feasible will be
                            provided after it is complete. This sort of approach is critical for a variety of
                            reasons based on our business model, particularly in terms of how we aim
                            to simplify the product and pool resources to focus on mainstream
                            acceptance, as well as adequate management and responsibility.                        </p>

                        <p className="mt-3 text-sm text-gray-200">
                            APX tokens contribute to a democratic Blockchain ecosystem and provide the following functions to specify access to services and products:
                        </p>
                        <p className="mt-3 text-sm text-gray-200">
                            The APX tokens will be used primarily for the following;
                        </p>

                        <p className="mt-3 text-sm text-gray-200">
                            1. To reward the community for using the application.
                        </p>
                        <p className="mt-3 text-sm text-gray-200">
                            2. To distribute 50% of the company's profit to token holders.
                        </p>
                        <p className="mt-3 text-sm text-gray-200">
                            3. To reward the team and generate funds to enable the company scale and achieve its fundamental goals.
                        </p>
                        <p className="mt-3 text-sm text-gray-200">
                            4. Just like other cryptocurrencies, it's used for payments.
                        </p>

                    </div>

                </div>


            </div>

            <Footer className=" "/>



        </div>
    );
}

export default Tokenomics;


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
