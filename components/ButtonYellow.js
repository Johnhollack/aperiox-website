import React from 'react'
import {StyleSheet, Text, TouchableOpacity} from "react-native";


function ButtonYellow({title, onClick}) {
    return (
        <button
            onClick={onClick}
            className="cursor-pointer w-28 h-10 bg-yellow-500 justify-center items-center transition duration-100 hover:bg-yellow-400 active:bg-yellow-400 rounded"
        >
            <p className="font-semibold text-sm text-black">{title}</p>
        </button>
    )
}

export default ButtonYellow;

const styles = StyleSheet.create({
    registerContainer: {
        backgroundColor: '#fcb316',
        width: 120,
        height: 40,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
    },
    registerText: {
        fontSize: 14,
        fontWeight: 600,
        color: 'black'
    },
});