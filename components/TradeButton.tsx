import { BtnProps } from "@/typings";
import * as React from "react";
import { Button } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "@/constants/Colors";
import { TouchableOpacity } from "react-native";
import { ThemedText } from "./ThemedText";

const TradeButton = ({
  onPress,
  styles,
  btnColor,
  txtColor,
  text,
  gradient,
}: BtnProps) => (
  <TouchableOpacity
    onPress={onPress}
    style={[{ width: "100%", height: 50, borderRadius: 20 }, styles]}
  >
    <LinearGradient
      colors={[Colors.skyBlue, Colors.lightRed]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={{
        borderRadius: 20,
        overflow: "hidden",
        height: 50,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ThemedText style={{ fontSize: 20, fontWeight: "bold" }}>
        {text}
      </ThemedText>
    </LinearGradient>
  </TouchableOpacity>
);

export default TradeButton;
