import { StyleSheet, Text, View, useColorScheme } from "react-native";
import React from "react";
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";
import Colors from "@/constants/Colors";

const Charts = () => {
  const colors = useColorScheme();
  return (
    <ThemedView
      style={[
        styles.main,
        { backgroundColor: colors == "dark" ? Colors.dark : Colors.white },
      ]}
    >
      {}
    </ThemedView>
  );
};

export default Charts;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    height: "100%",
  },
});
