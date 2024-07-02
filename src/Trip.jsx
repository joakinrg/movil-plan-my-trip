import React from "react";
import { ScrollView, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Button from "./util/Button";
import TopBar from "./util/TopBar";
import Card from "./util/Card";

const Trip = () =>{
    const navigation = useNavigation()
    return(
        <ScrollView style={{backgroundColor:"#1E1D31"}}>
            <TopBar>
                <Button button2 onPress={() => navigation.navigate("Main")}>Cerrar Sesión</Button>
            </TopBar>
            <View style={{padding:10}}>
                <Card title="title" date="dasa" dates="sadkfashadh" place="alsahdf"/>
            </View>
        </ScrollView>
    )
}

export default Trip;