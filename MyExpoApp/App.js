import React from "react"; // Importuje bibliotekę React
import { NavigationContainer } from "@react-navigation/native"; // Importuje NavigationContainer z React Navigation
import { createNativeStackNavigator } from "@react-navigation/native-stack"; // Importuje funkcję do tworzenia stack navigatora
import HomeScreen from "./screens/HomeScreen"; // Importuje komponent HomeScreen
import DetailsScreen from "./screens/DetailsScreen"; // Importuje komponent DetailsScreen
import GameScreen from "./screens/GameScreen"; // Importuje komponent GameScreen

// Tworzy stack navigator
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />

        <Stack.Screen name="Game" component={GameScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
