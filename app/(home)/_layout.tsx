import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerShown: false, header: () => <CustomHeader /> }}
      />
    </Stack>
  );
}

const styles = StyleSheet.create({});
