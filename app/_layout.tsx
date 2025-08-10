import { Tabs, } from 'expo-router'; //Importa o componente Tabs do expo-router
import { Ionicons } from '@expo/vector-icons'; //Importa os ícones da biblioteca Ionicons.

export default function Layout() {

  return (
    <Tabs
      screenOptions={({ route }) => ({ // Define opções visuais e funcionais das abas com base na rota (ou seja, na tela que está sendo renderizada). a função recebe um objeto que contém o nome autal da tela
        tabBarIcon: ({ color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap = 'help-circle'; // Cria a variável iconName, que define o nome do ícone a ser exibido. "keyof typeof Ionicons.glyphMap" garante que seja um nome válido de ícone do Ionicons.

          if (route.name === 'index') {
            iconName = 'home'; //nome do icone
          } else if (route.name === 'shoppingList') {
            iconName = 'cart';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#ffffff',
        tabBarInactiveTintColor: '#000',
        tabBarStyle: {
          backgroundColor: '#E37100',
          height: 100,
        },
      })}
    >
      <Tabs.Screen //cria uma aba no tab bottom 
        name="index"
        options={{ title: 'Início', headerShown: false, }}
      />
      <Tabs.Screen
        name="shoppingList"
        options={{ title: 'Shopping List', headerShown: false }}
      />
    </Tabs>

  );
}
