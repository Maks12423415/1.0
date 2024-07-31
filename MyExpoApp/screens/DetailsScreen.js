import React from "react"; // Importujemy React
import { View, Text, Button } from "react-native"; // Importujemy komponenty z React Native

export default function DetailsScreen() {
  // Komponent wyświetlający szczegóły
  return (
    // Główna zawartość ekranu, z wyśrodkowanym tekstem
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {/* Wyświetlamy tekst "Details Screen" */}
      <Text>Details Screen</Text>
    </View>
  );
}
