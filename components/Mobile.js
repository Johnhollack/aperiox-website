// @generated: @expo/next-adapter@2.1.75
import React, {useEffect, useState} from 'react';
import Head from 'next/head';
import { StyleSheet, Text, View } from 'react-native';


function Mobile() {

    return (
        <View style={styles.container}>
            <Head>
                <title>Apeirox</title>
                <meta name="Apeirox" content="Connecting Trades" />
                <link rel="icon" href="/logo.svg" />
            </Head>



        </View>
    );
}

export default Mobile;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        //backgroundColor: 'whitesmoke',
    },
    text: {
        fontSize: 16,
    },
});
