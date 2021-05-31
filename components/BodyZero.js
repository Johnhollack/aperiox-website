import React, {useState} from 'react'
import {StyleSheet, Text, View, Image, TouchableOpacity, TextInput} from "react-native";
import {windowWidth, windowHeight} from "../utils/Dimentions";
import ModalSheet from "./ModalSheet";
import ButtonYellow from "./ButtonYellow";
import ButtonDark from "./ButtonDark";
import {faApple, faGooglePlay, faTelegram} from "@fortawesome/free-brands-svg-icons";



function BodyZero() {

    const [message, setMessage] = useState('');

    const onPress = () => {

    };


    return (
        <div className="flex h-auto mt-20">

            <div className="ml-10 ">
                <View style={styles.textTitleContainer}>
                    <Text style={styles.textTitle}>Buy, Sell and Trade Commodities in Minutes</Text>
                    <Text style={styles.textSubtitle}>Get Started with as little as 500NGN</Text>
                </View>

                <View style={styles.inputContainer}>
                    <View style={styles.emailContainer} >
                        <TextInput
                            placeholder={'Email Address'}
                            style={styles.textInput}
                            value={message}
                            onChangeText={setMessage}
                        />
                    </View>
                    <ButtonYellow title="Register Now"/>
                </View>

                <View style={styles.downloadContainer}>
                    <ButtonDark subtitle="GET IT ON" title="Google PlayStore" icon={faGooglePlay} onPress={onPress}/>
                    <ButtonDark subtitle="DOWNLOAD ON" title="App Store" icon={faApple} onPress={onPress}/>
                    <ButtonDark subtitle="JOIN OUR" title="Community" icon={faTelegram} onPress={onPress}/>
                </View>
            </div>



        </div>
    )
}

export default BodyZero;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    text: {
        fontSize: 16,
    },
    textTitleContainer: {
        width: 500,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginTop: 100,
    },
    textTitle: {
        fontSize: 34,
        fontWeight: 'bold',
        color: 'whitesmoke',
        lineHeight: 50,
    },
    textSubtitle: {
        fontSize: 16,
        fontWeight: 600,
        lineHeight: 22,
        color: '#969494',
        paddingTop: 10,
    },
    inputContainer: {
        flexDirection: 'row',
        marginTop: 40,
    },
    emailContainer: {
        backgroundColor: 'white',
        width: 300,
        height: 40,
        borderRadius: 5,
        alignItems: "baseline",
        marginRight: 20,
    },
    textInput: {
        width: '100%',
        height: '100%',
        color: 'black',
        paddingHorizontal: 10,
        fontSize: 14,
        fontWeight: 'normal',
    },
    downloadContainer: {
        flexDirection: 'row',
        marginTop: 40,
        width: 600,
    },
});