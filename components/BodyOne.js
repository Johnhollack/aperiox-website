import React, {useState} from 'react'
import {StyleSheet, Text, View, Image, TouchableOpacity} from "react-native";
import {windowWidth, windowHeight} from "../utils/Dimentions";
import ModalSheet from "./ModalSheet";



function BodyOne() {

    const [modalVisible, setModalVisible] = useState(true);

    const onPress = () => {
    };



    return (
        <View style={styles.container}>

            <div className=" flex flex-row">
                <div className="w-1/2">
                    <View style={styles.topContainer}>
                        <Text style={styles.textTitle}>Start buying with crypto</Text>
                    </View>

                    <View style={styles.navigationContainer}>
                        <div className=" ">
                            <TouchableOpacity
                                onPress={onPress}
                                style={styles.buttonContainer1}>
                                <Text>Peer to Peer Trading</Text>
                            </TouchableOpacity>
                        </div>

                        <div className="cursor-pointer w-28 transition duration-100 hover:bg-gray-300 rounded-full">
                            <TouchableOpacity
                                onPress={onPress}
                                style={styles.buttonContainer2}>
                                <Text>Buy Crypto</Text>
                            </TouchableOpacity>
                        </div>

                        <div className="cursor-pointer w-28 transition duration-100 hover:bg-gray-300 rounded-full">
                            <TouchableOpacity
                                onPress={onPress}
                                style={styles.buttonContainer2}>
                                <Text>Fiat Deposit</Text>
                            </TouchableOpacity>
                        </div >
                    </View>

                    <ModalSheet
                        modalVisible={modalVisible}
                        setModalVisible={setModalVisible}

                    />
                </div>

                <div className="flex w-1/2 mt-10">
                    <Image
                        style={{width: 600, height: 400}}
                        source={require('../public/gifmock.gif')}

                    />
                </div>
            </div>



        </View>
    )
}

export default BodyOne;

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