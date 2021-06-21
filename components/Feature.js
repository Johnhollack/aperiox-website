import React from 'react'
import { StyleSheet } from "react-native";
import FeatureItem from "./FeatureItem";



function Feature() {

    const onPress = () => {

    };

    return (
        <div className="flex flex-col justify-center items-center w-screen h-auto bg-white overflow-hidden">
            <div className="flex justify-center align-center w-full h-12 my-10 ">
                <p className="text-black font-semibold text-base md:text-2xl text-center font-sans">As seen on</p>
            </div>

            <div className="flex flex-col lg:flex-row w-full justify-evenly items-center mb-10 lg:mb-10 lg:py-10">
                <FeatureItem imgUrl="/yahoo.png" name="BBC News" url="/"/>
                <FeatureItem imgUrl="/bbc.png" name="BBC News" url="/"/>
                <FeatureItem imgUrl="/techcrunch.png" name="Tech Crunch"  url="/"/>
                <FeatureItem imgUrl="tech-point.png" name="TechPoint Africa" url="/"/>
                <FeatureItem imgUrl="coinmarketcap.png" name="TechPoint Africa" url="/"/>
                <FeatureItem imgUrl="coingecko.png" name="TechPoint Africa" url="/"/>
            </div>

            <div className="flex flex-col lg:flex-row w-full justify-evenly items-center mb-10 lg:mb-10 lg:py-10">
                <FeatureItem imgUrl="/bsc.png" name="bsc" url="/"/>
                <FeatureItem imgUrl="certik.png" name="certik" url="/"/>
                <FeatureItem imgUrl="/bsc-trans.png" name="bsc" url="/"/>
                <FeatureItem imgUrl="/pancakeswap.png" name="pancakeswap" url="/"/>
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