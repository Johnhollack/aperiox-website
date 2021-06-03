// @generated: @expo/next-adapter@2.1.75
import React, {useEffect, useState} from 'react';
import Head from 'next/head';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Link from "next/link";
import Footer from "../components/Footer";




function Product() {



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
                classIconProduct="text-yellow-500 h-0 lg:h-6 group-hover:animate-bounce group-hover:text-yellow-500 group-hover:text-yellow-500 "
                classTitleProduct="text-yellow-500 opacity-0 lg:opacity-100 text-xs font-bold py-3 group-hover:text-yellow-500 uppercase group-hover:opacity-100 tracking-widest"
                classIconPartners="h-0 lg:h-6 group-hover:animate-bounce group-hover:text-yellow-500 group-hover:text-yellow-500 "
                classTitlePartners="opacity-0 lg:opacity-100 text-xs font-bold py-3 group-hover:text-yellow-500 uppercase group-hover:opacity-100 tracking-widest"
                classIconTokenomics="h-0 lg:h-6 group-hover:animate-bounce group-hover:text-yellow-500 group-hover:text-yellow-500 "
                classTitleTokenomics="opacity-0 lg:opacity-100 text-xs font-bold py-3 group-hover:text-yellow-500 uppercase group-hover:opacity-100 tracking-widest"
                classIconAbout="h-0 lg:h-6 group-hover:animate-bounce group-hover:text-yellow-500 group-hover:text-yellow-500 "
                classTitleAbout="opacity-0 lg:opacity-100 text-xs font-bold py-3 group-hover:text-yellow-500 uppercase group-hover:opacity-100 tracking-widest"

            />


            <div className="flex flex-col h-auto w-5/6 mt-20">

                <div className="ml-10 ">
                    <div className=" ">
                        <p className="font-extrabold text-3xl md:text-5xl">Apeirox</p>
                        <p className="font-semibold mt-3 text-sm md:text-base text-gray-300">Products</p>
                    </div>

                    <div className="flex flex-col  md:flex-row h-auto my-5 md:mt-10 w-3/4">

                        <div className="flex mb-3 md:mb-0">
                            <button
                                className="bg-gray-500 h-10 text-sm rounded font-semibold w-28 mr-5 hover:bg-gray-400 ">
                                E-commerce
                            </button>

                            <button
                                className="bg-yellow-500 mr-5 h-10 text-sm rounded w-28 text-black font-semibold hover:bg-yellow-400 ">
                                Dex Swap
                            </button>
                        </div>

                        <div className="flex">
                            <button
                                className="bg-gray-500 h-10 text-sm rounded font-semibold w-28 mr-5 hover:bg-gray-400 ">
                                Wallets
                            </button>

                            <button
                                className="bg-yellow-500 mr-5 h-10 text-sm rounded w-28 text-black font-semibold hover:bg-yellow-400 ">
                                P2P
                            </button>
                        </div>




                    </div>

                    <div className="my-10">
                        <p className="font-semibold mt-10 text-base  text-white">1: E-Wallet Module</p>
                        <p className="mt-3 text-sm text-gray-200  text-justify">
                            One unique product of ours is our e-wallet system. The e-wallet will have the capacity to hold values for all national currencies. Any user on the platform will have a unique e-wallet identifier public address assigned to the account. The identifier will be a 32 hexadecimal code and can be used to receive any currency denomination. The e-currencies in this wallet are considered another version of stable coins that are transferable cross-border.
                        </p>


                        <p className="font-semibold mt-10 text-base  text-white">2: Cryptocurrency Wallet</p>
                        <p className="mt-3 text-sm text-gray-200  text-justify">
                            We have a critical component for our cryptocurrency community, which is the cryptocurrency wallet. This will be a multi-wallet system, similar to the well-known Trust Wallet, that can hold virtually any coin from as many prominent blockchains as possible.
                        </p>


                        <p className="font-semibold mt-10 text-base text-white">3:Peer To Peer Cryptocurrency Trading</p>
                        <p className="mt  P2P trading is also one key feature of our ecosystem because some regions require it for cryptocurrency adoption to grow.
                            Our P2P platform will require users to create an offer for two different currency pairs, usually from crypto to fiat, however we will make available the option of converting from crypto to crypto.
                        -3 text-sm  text-gray-200  text-justify">
                          </p>

                        <p className="font-semibold mt-10 text-base text-white">Step 4: Dex Swaps</p>
                        <p className="mt-3 text-sm  text-gray-200  text-justify">
                            Another product in our ecosystem is the decentralized swaps. We will have a multi-swap system that enables swapping tokens across popular blockchains.
                            We'll utilize a one-of-a-kind tracker system that searches for the lowest rates across all decentralized exchanges and automatically executes swaps on the user's behalf.
                        </p>

                        <p className="font-semibold mt-10 text-base text-white">Step 5: E-commerce module</p>
                        <p className="mt-3 text-sm  text-gray-200  text-justify">
                            ApeiroX's main offering is the e-commerce module. It's a unique mechanism that allows parties to conduct trustless transactions. It also allows low-order merchants to sell their products on a worldwide scale, even if they don't know how to use the platform.                        </p>
                    </div>

                </div>


            </div>

            <Footer className=" "/>




        </div>
    );
}

export default Product;


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
