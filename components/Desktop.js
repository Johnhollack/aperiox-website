// @generated: @expo/next-adapter@2.1.75
import React, {useEffect, useState} from 'react';
import Head from 'next/head';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import BodyOne from "./BodyOne";
import BodyTwo from "./BodyTwo";
import Team from "./Team";
import Footer from "./Footer";
import BodyZero from "./BodyZero";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Listings from "./Listings";
import RoadMap from "./RoadMap";



function Desktop() {

    return (
        <div className="flex flex-col ">
            <Head>
                <title>Apeirox</title>
                <meta name="Apeirox" content="Connecting Trades" />
                <link rel="icon" href="/logo.svg" />
            </Head>

            <Header />

            <NavBar
                classIconHome="text-yellow-500 h-0 lg:h-6 group-hover:animate-bounce group-hover:text-yellow-500 group-hover:text-yellow-500 "
                classTitleHome="text-yellow-500 opacity-0 lg:opacity-100 text-xs font-bold py-3 group-hover:text-yellow-500 uppercase group-hover:opacity-100 tracking-widest"
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
                classIconTokenomics="h-0 lg:h-6 group-hover:animate-bounce group-hover:text-yellow-500 group-hover:text-yellow-500 "
                classTitleTokenomics="opacity-0 lg:opacity-100 text-xs font-bold py-3 group-hover:text-yellow-500 uppercase group-hover:opacity-100 tracking-widest"
                classIconAbout="h-0 lg:h-6 group-hover:animate-bounce group-hover:text-yellow-500 group-hover:text-yellow-500 "
                classTitleAbout="opacity-0 lg:opacity-100 text-xs font-bold py-3 group-hover:text-yellow-500 uppercase group-hover:opacity-100 tracking-widest"

            />

            <BodyZero className=" "/>

            <BodyOne className=" "/>

            <BodyTwo className=" "/>

            <Listings />

            <RoadMap />

            <Team className=" "/>

            <Footer className=" "/>

        </div>
    );
}

export default Desktop;


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
        marginRight: 20,
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


