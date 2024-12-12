import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from "react-native";
import React, { useRef, useState } from "react";
import { ThemedView } from "./ThemedView";
import { TradeOptions } from "@/constants/Dummies";
import { ThemedText } from "./ThemedText";
import Colors from "@/constants/Colors";
import OpenOrders from "./OpenOrders";
import History from "./History";
import Transactions from "./Transactions";
import Positions from "./Positions";
import BottomSheet from "@gorhom/bottom-sheet";
import TradePanel from "./TradePanel";
import { onPressProps } from "@/typings";

const TradeBook = ({ onPress }: onPressProps) => {
  const colors = useColorScheme();
  const [indexNumber, setIndex] = useState(0);
  const [route, setRoute] = useState<
    "Open Orders" | "Positions" | "History" | "Transactions" | ""
  >("Open Orders");
  const bottomSheetRef = useRef<BottomSheet>(null);

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
      {route == "Open Orders" && <OpenOrders onPress={onPress} />}
      {route == "History" && <History onPress={onPress} />}
      {route == "Positions" && <Positions onPress={onPress} />}
      {route == "Transactions" && <Transactions onPress={onPress} />}
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
