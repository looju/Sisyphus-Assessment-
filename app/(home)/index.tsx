import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from "react-native";
import React, { useEffect, useState } from "react";
import CustomHeader from "@/components/CustomHeader";
import { ThemedView } from "@/components/ThemedView";
import Colors from "@/constants/Colors";
import axios from "axios";
import { Base_url } from "@/constants/BaseUrl";

const MainScreen = () => {
  const colors = useColorScheme();
  const [coinData, setCoinData] = useState();
  const [coinName, setCoinName] = useState("btc-bitcoin");

  useEffect(() => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios.get(`${Base_url}/tickers/${coinName}`, config).then((response) => {
      console.log(response.data);
      setCoinData(response.data);
    });
  });
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors == "dark" ? Colors.dark : Colors.white,
      }}
    >
      <ThemedView>
        <CustomHeader />
      </ThemedView>
    </SafeAreaView>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});
