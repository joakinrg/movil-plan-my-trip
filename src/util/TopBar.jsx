import React from "react";
import { StyleSheet, View } from "react-native";
import Button from "./Button";
import Constants from "expo-constants";
import Texto from "./Text";

const styles = StyleSheet.create({
    container:{
        paddingTop:Constants.statusBarHeight,
        padding:10,
        backgroundColor:"#383441",
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    row:{
        flexDirection: 'row',
        justifyContent:'flex-start'
    }
});

export default function TopBar({children}) {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Texto>Viajes</Texto>
                <View style={{marginHorizontal:5}}/>
                <Texto>Dashboard</Texto>
            </View>
            <View style={styles.row}>
                {children}
            </View>
        </View>
    );
}