// Importujemy niezbędne moduły i komponenty
import React from "react"; // Importujemy bibliotekę React, która umożliwia tworzenie komponentów
import { NavigationContainer } from "@react-navigation/native"; // Importujemy kontener nawigacyjny, który zarządza stanem nawigacji
import { createNativeStackNavigator } from "@react-navigation/native-stack"; // Importujemy funkcję do tworzenia stosu nawigacyjnego
import HomeScreen from "./screens/HomeScreen"; // Importujemy komponent ekranu głównego
import DetailsScreen from "./screens/DetailsScreen"; // Importujemy komponent ekranu szczegółów
import { StyleSheet } from "react-native"; // Importujemy StyleSheet do definiowania stylów

// Tworzymy stos nawigacyjny (stack navigator)
const Stack = createNativeStackNavigator();

export default function App() {
  // Zwracamy główny komponent aplikacji, który zawiera kontener nawigacyjny i stos ekranów
  return (
    <NavigationContainer>
      {/* Definiujemy stos ekranów w aplikacji */}
      <Stack.Navigator initialRouteName="Home">
        {/* Definiujemy ekran główny, nazywając go "Home" */}
        <Stack.Screen name="Home" component={HomeScreen} />
        {/* Definiujemy ekran szczegółów, nazywając go "Details" */}
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Definiujemy style dla komponentów w aplikacji
const styles = StyleSheet.create({
  container: {
    // Flex 1 sprawia, że kontener zajmuje całą dostępną przestrzeń
    flex: 1,
    // Ustawia kolor tła kontenera na biały
    backgroundColor: "#fff",
    // Wyrównuje elementy wewnętrzne kontenera w poziomie do środka
    alignItems: "center",
    // Wyrównuje elementy wewnętrzne kontenera w pionie do środka
    justifyContent: "center",
  },
});
