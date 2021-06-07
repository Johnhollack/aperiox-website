// @generated: @expo/next-adapter@2.1.75
import React, {useEffect, useState} from 'react';
import Head from 'next/head';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Link from "next/link";




function Bounty() {



    return (
        <div className="flex flex-col ">
            <Head>
                <title>ApeiroX</title>
                <meta name="ApeiroX" content="Connecting Trades" />
                <link rel="icon" href="/logo.svg" />
            </Head>

            <Header />

            <NavBar
                classIconHome="h-0 lg:h-6 group-hover:animate-bounce group-hover:text-yellow-500 group-hover:text-yellow-500 "
                classTitleHome="opacity-0 lg:opacity-100 text-xs font-bold py-3 group-hover:text-yellow-500 uppercase group-hover:opacity-100 tracking-widest"
                classIconAirdrop="h-0 lg:h-6 group-hover:animate-bounce group-hover:text-yellow-500 group-hover:text-yellow-500 "
                classTitleAirdrop="opacity-0 lg:opacity-100 text-xs font-bold py-3 group-hover:text-yellow-500 uppercase group-hover:opacity-100 tracking-widest"
                classIconBounty="text-yellow-500 h-0 lg:h-6 group-hover:animate-bounce group-hover:text-yellow-500 group-hover:text-yellow-500 "
                classTitleBounty="text-yellow-500 opacity-0 lg:opacity-100 text-xs font-bold py-3 group-hover:text-yellow-500 uppercase group-hover:opacity-100 tracking-widest"
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
                classIconTokenomics="h-0 lg:h-6 group-hover:animate-bounce group-hover:text-yellow-500 group-hover:text-yellow-500 "
                classTitleTokenomics="opacity-0 lg:opacity-100 text-xs font-bold py-3 group-hover:text-yellow-500 uppercase group-hover:opacity-100 tracking-widest"
                classIconAbout="h-0 lg:h-6 group-hover:animate-bounce group-hover:text-yellow-500 group-hover:text-yellow-500 "
                classTitleAbout="opacity-0 lg:opacity-100 text-xs font-bold py-3 group-hover:text-yellow-500 uppercase group-hover:opacity-100 tracking-widest"
            />

            <div className="flex flex-col h-auto w-5/6 mt-20">

                <div className="ml-10 ">
                    <div className=" ">
                        <p className="font-extrabold text-3xl md:text-5xl">ApeiroX</p>
                        <p className="font-semibold mt-3 text-sm md:text-base text-gray-300">Bounty Campaings</p>
                    </div>

                    <div className="flex h-auto my-5 md:mt-10 w-3/4">

                        <Link href={'https://t.me/ApeiroXbounty'}>
                            <a target="_blank" rel="noopener noreferrer">
                                <button
                                    className="bg-gray-500 h-10 text-sm rounded font-semibold w-32 md:w-40 mr-5 hover:bg-gray-400 ">
                                    Complete Tasks
                                </button>
                            </a>
                        </Link>

                        <Link href={'https://twitter.com/ApeiroXcom'}>
                            <a target="_blank" rel="noopener noreferrer">
                                <button
                                    className="bg-yellow-500 h-10 rounded text-sm w-32 md:w-40 text-black font-semibold hover:bg-yellow-400 ">
                                    Share on Twitter
                                </button>
                            </a>
                        </Link>

                    </div>

                    <div className="my-10">
                        <p className="font-semibold mt-3 text-sm text-yellow-300 text-justify">
                            Bounty awards will be awarded to participants who successfully perform various activities as part of our marketing plan for promoting the project.
                            Bounties and bounty-related duties come in a variety of forms. The following are the most common:
                        </p>

                        <p className="font-semibold mt-10 text-normal text-white">Option 1: Meme Campaigns</p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            Participants will make memes based on our brands and services, which
                            they will share on social media. Participants will be expected to submit links
                            to the relevant postings.
                        </p>

                        <p className="font-semibold mt-10 text-normal text-white">Option 2: Video campaigns and blog posts</p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            Participants in this campaign must submit a favorable blog post about ApeiroX or produce a video about ApeiroX. Participants will need to study the company's white paper and become familiar with the project's contents in order to do this effectively.
                        </p>

                        <p className="font-semibold mt-10 text-normal text-white">Option 3: Campaign for translation</p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            This one is rather self-explanatory. ApeiroX will compensate participants for translating the website, white paper, or other content.
                        </p>

                        <p className="font-semibold mt-10 text-normal text-white">Option 4: Social media campaigns on Twitter and Facebook</p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            Participants in this campaign will be required to execute social media-related tasks, as the name implies. Because Facebook and Twitter are two of the most popular social networking networks, chores are frequently associated with them.
                        </p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            This will range from publishing and re-sharing to liking project-related information on social media.
                        </p>
                        <p className="mt-3 text-sm text-gray-200 text-justify">
                            These bounty campaigns will employ Twitter Audit to check for bogus users on participants' accounts, and they may set a minimum audit score.
                        </p>

                        <Link href={'https://t.me/ApeiroXbounty'}>
                            <a target="_blank" rel="noopener noreferrer">
                                <p className="mt-3 text-base text-yellow-300">
                                    Join the bounty group on telegram
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

export default Bounty;


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
