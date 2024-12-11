import React, { useCallback, useMemo, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  useColorScheme,
  TouchableOpacity,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet, {
  BottomSheetScrollView,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { RefProps } from "@/typings";
import Colors from "@/constants/Colors";
import { ThemedView } from "./ThemedView";
import { exchanges } from "@/constants/Dummies";
import { ThemedText } from "./ThemedText";

const TradePanel = ({ refProp }: RefProps) => {
  const colors = useColorScheme();
  const [activeIndex, setActiveIndex] = useState(0);
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  return (
    <BottomSheet
      ref={refProp}
      onChange={handleSheetChanges}
      index={-1}
      snapPoints={["100%"]}
      enablePanDownToClose
      handleIndicatorStyle={{
        backgroundColor: colors == "dark" ? Colors.black : Colors.white,
      }}
    >
      <BottomSheetScrollView
        style={styles.contentContainer}
        contentContainerStyle={{
          backgroundColor: colors == "dark" ? Colors.dark : Colors.white,
          height: "100%",
          width: "100%",
        }}
      >
        <ThemedView style={styles.options}>
          {exchanges.map((item, index) => {
            const isActive = item.id === activeIndex;
            return (
              <ThemedView
                style={[
                  {
                    borderColor: isActive
                      ? activeIndex == 0
                        ? Colors.green
                        : Colors.red
                      : undefined,
                  },
                  styles.btn,
                ]}
              >
                <TouchableOpacity onPress={() => setActiveIndex(index)}>
                  <ThemedText>{item.name}</ThemedText>
                </TouchableOpacity>
              </ThemedView>
            );
          })}
        </ThemedView>
      </BottomSheetScrollView>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
  },
  contentContainer: {
    flex: 1,
    padding: 36,
    height: "100%",
    width: "100%",
    bottom: 50,
  },
  options: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  btn: {
    width: 170,
    height: 35,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
  },
});

export default TradePanel;
