// Importujemy komponent StatusBar z expo-status-bar oraz komponenty StyleSheet, Text i View z react-native
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

// Funkcja App to główny komponent aplikacji, który zostanie wyrenderowany
export default function App() {
  return (
    // Komponent View działa jako kontener dla innych komponentów
    // Przypisujemy mu styl zdefiniowany w obiekcie styles
    <View style={styles.container}>
      {/* Komponent Text wyświetla tekst na ekranie */}
      <Text>Open up App.js to start working on your app!</Text>
      {/* Komponent StatusBar pozwala zarządzać paskiem stanu (status bar) */}
      {/* style="auto" oznacza, że pasek stanu dostosuje się automatycznie do tła */}
      <StatusBar style="auto" />
    </View>
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
