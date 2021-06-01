import {
    Modal,
    SafeAreaView, StyleSheet,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View
} from "react-native";
import {windowHeight, windowWidth} from "../utils/Dimentions";
import React from "react";
import {useRouter} from "next/router";
import {faXRay, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import MenuButton from "./MenuButton";





const ModalSheet = (props) => {

    const router =useRouter();

    const onClick = () => {

    };

    const {modalVisible, setModalVisible, onClose, button1, button2, button3, button4, button5, button6, button7, button8, button9, button10, button11 } = props;

    return (
        <SafeAreaView>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(setModalVisible);
                }}
            >
                <TouchableWithoutFeedback
                    onPress={() => setModalVisible(false)}
                >
                    <View style={{
                        height: windowHeight,
                        width: windowWidth,
                        justifyContent: 'flex-start',
                        alignItems: 'flex-end',
                    }}>
                        <View
                            style={{
                                //alignItems: 'center',
                                justifyContent: 'flex-start',
                                backgroundColor: 'whitesmoke',
                                height: windowHeight,
                                width: windowWidth/2,
                                padding: 20,
                                shadowOffset: { width: 0, height: 1 },
                                shadowOpacity: 0.8,
                                shadowRadius: 3,
                                elevation: 3,
                            }}
                        >
                            <MenuButton
                                onClick={onClose}
                                icon={faChevronDown}
                                className="cursor-pointer hover:text-gray-900 h-5 text-black lg:w-0 lg:h-0 lg:opacity-0 px-5 lg:px-0"
                            />

                            <button onClick={() => router.push(`/`)} className="h-8 my-3 cursor-pointer hover:text-gray-900">
                                <p className="text-black font-semibold text-left capitalize  ">{button1}</p>
                            </button>
                            <button onClick={() => router.push(`/airdrop`)} className="h-8 my-3 cursor-pointer hover:text-gray-900">
                                <p className="text-black font-semibold text-left capitalize ">{button2}</p>
                            </button>
                            <button onClick={() => router.push(`/bounty`)} className="h-8 my-3 cursor-pointer hover:text-gray-900">
                                <p className="text-black font-semibold text-left capitalize ">{button3}</p>
                            </button>
                            <button onClick={() => router.push(`/whitepaper`)} className="h-8 my-3 cursor-pointer hover:text-gray-900">
                                <p className="text-black font-semibold text-left capitalize ">{button4}</p>
                            </button>
                            <button onClick={() => router.push(`/exchanges`)} className="h-8 my-3 cursor-pointer hover:text-gray-900">
                                <p className="text-black font-semibold text-left capitalize ">{button5}</p>
                            </button>
                            <button onClick={() => router.push(`/forum`)} className="h-8 my-3 cursor-pointer hover:text-gray-900">
                                <p className="text-black font-semibold text-left capitalize ">{button6}</p>
                            </button>
                            <button onClick={() => router.push(`/roadmap`)} className="h-8 my-3  cursor-pointer hover:text-gray-900">
                                <p className="text-black font-semibold text-left capitalize ">{button7}</p>
                            </button>
                            <button onClick={() => router.push(`/product`)} className="h-8 my-3 cursor-pointer hover:text-gray-900">
                                <p className="text-black font-semibold text-left capitalize ">{button8}</p>
                            </button>
                            <button onClick={() => router.push(`/partners`)} className="h-8 my-3 cursor-pointer hover:text-gray-900">
                                <p className="text-black font-semibold text-left capitalize ">{button9}</p>
                            </button>
                            <button onClick={() => router.push(`/tokenomics`)} className="h-8 my-3 cursor-pointer hover:text-gray-900">
                                <p className="text-black font-semibold text-left capitalize ">{button10}</p>
                            </button>
                            <button onClick={() => router.push(`/about`)} className="h-8 my-3 cursor-pointer hover:text-gray-900">
                                <p className="text-black font-semibold text-left capitalize ">{button11}</p>
                            </button>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        </SafeAreaView>

    );
};

export default ModalSheet;


const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: '100%',
        height: 40,
        // backgroundColor: '#2f95dc',
        //padding: 15,
    },
    text: {
        fontSize: 14,
        fontWeight: '500',
        color: 'black',

    },
});