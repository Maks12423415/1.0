import React from "react"; // Importuje bibliotekę React
import { View, Text, StyleSheet } from "react-native"; // Importuje komponenty z React Native oraz StyleSheet

export default function DetailsScreen() {
  // Komponent wyświetlający szczegóły
  return (
    <View>
      {/* Pierwszy kwadrat */}
      <View
        style={{
          width: 100, // Poprawiona literówka (było: widht)
          height: 100,
          backgroundColor: "blue",
          alignSelf: "flex-end", // Ustawia pozycję na prawo (React Native nie ma właściwości "float")
        }}
      />
      {/* Poprawienie zamknięcia tagu Text */}
      <Text
        style={{
          alignSelf: "flex-end",
          marginRight: 20,
        }}
      >
        asdad
      </Text>

      {/* Drugi kwadrat */}
      <View
        style={{
          width: 100, // Poprawiona literówka (było: widht)
          height: 100,
          backgroundColor: "lightblue", // Poprawiony kolor (było: lightBlue)
          alignSelf: "flex-end", // Ustawia pozycję na prawo (React Native nie ma właściwości "float")
        }}
      />
    </View>
  );
}

// Definiowanie stylów (na razie puste)
const styles = StyleSheet.create({});
