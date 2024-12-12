import { StyleSheet, Text, View, useColorScheme } from "react-native";
import React from "react";
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";
import CustomButton from "./Button";
import Colors from "@/constants/Colors";
import { onPressProps } from "@/typings";

const History = ({ onPress }: onPressProps) => {
  const colors = useColorScheme();
  return (
    <ThemedView style={styles.main}>
      <ThemedText style={styles.header}>No History</ThemedText>
      <ThemedText style={styles.subHeader}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id pulvinar
        nullam sit imperdiet pulvinar.
      </ThemedText>
      <ThemedView style={styles.btnView}>
        <CustomButton
          onPress={onPress}
          btnColor={Colors.lemon}
          text="Buy"
          txtColor={colors == "dark" ? Colors.white : Colors.black}
        />
        <CustomButton
          onPress={onPress}
          btnColor={Colors.red}
          text="Sell"
          txtColor={colors == "dark" ? Colors.white : Colors.black}
        />
      </ThemedView>
    </ThemedView>
  );
};

export default History;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
  },
  subHeader: {
    marginTop: 20,
    fontSize: 16,
    flexWrap: "wrap",
    textAlign: "center",
    fontWeight: "200",
  },
  btnView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: "100%",
  },
});
