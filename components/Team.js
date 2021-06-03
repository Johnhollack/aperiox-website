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
                    <TeamProfile imgUrl="/1-01.png" name="Victor Oyita" position="Co-founder & CEO" url="https://www.linkedin.com/in/victor-oyita-558a1870"/>
                    <TeamProfile imgUrl="/6-01.png" name="Joseph Okafor" position="Co-founder & CTO" url="https://www.linkedin.com/in/joseph-okafor-92007793/"/>
                    <TeamProfile imgUrl="/9-01.png" name="Efe Wilfred" position="Project Manager" url="/"/>
                    <TeamProfile imgUrl="/8-01.png" name="John Lekan" position="Lead Frontend Engineer" url="https://www.linkedin.com/in/lekan-adejumo-007"/>
                    <TeamProfile imgUrl="/4-01.png" name="Dare Olushina" position="Backend Engineer" url="https://www.linkedin.com/in/darey-olushina-82b15710a"/>
                </div>

                <div className="flex flex-col md:flex-row md:mb-16 justify-between px-10 w-auto md:w-screen">
                    <TeamProfile imgUrl="/3-01.png" name="Ifeanyi Kalu" position="Software Engineer" url="/"/>
                    <TeamProfile imgUrl="/BB.png" name="Osasumwen Mumen" position="Frontend Engineer" url="https://www.linkedin.com/in/elijah-mumen-9097481b0/"/>
                    <TeamProfile imgUrl="/7-01.png" name="Gift Kanu " position="Content Director" url="https://www.linkedin.com/in/gift-godwin-080689210"/>
                    <TeamProfile imgUrl="/5-01.png" name="Great Oyita" position="Administrative Manager" url="https://linkedin.com/in/great-oyita-09213b69"/>
                    <TeamProfile imgUrl="/t2-01.png" name="Temperance Anaughe" position="Head, Business Development and Growth" url="https://www.linkedin.com/in/temperance-anaughe-1a411455"/>
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