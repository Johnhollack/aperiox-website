import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity} from "react-native";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";



function ButtonDark({title, icon, subtitle}) {
    return (
        <TouchableOpacity
            style={styles.registerContainer}
        >
            <View style={styles.icon}>
                <FontAwesomeIcon icon={icon}  className="h-5 text-white"/>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text0}>{subtitle}</Text>
                <Text style={styles.text1}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ButtonDark;

const styles = StyleSheet.create({
    registerContainer: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'white',
        backgroundColor: 'transparent',
        width: 130,
        height: 40,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "flex-start",
        marginRight: 10,
    },
    icon: {
        marginLeft: 5,
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