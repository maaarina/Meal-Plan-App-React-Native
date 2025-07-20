import { Tabs } from 'expo-router';

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{ title: 'Início' }} //nome no tab
      />
      <Tabs.Screen
        name="shoppingList"
        options={{ title: 'Shopping List ' }} //nome no tab
      />
    </Tabs>
  );
}
