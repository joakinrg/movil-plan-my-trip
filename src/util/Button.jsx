import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import Texto from "./Text";

const styles = StyleSheet.create({
    button:{
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        marginHorizontal:3
    },
    button1: {
        backgroundColor: "#8F87ED"
    },
    button2:{
        backgroundColor: "#8C152E"
    },
});

export default function Button({onPress, children , button1, button2}) {
    const buttonStyles = [
        styles.button,
        button1 && styles.button1,
        button2 && styles.button2,
    ];

    return (
        <TouchableOpacity style={buttonStyles} onPress={onPress}>
            <Texto type="title">{children}</Texto>
        </TouchableOpacity>
    );
}