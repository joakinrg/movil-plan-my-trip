import React from "react";
import { View, ImageBackground, StyleSheet } from "react-native";

const Image = require("../../assets/BackgroundTir.png");

const styles = StyleSheet.create({
    Form: {
        height: "90%",
        width:"90%",
    },
    imageBackground: {
        flex: 1,
        padding:10,
        justifyContent:"center"
    }
});

export default function Form({ children }) {
    return (
        <View style={styles.Form}>
            <ImageBackground source={Image} style={styles.imageBackground}>
                {children}
            </ImageBackground>
        </View>
    );
}
