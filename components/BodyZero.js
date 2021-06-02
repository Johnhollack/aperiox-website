import React, {useState} from 'react'
import {StyleSheet, View, TextInput} from "react-native";
import ButtonYellow from "./ButtonYellow";
import ButtonDark from "./ButtonDark";
import {faApple, faGooglePlay, faTelegram} from "@fortawesome/free-brands-svg-icons";
import {useRouter} from "next/router";
import Link from "next/link";



function BodyZero() {
    const router =useRouter();
    const [message, setMessage] = useState('');

    const onPress = () => {

    };


    return (
        <div className="flex flex-col h-auto w-screen md:w-3/5 lg:w-1/2 mt-32">

            <div className="ml-10 ">
                <View className=" ">
                    <p className="font-semibold mt-3 text-sm text-gray-300">Welcome to</p>
                    <p className="font-extrabold text-3xl md:text-5xl">Apeirox</p>
                    <p className="font-semibold mt-3 text-xs md:text-normal text-gray-400 w-5/6">
                        Apeirox is a trust-less, flexibly safe e-commerce platform that introduce
                        blockchain benefits to commerce and link local suppliers to both local and foreign markets, with the aim of reducing
                        financial disparities and improving product accessibility. Our suite of products include
                        e-Commerce, DEX swaps, P2P and e-Wallets.
                    </p>
                </View>

                <div className="flex flex-col md:flex-row h-auto mt-5 md:mt-10">
                    <div className="w-4/5 md:w-80 bg-white mr-3 rounded mb-3 md:mb-0" >
                        <TextInput
                            placeholder={'Email Address'}
                            style={styles.textInput}
                            value={message}
                            onChangeText={setMessage}
                        />
                    </div>
                    <ButtonYellow title="Register Now" onClick={() => router.push(`/`)}/>
                </div>

                <div className="flex md:flex-row mt-10 mb-16 ">
                    <div className="flex flex-col md:flex-row ">
                        <Link href={'/'}>
                            <a
                                target="_blank" rel="noopener noreferrer"
                                className="cursor-pointer ">
                                <ButtonDark subtitle="GET IT ON" title="Google PlayStore" icon={faGooglePlay}/>
                            </a>
                        </Link>
                        <Link href={'/'}>
                            <a
                                target="_blank" rel="noopener noreferrer"
                                className="cursor-pointer mt-2 md:mt-0">
                                <ButtonDark subtitle="DOWNLOAD ON" title="App Store" icon={faApple} />
                            </a>
                        </Link>
                    </div>

                    <Link href={'https://t.me/aperioxcom'}>
                        <a
                            target="_blank" rel="noopener noreferrer"
                            className="cursor-pointer ">
                            <ButtonDark subtitle="JOIN OUR" title="Community" icon={faTelegram}/>
                        </a>
                    </Link>

                </div>
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
        height: 40,
        color: 'black',
        paddingHorizontal: 10,
        fontSize: 14,
        fontWeight: 'normal',
        //marginBottom: 5,
    },
    downloadContainer: {
        flexDirection: 'row',
        marginTop: 40,
        width: 600,
    },
});