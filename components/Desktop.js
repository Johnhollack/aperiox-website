// @generated: @expo/next-adapter@2.1.75
import React, {useEffect, useState} from 'react';
import Head from 'next/head';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import ButtonDark from "./ButtonDark";
import {
    faGooglePlay,
    faApple,
    faTelegram,
    faFacebook,
    faTwitter,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import {
    MailIcon
} from "@heroicons/react/outline";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import HeaderItem from "./HeaderItem";

function Desktop() {


    return (
        <View style={styles.container}>
            <Head>
                <title>goFree: Just be free</title>
                <meta name="goFree" content="Connecting your everyday life" />
                <link rel="icon" href="/logo.png" />
            </Head>

            <div className="mt-10 h-auto flex flex-col w-screen justify-center items-center">
                {/* <img src="/gofree-logo.png" alt="gofree-logo" width={100} height={50}/> */}
                <p className="mb-10 font-bold text-center text-2xl text-blue-400">goFree</p>
                    <p className="ml-1 mt-10  text-center text-sm font-medium ">Hey 👋</p>
                    <p className="ml-1 mt-5  text-center text-sm font-medium ">WE'RE STILL</p>
                    <p className="ml-1 mt-5  text-center text-2xl text-blue-400 font-medium ">Cooking Our Website </p>
                    <p className="ml-1 mt-5  text-center font-medium text-sm ">We are going to launch our website very soon, stay tuned.</p>
            </div>

            <div className="flex flex-row h-10 my-10 rounded-full bg-blue-400 hover:bg-blue-500 w-36 justify-center items-center focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 ">
                <button className="font-bold text-sm pl-2 text-white ">Notify me</button>
            </div>


            <div className="my-10 flex flex-row items-center ">
                <HeaderItem icon={faFacebook} url="https://facebook.com/gofreeHQ" />
                <HeaderItem icon={faTwitter} url="https://twitter.com/gofreeHQ" />
                <HeaderItem icon={faInstagram} url="https://instagram.com/gofreeHQ" />
            </div>



            <div className="mt-1 flex w-screen justify-center">
                <ButtonDark subtitle="COMING SOON" title="Google PlayStore" icon={faGooglePlay} />
                <ButtonDark subtitle="COMING SOON" title="App Store" icon={faApple} />
            </div>




        </View>
    );
}

export default Desktop;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },

});
