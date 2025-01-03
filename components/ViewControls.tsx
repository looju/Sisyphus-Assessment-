import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from "react-native";
import React, { useState } from "react";
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";
import { controlViews } from "@/constants/Dummies";
import Colors from "@/constants/Colors";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useCoinStore } from "@/Store/useCoinSelection";
import Ohlc from "./Ohlc";

const ViewControls = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const colors = useColorScheme();

  return (
    <>
      <ThemedView
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          width: "70%",
          height: "5%",
          top: 15,
          marginBottom: 10,
        }}
      >
        {controlViews.map((item, index) => {
          const isActive = item.id === activeIndex;
          return (
            <TouchableOpacity key={item.id}>
              <View
                style={{
                  backgroundColor: isActive ? Colors.blue : undefined,
                  width: 120,
                  height: 30,
                  alignItems: "center",
                  borderRadius: 10,
                }}
              >
                <ThemedText
                  onPress={() => setActiveIndex(index)}
                  style={{
                    color: isActive
                      ? Colors.white
                      : colors == "dark"
                      ? Colors.white
                      : Colors.black,
                  }}
                >
                  {item.name}
                </ThemedText>
              </View>
            </TouchableOpacity>
          );
        })}
        <FontAwesome
          name="expand"
          size={24}
          color={colors == "dark" ? Colors.white : Colors.black}
        />
      </ThemedView>
      <Ohlc />
    </>
  );
};

export default ViewControls;

const styles = StyleSheet.create({});
