import React from 'react'
import { StyleSheet } from "react-native";
import FeatureItem from "./FeatureItem";



function Feature() {

    const onPress = () => {

    };

    return (
        <div className="flex flex-col justify-center items-center w-screen h-auto bg-white overflow-hidden">

            <div className="flex flex-col lg:flex-row w-full justify-evenly items-center py-10">
                <FeatureItem imgUrl="/bsc.png" name="bsc" url="/"/>
                <FeatureItem imgUrl="certik.png" name="certik" url="/"/>
                <FeatureItem imgUrl="trust-wallet.svg" name="trust-wallet" url="/"/>
                <FeatureItem imgUrl="metamask.png" name="metamask" url="/"/>
            </div>

        </div>
    )
}

export default Feature;

const styles = StyleSheet.create({
    textTitle: {
        fontSize: 32,
        fontWeight: 600,
        color: '#000',
        lineHeight: 50,
    },
});