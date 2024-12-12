import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ThemedView } from "./ThemedView";
import Colors from "@/constants/Colors";
import { useCoinStore } from "@/Store/useCoinSelection";
import { ThemedText } from "./ThemedText";

const Ohlc = () => {
  const prices = useCoinStore((state) => state.prices);
  const coinName = useCoinStore((state) => state.coin);
  const formatter = new Intl.NumberFormat("en-US");
  return prices.length !== 0 ? (
    <ThemedView style={styles.main}>
      <ThemedView style={styles.row}>
        <ThemedText style={styles.coin}>
          {coinName.toLocaleUpperCase().slice(0, 3)}
        </ThemedText>
        <ThemedText>O </ThemedText>
        <ThemedText style={styles.text}>
          {formatter.format(prices[0].open)}
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.row}>
        <ThemedText>H </ThemedText>
        <ThemedText style={styles.text}>
          {formatter.format(prices[0].high)}
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.row}>
        <ThemedText>L </ThemedText>
        <ThemedText style={styles.text}>
          {formatter.format(prices[0].low)}
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.row}>
        <ThemedText>C </ThemedText>
        <ThemedText style={styles.text}>
          {formatter.format(prices[0].close)}
        </ThemedText>
      </ThemedView>
    </ThemedView>
  ) : null;
};

export default Ohlc;

const styles = StyleSheet.create({
  main: {
    top: "7%",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  text: {
    color: Colors.green,
    fontSize: 12,
  },
  coin: {
    marginRight: 10,
  },
  row: {
    flexDirection: "row",
  },
});
