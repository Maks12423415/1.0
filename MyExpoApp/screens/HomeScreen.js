import React from "react"; // Importuje bibliotekę React
import { Button, View, Text } from "react-native"; // Importuje komponenty z React Native

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Tic Tac Toe</Text>
      <Button
        title="Go to Game" // Tekst przycisku
        onPress={() => navigation.navigate("Game")} // Nawiguje do ekranu gry
      />
    </View>
  );
}
