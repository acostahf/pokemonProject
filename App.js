import React from "react";
import { StyleSheet } from "react-native";
import { Appbar, Provider as PaperProvider } from "react-native-paper";
import { Button, Title, Paragraph } from "react-native-paper";
import Pokecard from "./Components/Pokecard";
import theme from "./CustomProperties/Theme";

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <Appbar>
        <Appbar.Content title="Pokemon Portfolio" />
      </Appbar>

      <Pokecard styles={styles.container} />
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
    alignItems: "center",
    justifyContent: "start",
    width: "100px",
    height: "100px",
  },
  heading: {
    justifyContent: "center",
    fontSize: "28px",
    color: "blue",
  },
});
