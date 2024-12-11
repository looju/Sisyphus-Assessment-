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
import OpenOrders from "./OpenOrders";
import History from "./History";
import Transactions from "./Transactions";
import Positions from "./Positions";

const TradeBook = () => {
  const colors = useColorScheme();
  const [indexNumber, setIndex] = useState(0);
  const [route, setRoute] = useState<
    "Open Orders" | "Positions" | "History" | "Transactions" | ""
  >("Open Orders");

  const displaySelectedRoute = () => {
    console.log(route);
    switch (route) {
      case "Open Orders":
        return <OpenOrders />;
      case "Positions":
        return <OpenOrders />;
      case "History":
        return <OpenOrders />;
      case "Transactions":
        return <OpenOrders />;
      default:
        return <OpenOrders />;
    }
  };
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
            <TouchableOpacity
              onPress={() => {
                setIndex(index), setRoute(options.name);
              }}
            >
              <ThemedText style={{ fontWeight: isActive ? "bold" : "400" }}>
                {options.name}
              </ThemedText>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      {route == "Open Orders" && <OpenOrders />}
      {route == "History" && <History />}
      {route == "Positions" && <Positions />}
      {route == "Transactions" && <Transactions />}
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
