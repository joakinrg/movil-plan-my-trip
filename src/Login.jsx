import React from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Button from "./util/Button";
import TopBar from "./util/TopBar";
import Form from "./util/Form";
import Input from "./util/Input";

const Registre = () =>{
    const navigation = useNavigation()
    return(
        <View style={{backgroundColor:"#1E1D31", height:"100%"}}>
            <TopBar>
                <Button button1 onPress={() => navigation.navigate("Reg")}>Registrarme</Button>
                <Button button1 onPress={() => navigation.navigate("Log")}>Iniciar Sesión</Button>
            </TopBar>
            <View style={{padding:20, alignItems:"center", justifyContent: "center"}}>
                <Form>
                    <Input>Correo</Input>
                    <Input>Contraseña</Input>
                    <Button button1 onPress={() => navigation.navigate("Trip")}>Iniciar Sesión</Button>
                    <View style={{margin:10}}/>
                    <Button onPress={() => navigation.navigate("Reg")}>Registrarme</Button>
                </Form>
            </View>
        </View>
    )
}

export default Registre;