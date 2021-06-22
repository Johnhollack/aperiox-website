import React from 'react'
import { StyleSheet } from "react-native";
import FeatureItem from "./FeatureItem";



function Feature() {

    const onPress = () => {

    };

    return (
        <div className="flex flex-col justify-center items-center w-screen h-auto bg-white overflow-hidden">

            <div className="flex flex-col lg:flex-row w-full justify-evenly items-center lg:py-20">
                <FeatureItem imgUrl="/bsc.png" name="BBC News" url="https://bscscan.com/0x989d5fbbbf11f0bccd774cb364eb0349e7b1a56f"/>
                <FeatureItem imgUrl="/pancakeswap.png" name="Tech Crunch"  url="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x989d5fbbbf11f0bccd774cb364eb0349e7b1a56f"/>
                <FeatureItem imgUrl="coincodek.png" name="TechPoint Africa" url="https://coincodex.com/ico/apeirox/"/>
                <FeatureItem imgUrl="coinmarketcap.png" name="TechPoint Africa" url="https://coinmarketcap.com"/>
                <FeatureItem imgUrl="coingecko.png" name="TechPoint Africa" url="https://www.coingecko.com/"/>
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