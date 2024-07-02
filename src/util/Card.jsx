import React from "react";
import { View, StyleSheet } from "react-native";
import Texto from "./Text";

const styles = StyleSheet.create({
    Card: {
        backgroundColor:"#2A2A2F",
        padding: 15,
        borderRadius: 10
    },
});

export default function Card({ title, date, dates, place }) {
    return (
        <View style={styles.Card}>
            <Texto size="big">{title}</Texto>
            <View style={{margin:2.5}}/>
            <Texto size="medium">{date}</Texto>
            <View style={{margin:2.5}}/>
            <Texto size="medium">{dates}</Texto>
            <View style={{margin:2.5}}/>
            <Texto size="medium">{place}</Texto>
        </View>
    );
}
