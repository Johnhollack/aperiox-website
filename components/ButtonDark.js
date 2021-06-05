import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity} from "react-native";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";



function ButtonDark({title, icon, subtitle}) {
    return (
        <TouchableOpacity
            style={styles.downloadContainer}
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
    downloadContainer: {
        flexDirection: 'row',
        borderWidth: 1.5,
        borderColor: '#fff',
        backgroundColor: '#2f95dc',
        width: 135,
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
        fontSize: 9,
        fontWeight: 400,
        color: '#fff'
    },
    text1: {
        fontSize: 12,
        fontWeight: 600,
        color: '#fff'
    },
});