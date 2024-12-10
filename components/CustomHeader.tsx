import {
  StyleSheet,
  Text,
  View,
  useColorScheme,
  Image,
  SafeAreaView,
} from "react-native";
import React from "react";
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";

const CustomHeader = () => {
  return (
    <View style={styles.main}>
      <Text style={{ color: "#fff" }}>hiii</Text>
      <Text style={{ color: "#fff" }}>hiii</Text>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    height: 40,
  },
  menu: {
    flexDirection: "row",
  },
  img: {
    height: 20,
    width: 30,
  },
});
