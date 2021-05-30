// @generated: @expo/next-adapter@2.1.75
import React, {useEffect, useState} from 'react';
import Head from 'next/head';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import ButtonYellow from "./ButtonYellow";
import ButtonDark from "./ButtonDark";
import { faGooglePlay, faApple, faTelegram } from "@fortawesome/free-brands-svg-icons";
import BodyOne from "./BodyOne";
import {windowWidth} from "../utils/Dimentions";
import BodyTwo from "./BodyTwo";
import Team from "./Team";
import Footer from "./Footer";



function Desktop() {

    const [message, setMessage] = useState('');

    return (
        <div className="flex flex-col ">
            <Head>
                <title>Apeirox</title>
                <meta name="Apeirox" content="Connecting Trades" />
                <link rel="icon" href="/logo.svg" />
            </Head>

            <Header />

            <NavBar />

            <div className="ml-10 ">
                <View style={styles.textTitleContainer}>
                    <Text style={styles.textTitle}>Buy, Sell and Trade Commodities in Minutes</Text>
                    <Text style={styles.textSubtitle}>Get Started with as little as 500NGN</Text>
                </View>

                <View style={styles.inputContainer}>
                    <View style={styles.emailContainer} >
                        <TextInput
                            placeholder={'Email Address'}
                            style={styles.textInput}
                            value={message}
                            onChangeText={setMessage}
                        />
                    </View>
                    <ButtonYellow title="Register Now"/>
                </View>

                <View style={styles.downloadContainer}>
                    <ButtonDark subtitle="GET IT ON" title="Google PlayStore" icon={faGooglePlay} />
                    <ButtonDark subtitle="DOWNLOAD ON" title="App Store" icon={faApple} />
                    <ButtonDark subtitle="JOIN OUR" title="Community" icon={faTelegram} />
                </View>
            </div>

            <BodyOne className=" "/>

            <BodyTwo className=" "/>

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
