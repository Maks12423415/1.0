import React from "react"; // Importujemy React do tworzenia komponentów
import { Button, View, Text } from "react-native"; // Importujemy komponenty z React Native

export default function HomeScreen({ navigation }) {
  // 'navigation' to obiekt przekazywany automatycznie przez nawigację, zawierający metody do nawigowania
  return (
    // Główna zawartość ekranu, z wyśrodkowanym tekstem i przyciskiem
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {/* Wyświetlamy tekst "Home Screen" */}
      <Text>Home Screen</Text>
      {/* Przycisk, który nawiguję do ekranu Details */}
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
}
