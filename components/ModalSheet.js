import {
    FlatList,
    Image,
    ImageBackground,
    Modal,
    SafeAreaView, StyleSheet,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View
} from "react-native";
import {windowWidth, windowHeight} from "../utils/Dimentions";
import React from "react";



const ModalSheet = (props) => {


    const onClick = () => {

    };

    const {modalVisible, setModalVisible, } = props;

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
                    <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'flex-end' }}>
                        <View
                            style={{

                            }}
                        >
                            <View
                                style={{
                                    justifyContent: 'flex-start',
                                    backgroundColor: 'white',
                                    height: 300,
                                    width: 600,
                                    padding: 50,

                                }}
                            >
                                <Text>Come and Buy </Text>
                                <Text>Come and Buy </Text>
                                <Text>Come and Buy </Text>
                                <Text>Come and Buy </Text>
                            </View>
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
    },
    text: {
        fontSize: 14,
        fontWeight: '500',
        color: 'black',

    },
});