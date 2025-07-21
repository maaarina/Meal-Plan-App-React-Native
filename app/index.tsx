import React from 'react';
import { View, Text, ScrollView, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './style';
import Header from '../src/components/header/';
import MealCards from '../src/components/mealCards/';

export default function Index() {
    const items = [
    { id: 1, weekday: 'Segunda' },
    { id: 2, weekday: 'Terça' },
    { id: 3, weekday: 'Quarta' },
    { id: 4, weekday: 'Quinta' },
    { id: 5, weekday: 'Sexta' },
    { id: 6, weekday: 'Sábado' },
    { id: 7, weekday: 'Domingo' },
  ];

  return (
     <SafeAreaView style={{ flex: 1 }} >
      <ScrollView >
        <Header titulo="Meal Plan" />
        <View style={styles.container}>
          {items.map((item) => (
            <View key={item.id}>
              <Text style={styles.dayTitle}> {item.weekday} </Text>
              <MealCards mealType="Café da Manhã" />
              <MealCards mealType="Almoço" />
              <MealCards mealType="Jantar" />
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
