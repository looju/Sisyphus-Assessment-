import { StyleSheet, Text, View, useColorScheme } from "react-native";
import React, { useCallback, useRef } from "react";
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";
import CustomButton from "./Button";
import Colors from "@/constants/Colors";
import TradePanel from "./TradePanel";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
const OpenOrders = () => {
  const colors = useColorScheme();
  const bottomSheetRef = useRef<BottomSheet>(null);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);
  return (
    <>
      <ThemedView style={styles.main}>
        <ThemedText style={styles.header}>No Open Orders</ThemedText>
        <ThemedText style={styles.subHeader}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id pulvinar
          nullam sit imperdiet pulvinar.
        </ThemedText>
        <ThemedView style={styles.btnView}>
          <CustomButton
            onPress={() => bottomSheetRef.current?.expand()}
            btnColor={Colors.lemon}
            text="Buy"
            txtColor={colors == "dark" ? Colors.white : Colors.black}
          />
          <CustomButton
            onPress={() => null}
            btnColor={Colors.red}
            text="Sell"
            txtColor={colors == "dark" ? Colors.white : Colors.black}
          />
        </ThemedView>
      </ThemedView>
      <TradePanel refProp={bottomSheetRef} />
    </>
  );
};

export default OpenOrders;

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
  contentContainer: {
    flex: 1,
    padding: 36,
    alignItems: "center",
  },
});
