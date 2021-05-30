import React, {useState} from 'react'
import {StyleSheet, Text, View, Image, TouchableOpacity} from "react-native";
import {windowWidth, windowHeight} from "../utils/Dimentions";
import ModalSheet from "./ModalSheet";
import TeamProfile from "./TeamProfile";



function Team() {

    //const [modalVisible, setModalVisible] = useState(false);

    const onPress = () => {

    };

    return (
        <div className="flex flex-col justify-center items-center w-screen h-auto bg-white">
            <div className="flex justify-center align-center w-screen h-12 my-10 ">
                <Text style={styles.textTitle}>Our Team</Text>
            </div>

            <div className="flex mb-10 justify-evenly w-3/4">
                <TeamProfile imgUrl="/team-icon.svg" name="Victor Oyita" position="Co-founder & CEO" />
                <TeamProfile imgUrl="/team-icon.svg" name="Joseph Okafor" position="Co-founder & CTO" />
                <TeamProfile imgUrl="/team-icon.svg" name="Efe Wilfred" position="Co-founder & COO" />
                <TeamProfile imgUrl="/team-icon.svg" name="John Lekan" position="Head of Product" />
                <TeamProfile imgUrl="/team-icon.svg" name="Dare Olushina" position="Backend Engineer" />
            </div>

            <div className="flex mb-12 justify-evenly w-3/4">
                <TeamProfile imgUrl="/team-icon.svg" name="Osasumwen Mumen" position="Frontend Engineer" />
                <TeamProfile imgUrl="/team-icon.svg" name="Gift Kanu " position="Content Director" />
                <TeamProfile imgUrl="/team-icon.svg" name="Ifeanyi Kalu" position="Software Engineer" />
                <TeamProfile imgUrl="/team-icon.svg" name="Name Name" position="Position" />
                <TeamProfile imgUrl="/team-icon.svg" name="Name Name" position="Position" />
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