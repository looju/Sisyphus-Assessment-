import { SafeAreaView, StyleSheet, Text, View, useColorScheme } from "react-native";
import React from "react";
import CustomHeader from "@/components/CustomHeader";
import { ThemedView } from "@/components/ThemedView";

const MainScreen = () => {
    const colors=useColorScheme()
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor:colors=="dark"? }}>
      <ThemedView style={styles.main}>
        <CustomHeader />
      </ThemedView>
    </SafeAreaView>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#ff0000",
  },
});
