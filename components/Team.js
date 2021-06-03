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
                <Text style={styles.textTitle}>Our Team</Text>
            </div>

            <div className="flex flex-row md:flex-col w-screen justify-evenly items-center mb-10 md:mb-0">
                <div className="flex flex-col md:flex-row md:mb-10 justify-between px-10 w-1/2 md:w-screen">
                    <TeamProfile imgUrl="/team-icon.svg" name="Victor Oyita" position="Co-founder & CEO" />
                    <TeamProfile imgUrl="/team-icon.svg" name="Joseph Okafor" position="Co-founder & CTO" />
                    <TeamProfile imgUrl="/team-icon.svg" name="Efe Wilfred" position="Project Manager" />
                    <TeamProfile imgUrl="/team-icon.svg" name="John Lekan" position="Lead Frontend Engineer" />
                    <TeamProfile imgUrl="/team-icon.svg" name="Dare Olushina" position="Backend Engineer" />
                </div>

                <div className="flex flex-col md:flex-row md:mb-16 justify-between px-10 w-auto md:w-screen">
                    <TeamProfile imgUrl="/team-icon.svg" name="Ifeanyi Kalu" position="Software Engineer" />
                    <TeamProfile imgUrl="/team-icon.svg" name="Osasumwen Mumen" position="Frontend Engineer" />
                    <TeamProfile imgUrl="/team-icon.svg" name="Gift Kanu " position="Content Director" />
                    <TeamProfile imgUrl="/team-icon.svg" name="Name Name" position="Position" />
                    <TeamProfile imgUrl="/team-icon.svg" name="Name Name" position="Position" />
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