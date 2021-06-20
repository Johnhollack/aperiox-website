import React, {useState} from 'react'
import {StyleSheet, Text, View, Image, TouchableOpacity} from "react-native";
import TeamProfile from "./TeamProfile";



function Team() {

    //const [modalVisible, setModalVisible] = useState(false);

    const onPress = () => {

    };

    return (
        <div className="flex flex-col justify-center items-center w-screen h-auto bg-white overflow-hidden">
            <div className="flex justify-center align-center w-screen h-12 my-10 ">
                <p className="text-black font-semibold text-base md:text-2xl text-center font-sans">Our Team</p>
            </div>

            <div className="flex flex-row lg:flex-col w-screen justify-evenly items-center mb-10 lg:mb-0">
                <div className="flex flex-col lg:flex-row lg:mb-10 justify-between px-20 w-1/2 lg:w-screen">
                    <TeamProfile imgUrl="/picture.png" name="Lekan Adejumo" position="Founder & CEO" url="https://www.linkedin.com/in/lekan-adejumo-007"/>
                    <TeamProfile imgUrl="/picture.png" name="Sweet Odigie" position="Content Director" url="/"/>
                    <TeamProfile imgUrl="picture.png" name="Unveiling Soon" position="Full Stack Engineer" url="/"/>
                    <TeamProfile imgUrl="picture.png" name="Unveiling Soon" position="Lead Frontend Engineer" url="/"/>
                    <TeamProfile imgUrl="/picture.png" name="Unveiling Soon" position="Backend Engineer" url="/"/>
                </div>

                <div className="flex flex-col lg:flex-row lg:mb-16 justify-between px-20 w-auto lg:w-screen">
                    <TeamProfile imgUrl="/picture.png" name="Unveiling Soon" position="Advisor" url="/"/>
                    <TeamProfile imgUrl="/picture.png" name="Unveiling Soon" position="Advisor" url="/"/>
                    <TeamProfile imgUrl="/picture.png" name="Unveiling Soon" position="Advisor" url="/"/>
                    <TeamProfile imgUrl="/picture.png" name="Unveiling Soon" position="Advisor" url="/"/>
                    <TeamProfile imgUrl="/picture.png" name="Unveiling Soon" position="Advisor" url="/"/>
                </div>
            </div>

        </div>
    )
}

export default Team;

const styles = StyleSheet.create({
    container: {
        top: 600,
        width: '100%',
        height: 500,
        backgroundColor: "white",
        paddingHorizontal: 50,
        position: 'absolute',
    },
    topContainer: {
        marginTop: 50,
    },
    navigationContainer: {
        marginTop: 20,
        flexDirection: 'row',

    },
    buttonContainer1: {
        marginRight: 20,
        width: 200,
        height: 40,
        backgroundColor: "#fcb316",
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonContainer2: {
        marginRight: 20,
        width: 120,
        height: 40,
        backgroundColor: "transparent",
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    textTitle: {
        fontSize: 32,
        fontWeight: 600,
        color: '#000A17',
        lineHeight: 50,
    },
    textContainer: {
        flexDirection: 'column',
        marginLeft: 5,
    },
    text0: {
        fontSize: 10,
        fontWeight: 400,
        color: 'white'
    },
    text1: {
        fontSize: 12,
        fontWeight: 600,
        color: 'white'
    },
});