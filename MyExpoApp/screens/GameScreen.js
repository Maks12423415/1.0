import React, { useState } from "react"; // Importuje React i hook useState
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"; // Importuje komponenty z React Native

export default function GameScreen() {
  const [board, setBoard] = useState(Array(9).fill(null)); // Inicjalizuje planszę 3x3
  const [currentPlayer, setCurrentPlayer] = useState("X"); // Ustawia aktualnego gracza na "X"

  const handlePress = (index) => {
    if (board[index]) return; // Ignoruje kliknięcia na zajęte pola
    const newBoard = [...board];
    newBoard[index] = currentPlayer; // Ustawia symbol gracza na planszy
    setBoard(newBoard); // Aktualizuje stan planszy
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X"); // Zmienia gracza
  };

  return (
    <View style={styles.container}>
      <Text>{`Current Player: ${currentPlayer}`}</Text>
      <View style={styles.board}>
        {board.map((cell, index) => (
          <TouchableOpacity
            key={index}
            style={styles.cell}
            onPress={() => handlePress(index)} // Obsługuje kliknięcia na planszy
          >
            <Text style={styles.cellText}>{cell}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  board: {
    width: 300,
    height: 300,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  cell: {
    width: "33.33%",
    height: "33.33%",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
  },
  cellText: {
    fontSize: 24,
  },
});
