import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from "react-native";
import React, { useState } from "react";
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";
import Colors from "@/constants/Colors";
import { TradingViews } from "@/constants/Dummies";
import { iconNames } from "../constants/Dummies";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Charts = () => {
  const colors = useColorScheme();
  const [activeIndex, setActiveIndex] = useState<null | number>(0);
  const [iconsActiveIndex, setIconsActiveIndex] = useState<null | number>(null);
  return (
    <ThemedView
      style={[
        styles.main,
        { backgroundColor: colors == "dark" ? Colors.dark : Colors.white },
      ]}
    >
      <ScrollView contentContainerStyle={styles.tradingView} horizontal>
        <>
          {TradingViews.map((item, index) => {
            const isActive = item.id - 1 === activeIndex;
            return (
              <TouchableOpacity
                style={styles.tradingView}
                onPress={() => {
                  setIconsActiveIndex(null);
                  setActiveIndex(index);
                }}
              >
                <ThemedView
                  style={[
                    styles.tradingView,
                    {
                      backgroundColor:
                        colors == "dark" ? Colors.dark : Colors.white,
                    },
                  ]}
                >
                  <View
                    style={[
                      styles.btnView,
                      { backgroundColor: isActive ? Colors.gray : undefined },
                    ]}
                  >
                    <ThemedText
                      style={{
                        color: colors == "dark" ? Colors.white : Colors.dark,
                      }}
                    >
                      {item.name}
                    </ThemedText>
                  </View>
                </ThemedView>
              </TouchableOpacity>
            );
          })}

          {iconNames.map((item, index) => {
            const isActive = item.id - 1 === iconsActiveIndex;
            return (
              <TouchableOpacity
                style={styles.tradingView}
                onPress={() => {
                  setActiveIndex(null), setIconsActiveIndex(index);
                }}
              >
                <ThemedView
                  style={[
                    styles.tradingView,
                    {
                      backgroundColor:
                        colors == "dark" ? Colors.dark : Colors.white,
                    },
                  ]}
                >
                  <View
                    style={[
                      styles.btnView,
                      { backgroundColor: isActive ? Colors.gray : undefined },
                    ]}
                  >
                    <MaterialCommunityIcons
                      name={item.icon}
                      size={20}
                      color={colors == "dark" ? Colors.white : Colors.black}
                    />
                  </View>
                </ThemedView>
              </TouchableOpacity>
            );
          })}
        </>
      </ScrollView>
    </ThemedView>
  );
};

export default Charts;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    height: "100%",
    marginTop: 30,
  },
  tradingView: {
    flex: 1,
    flexDirection: "row",
  },
  btnView: {
    width: 40,
    height: 40,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});
