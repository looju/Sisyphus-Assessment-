import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ListRenderItem,
  useColorScheme,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { MaterialTabBar, Tabs } from "react-native-collapsible-tab-view";
import { ThemedView } from "./ThemedView";
import Colors from "@/constants/Colors";
import Charts from "./Charts";
import { ThemedText } from "./ThemedText";
import OrderBook from "./OrderBook";

const HEADER_HEIGHT = 250;

const DATA = [0, 1, 2, 3, 4];
const identity = (v: unknown): string => v + "";

const Header = () => {
  return <View style={styles.header} />;
};

const CollapsibeTabs: React.FC = () => {
  const colors = useColorScheme();
  const [chartsVisible, setChartsVisible] = useState(true);
  const [orderBookVisible, setOrderBookVisible] = useState(false);
  const [tradeVisible, setTradeVisible] = useState(false);
  const renderItem: ListRenderItem<number> = React.useCallback(({ index }) => {
    return (
      <View style={[styles.box, index % 2 === 0 ? styles.boxB : styles.boxA]} />
    );
  }, []);

  const openCharts = () => {
    setChartsVisible(true);
    setOrderBookVisible(false);
    setTradeVisible(false);
  };
  const openOrderBook = () => {
    setOrderBookVisible(true);
    setChartsVisible(false);
    setTradeVisible(false);
  };
  const openTrade = () => {
    setTradeVisible(true);
    setChartsVisible(false);
    setOrderBookVisible(false);
  };

  return (
    <>
      <ThemedView
        style={[
          styles.row,
          { backgroundColor: colors == "dark" ? Colors.dark : Colors.white },
        ]}
      >
        <TouchableOpacity onPress={openCharts}>
          <ThemedText style={styles.name}>Charts</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity onPress={openOrderBook}>
          <ThemedText style={styles.name}>Orderbook</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity onPress={openTrade}>
          <ThemedText style={styles.name}>Recent Trades</ThemedText>
        </TouchableOpacity>
      </ThemedView>
      {chartsVisible && <Charts />}
      {orderBookVisible && <OrderBook />}
    </>
  );
};

const styles = StyleSheet.create({
  main: {},
  box: {
    height: 250,
  },
  boxA: {
    backgroundColor: "white",
  },
  boxB: {
    backgroundColor: "#D8D8D8",
  },
  header: {
    height: 40,
    width: "100%",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    flex: 0,
    marginTop: 50,
  },
  name: {
    fontSize: 16,
  },
});

export default CollapsibeTabs;
