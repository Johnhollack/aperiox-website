import React, {useState} from 'react'
import {StyleSheet, Text, View, Image, TouchableOpacity} from "react-native";
import {windowWidth, windowHeight} from "../utils/Dimentions";
import ModalSheet from "./ModalSheet";



function BodyTwo() {

    //const [modalVisible, setModalVisible] = useState(false);

    const onPress = () => {

    };


    return (
        <div className="flex w-screen h-auto bg-gray-300">
            <div className="w-1/2 h-auto ml-10 my-10 " >
                <View style={styles.topContainer}>
                    <Text style={styles.textTitle}>A full suite of products</Text>
                </View>

                <View style={styles.navigationContainer}>
                    <div className=" ">
                        <TouchableOpacity
                            onPress={onPress}
                            style={styles.buttonContainer1}>
                            <Text>E-Commerce</Text>
                        </TouchableOpacity>
                    </div>

                    <div className="cursor-pointer w-28 transition duration-100 hover:bg-gray-100 rounded-full">
                        <TouchableOpacity
                            onPress={onPress}
                            style={styles.buttonContainer2}>
                            <Text>Swap</Text>
                        </TouchableOpacity>
                    </div>
                </View>


            </div>

            <div className="flex w-1/2 h-auto mr-10 my-10 ">
                <img
                    style={{width: 600, height: 400}}
                    src='/e-commerce.svg'

                />
            </div>
        </div>
    )
}

export default BodyTwo;

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