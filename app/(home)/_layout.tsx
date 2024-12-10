import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import CustomHeader from "@/components/CustomHeader";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerShown: true,
            title: "home",
            header: () => <CustomHeader />,
          }}
        />
      </Stack>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({});
