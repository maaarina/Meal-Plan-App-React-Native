import { View, ScrollView, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './style';
import Header from '../src/components/header/';

export default function ShoppingList() {
  return (
    <SafeAreaView style={{ flex: 1 }} >
      <ScrollView >
        <Header titulo="Shopping List" />
        <View style={styles.container}>
          
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
