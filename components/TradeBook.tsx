import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from "react-native";
import React, { useState } from "react";
import { ThemedView } from "./ThemedView";
import { TradeOptions } from "@/constants/Dummies";
import { ThemedText } from "./ThemedText";
import Colors from "@/constants/Colors";

const TradeBook = () => {
  const colors = useColorScheme();
  const [indexNumber, setIndex] = useState(0);
  const [showOrders, setShowOrders] = useState(true);
  const [showPositions, setShowPositions] = useState(false);
  const [showTradeHistory, setShowTradeHistory] = useState(false);
  const [showTransactions, setShowTransactions] = useState(false);
  return (
    <ThemedView style={styles.main}>
      <ScrollView
        style={styles.options}
        contentContainerStyle={{
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: "row",
          backgroundColor: colors == "dark" ? Colors.dark : Colors.white,
        }}
      >
        {TradeOptions.map((options, index) => {
          const isActive = indexNumber == options.id;
          return (
            <TouchableOpacity onPress={() => setIndex(index)}>
              <ThemedText style={{ fontWeight: isActive ? "bold" : "400" }}>
                {options.name}
              </ThemedText>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </ThemedView>
  );
};

export default TradeBook;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    marginTop: 30,
  },
  options: {
    width: "100%",
  },
});
