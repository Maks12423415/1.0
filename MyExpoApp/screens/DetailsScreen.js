import React from "react"; // Importuje React
import { View, Text, Button } from "react-native"; // Importuje komponenty z React Native
import { StyleSheet } from "react-native"; // Importuje StyleSheet z React Native

export default function DetailsScreen() {
  // Komponent wyświetlający szczegóły
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={styles.BlueText}>Details Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  BlueText: {
    color: "blue",
    fontSize: 50,
  },
});
