import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import Texto from "./Text";

const styles = StyleSheet.create({
    input: {
        borderRadius: 10,
        padding: 10,
        marginBottom: 20,
        color: "#000",
        backgroundColor: "rgba(171, 171, 171, 0.5)",
        borderWidth: 0.5,
        width: '100%',
    },
});

const Input = ({ children, security, value, onChangeText }) => {
    return (
        <View>
            <Texto type="text" size="big">{children}</Texto>
            <TextInput 
                style={styles.input} 
                secureTextEntry={security} 
                value={value} 
                onChangeText={onChangeText}
            />
        </View>
    );
}

export default Input;
