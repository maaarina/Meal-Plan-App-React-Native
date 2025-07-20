import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { mealStyle } from "../mealCards/style"

interface Props {
  mealType: string;
};

export default function MealCards({ mealType }:Props) {
    return(
        <View style={mealStyle.card}>

            <Text style={mealStyle.text}> {mealType} </Text>

            <TouchableOpacity>
                <Text style={mealStyle.add}> + Adicionar {mealType} </Text>
            </TouchableOpacity>
        </View>
    );
};
