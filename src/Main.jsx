import React from "react";
import { ScrollView, View, StyleSheet, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Button from "./util/Button";
import TopBar from "./util/TopBar";
import Texto from "./util/Text";

const ImageFirst = require("../assets/BackgroundFirs.png");
const ImageSecond = require("../assets/BackgroundSecon.png");

const Main = () => {
    const navigation = useNavigation();
    return (
        <ScrollView style={{ backgroundColor: "#1E1D31" }}>
            <TopBar>
                <Button button1 onPress={() => navigation.navigate("Reg")}>
                    Registrarme
                </Button>
                <Button button1 onPress={() => navigation.navigate("Log")}>
                    Iniciar Sesión
                </Button>
            </TopBar>
            <ImageBackground source={ImageFirst} resizeMode="cover" style={styles.firstContainer}>
                <Texto size="extrabig">Bienvenido a MyTrip</Texto>
            </ImageBackground>
            <View style={styles.secondContainer}>
                <Texto size="big">MyTrip, ¿Qué es?</Texto>
                <View>
                    <Texto type="title">Aprende más</Texto>
                    <Button button1 onPress={() => navigation.navigate("Reg")}>
                        Registrarme
                    </Button>
                </View>
            </View>
            <View style={{ paddingHorizontal: 10, marginBottom: 10 }}>
                <Texto size="medium">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at magna odio. Sed mauris nisi, aliquam vel orci nec, rutrum ornare lectus. Morbi vitae dictum nibh. Etiam a vulputate eros, at facilisis erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at magna odio. Sed mauris nisi, aliquam vel orci nec, rutrum ornare lectus. Morbi vitae dictum nibh. Etiam a vulputate eros, at facilisis erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at magna odio. Sed mauris nisi, aliquam vel orci nec, rutrum ornare lectus. Morbi vitae dictum nibh. Etiam a vulputate eros, at facilisis erat.
                </Texto>
            </View>
            <View style={styles.thirdContainer}>
                <ImageBackground source={ImageSecond} resizeMode="cover" style={styles.imageBackground}>
                    <View style={styles.textContainer}>
                        <Texto type="text" size="extrasmall">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at magna odio. Sed mauris nisi, aliquam vel orci nec, rutrum ornare lectus. Morbi vitae dictum nibh. Etiam a vulputate eros, at facilisis erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at magna odio. Sed mauris nisi, aliquam vel orci nec, rutrum ornare lectus. Morbi vitae dictum nibh. Etiam a vulputate eros, at facilisis erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at magna odio. Sed mauris nisi, aliquam vel orci nec, rutrum ornare lectus. Morbi vitae dictum nibh. Etiam a vulputate eros, at facilisis erat.
                        </Texto>
                    </View>
                </ImageBackground>
                <View style={styles.textWrapper}>
                    <Texto type="title" size="big">¿Por qué escogernos?</Texto>
                </View>
            </View>
            <View style={{ padding: 10 }}>
                <Texto size="big">Desarrolladores</Texto>
                <Texto size="medium">Diseñador: Joaquín Rojas González</Texto>
                <Texto size="medium">Programador front-end: Joaquín Rojas González</Texto>
                <Texto size="medium">Programador back-end: Joaquín Rojas González</Texto>
                <Texto size="medium">Documentador: Joaquín Rojas González</Texto>
                <Texto size="medium">Becario: Joaquín Rojas González</Texto>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    firstContainer: {
        height: 500,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 10,
    },
    secondContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        marginBottom: 10,
        alignItems: "center",
    },
    thirdContainer: {
        margin: 10,
        flexDirection: "row",
        backgroundColor: "#2A2A2F",
        borderRadius: 10,
        overflow: "hidden"
    },
    imageBackground: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    textContainer: {
        width: "80%",
        padding: 10,
    },
    textWrapper: {
        alignItems: "center",
        justifyContent: "center",
        width: "40%",
    },
});

export default Main;