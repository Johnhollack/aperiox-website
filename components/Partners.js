import React, {useState} from 'react'
import {StyleSheet, Text, View, Image, TouchableOpacity} from "react-native";
import PartnerItem from "./PartnerItem";



function Partners() {

    const onPress = () => {

    };

    return (
        <div className="flex flex-col justify-center items-center w-screen h-auto bg-white overflow-hidden">
            <div className="flex flex-col lg:flex-row w-full justify-evenly items-center mb-10 lg:mb-0 lg:py-10">
                <PartnerItem imgUrl="/bsc.png" name="bsc" url="/"/>
                <PartnerItem imgUrl="certik.png" name="certik" url="/"/>
                <PartnerItem imgUrl="/bsc-trans.png" name="bsc" url="/"/>
                <PartnerItem imgUrl="/pancakeswap.png" name="pancakeswap" url="/"/>
                <PartnerItem imgUrl="trust-wallet.svg" name="trust-wallet" url="/"/>
                <PartnerItem imgUrl="metamask.png" name="metamask" url="/"/>
            </div>

        </div>
    )
}

export default Partners;

const styles = StyleSheet.create({
    textTitle: {
        fontSize: 32,
        fontWeight: 600,
        color: '#000',
        lineHeight: 50,
    },
});