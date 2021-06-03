// @generated: @expo/next-adapter@2.1.75
import React, {useEffect, useState} from 'react';
import Head from 'next/head';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Link from "next/link";
import Footer from "../components/Footer";




function Whitepaper() {



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
                classIconWhitepaper="text-yellow-500 h-0 lg:h-6 group-hover:animate-bounce group-hover:text-yellow-500 group-hover:text-yellow-500 "
                classTitleWhitepaper="text-yellow-500 opacity-0 lg:opacity-100 text-xs font-bold py-3 group-hover:text-yellow-500 uppercase group-hover:opacity-100 tracking-widest"
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
                classIconTokenomics="h-0 lg:h-6 group-hover:animate-bounce group-hover:text-yellow-500 group-hover:text-yellow-500 "
                classTitleTokenomics="opacity-0 lg:opacity-100 text-xs font-bold py-3 group-hover:text-yellow-500 uppercase group-hover:opacity-100 tracking-widest"
                classIconAbout="h-0 lg:h-6 group-hover:animate-bounce group-hover:text-yellow-500 group-hover:text-yellow-500 "
                classTitleAbout="opacity-0 lg:opacity-100 text-xs font-bold py-3 group-hover:text-yellow-500 uppercase group-hover:opacity-100 tracking-widest"

            />

            <div className="flex flex-col h-auto w-5/6 mt-20">

                <div className="ml-10 ">
                    <div className=" ">
                        <p className="font-extrabold text-3xl md:text-5xl">Apeirox</p>
                        <p className="font-semibold mt-3 text-sm md:text-base text-gray-300">Whitepaper v1.0</p>
                    </div>

                    <div className="flex h-auto my-5 md:mt-10 w-3/4">

                        <Link href={'https://docs.google.com/document/d/1NfYpihEfXJah_dHG2yZYEjuQgovz_wLE/edit#'}>
                            <a target="_blank" rel="noopener noreferrer">
                                <button
                                    className="bg-gray-500 h-10 text-sm rounded font-semibold w-28 mr-5 hover:bg-gray-400 ">
                                    Download
                                </button>
                            </a>
                        </Link>

                        <Link href={'https://drive.google.com/file/d/1NfYpihEfXJah_dHG2yZYEjuQgovz_wLE/view'}>
                            <a target="_blank" rel="noopener noreferrer">
                                <button
                                    className="bg-yellow-500 text-sm h-10 rounded w-40 text-black font-semibold hover:bg-yellow-400 ">
                                    Save to Drive
                                </button>
                            </a>
                        </Link>

                    </div>

                    <div className="my-10">
                        <p className="font-semibold mt-3 text-sm text-yellow-300 text-justify">
                            Aperiox is a  fintech product that integrates a one-of-a-kind, trustless, flexibly safe,
                            and robust e-commerce platform that uses blockchain to introduce blockchain
                            benefits to commerce and link local suppliers to both local and foreign markets,
                            with the aim of reducing financial disparities and improving product accessibility.
                        </p>

                        <p className="font-semibold mt-10 text-normal text-white">Problem Statement</p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            Electronic commerce, as we know it, thrives better in developed countries than developing ones for reasons such as; infrastructure deficit, high delivery costs, security and mistrust issues, supply chain issues, high illiteracy rates and highly fragmented markets.
                        </p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            Using Africa as a case study, trading and exporting locally produced goods and natural resources to the western world have been plagued with factors such as standardization, accessibility, finance, know-how, infrastructure and government policies.                         </p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            About 60% of the population of Africa is known to be largely into farming with women and youths accounting for over 60 to 80% of the farming population. A major challenge facing these farmers is the inability to access ready markets, storage facilities and off-takers thereby forcing most of them to produce less than their capacity and resort to selling their produce at whatever price available to them in their locality.                        </p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            E-commerce has been very helpful bridging the gap between producers and consumers and in creating new jobs. When fully harnessed, e-commerce has the potential to create three times more jobs than have already been created to support inclusive economic growth in developing countries. Thus, giving more room for women and youths to participate in the industry in more ways than known.                         </p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            Generally, there seems to be another disturbing concern in how traditional e-commerce is being run. It is totally centralized and though sometimes claims discounts on products, but the users who power the platform do not get any form of reward for their usage nor do they partly own the platform. How can decentralized e-Commerce improve household consumption, boost rural economies, improve their quality of life and reduce inequality especially among people in rural communities and foster economic growth?                        </p>


                        <p className="font-semibold mt-10 text-normal text-white">Solution</p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            Apeirox is a one-of-a-kind, trust-less, flexibly-secure, robust e-commerce platform that uses blockchain technology to introduce blockchain benefits to commerce and connect local producers and suppliers of consumer goods with key emphasis on agriculture and natural resources; to both local and international markets, with a goal to solve financial inequalities and enhancing of product accessibility with great ease.                        </p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            This project is about a new and improved way of doing business in order to bridge the gaps and address the issues of goods accessibility, security and quality assurance, as well as ensure the delivery of a trust-less platform where everyone from anywhere in the world can perform all types of transactions, from local purchases to international trades, without the buyer or seller burdened with the details and challenges from middlemen.
                        </p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            When doing all of the above, the platform will also serve as a semi-decentralized bank or pool for the customer, allowing purchases to be made or collected in any currency or cryptocurrency, with cash incentives and implemented solely to encourage platform usage and allow users to own the solution they use through profit sharing.                        </p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            The platform will have some key components that enable trade to happen in such a discrete and trustless manner. Three key components that power the trades on the platform are the following;
                            Aggregators, Verifiers & Dispatchers
                        </p>

                        <Link href={'/'}>
                            <a target="_blank" rel="noopener noreferrer">
                                <p className="mt-3 text-sm text-yellow-300">
                                    Learn more
                                </p>
                            </a>
                        </Link>
                    </div>

                </div>


            </div>

            <Footer className=" "/>


        </div>
    );
}

export default Whitepaper;


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
