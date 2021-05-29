import React from 'react'
import {StyleSheet, Text, TouchableOpacity} from "react-native";



function ButtonYellow({title}) {
    return (
        <TouchableOpacity
            style={styles.registerContainer}
        >
            <Text style={styles.registerText}>{title}</Text>
        </TouchableOpacity>
    )
}

export default ButtonYellow;

const styles = StyleSheet.create({
    registerContainer: {
        backgroundColor: '#fcb316',
        width: 120,
        height: 40,
        borderRadius: 5,
        marginLeft: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    registerText: {
        fontSize: 14,
        fontWeight: 600,
        color: 'black'
    },
});