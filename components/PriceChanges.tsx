import { StyleSheet, Text, View, useColorScheme } from "react-native";
import React from "react";
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";
import AntDesign from "@expo/vector-icons/AntDesign";
import Colors from "@/constants/Colors";

const PriceChanges = ({ change, high, low }: PriceChangesProp) => {
  const colors = useColorScheme();
  return (
    <ThemedView style={styles.main}>
      <ThemedView style={styles.container}>
        <ThemedView style={styles.row}>
          <AntDesign
            name="clockcircleo"
            size={15}
            color={colors == "dark" ? Colors.white : Colors.black}
          />
          <ThemedText style={{ marginLeft: 5 }}>24h change</ThemedText>
        </ThemedView>
        <Text
          style={[
            styles.change,
            {
              color: change.toString().includes("-")
                ? Colors.red
                : Colors.green,
            },
          ]}
        >
          {change}%
        </Text>
      </ThemedView>
      <ThemedView style={styles.container}>
        <ThemedView style={styles.row}>
          <AntDesign
            name="arrowup"
            size={15}
            color={colors == "dark" ? Colors.white : Colors.black}
          />
          <ThemedText style={{ marginLeft: 5 }}>24h high</ThemedText>
        </ThemedView>
        <Text
          style={[
            styles.change,
            {
              color: colors == "dark" ? Colors.white : Colors.dark,
            },
          ]}
        >
          {high}%
        </Text>
      </ThemedView>
      <ThemedView style={styles.container}>
        <ThemedView style={styles.row}>
          <AntDesign
            name="arrowdown"
            size={15}
            color={colors == "dark" ? Colors.white : Colors.black}
          />
          <ThemedText style={{ marginLeft: 5 }}>24h low</ThemedText>
        </ThemedView>
        <Text
          style={[
            styles.change,
            {
              color: colors == "dark" ? Colors.white : Colors.dark,
            },
          ]}
        >
          {low}
        </Text>
      </ThemedView>
    </ThemedView>
  );
};

export default PriceChanges;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "space-between",
  },
  row: {
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  change: {
    fontSize: 20,
  },
  container: {
    alignItems: "center",
  },
});
