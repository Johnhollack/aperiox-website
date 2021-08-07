import React from 'react'
import { StyleSheet } from "react-native";
import FeatureItem from "./FeatureItem";



function Feature() {

    const onPress = () => {

    };

    return (
        <div className="flex flex-col justify-center items-center w-screen h-auto bg-white overflow-hidden">

            <div className="flex flex-row w-full justify-evenly items-center md:py-10">
                <FeatureItem imgUrl="/yahoo.png" name="BBC News" url="#"/>
                <FeatureItem imgUrl="/bbc.png" name="BBC News" url="#"/>
                <FeatureItem imgUrl="/techcrunch.png" name="Tech Crunch"  url="#"/>
                <FeatureItem imgUrl="tech-point.png" name="TechPoint Africa" url="#"/>
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