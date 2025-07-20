import React from "react";
import { View, Text } from "react-native";
import { styleHeader } from "./style";

type HeaderProps = { 
  titulo: string; 
};

export default function Header({titulo}:HeaderProps) {
    return(
        <View style={styleHeader.container}>
            <Text style={styleHeader.titulo}> {titulo} </Text>
        </View>
    );
};
