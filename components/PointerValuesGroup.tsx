import React from "react";
import { Platform, StyleSheet, View, useColorScheme } from "react-native";
import { useTheme } from "@react-navigation/native";
import { RFValue } from "react-native-responsive-fontsize";
import { ReText } from "react-native-redash";
import { normalizeHeight } from "@/utils/Scaling";
import { ThemedText } from "./ThemedText";
import Colors from "@/constants/Colors";

interface PointerValuesProps {
  label: string;
  value: any;
}

const PointerValues: React.FC<PointerValuesProps> = ({ label, value }) => {
  const colors = useColorScheme();

  return (
    <View style={styles.pointerContainer}>
      <ThemedText style={{ opacity: 0.8 }}>{label}</ThemedText>
      <ReText
        style={{
          color: colors == "dark" ? Colors.white : Colors.black,
          fontSize: RFValue(10),
        }}
        {...{ text: value }}
      />
    </View>
  );
};

interface PointerValuesGroupProps {
  openValue: any;
  closeValue: any;
  highValue: any;
  lowValue: any;
}

const PointerValuesGroup: React.FC<PointerValuesGroupProps> = ({
  openValue,
  closeValue,
  highValue,
  lowValue,
}) => {
  return (
    <View>
      <View style={styles.flexRow}>
        <PointerValues label="Open" value={openValue} />
        <PointerValues label="Close" value={closeValue} />
      </View>
      <View style={styles.flexRow2}>
        <PointerValues label="High" value={highValue} />
        <PointerValues label="Low" value={lowValue} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pointerContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "46%",
    justifyContent: "space-between",
  },
  flexRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  flexRow2: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: Platform.OS === "ios" ? 40 : normalizeHeight(20),
  },
});
export default PointerValuesGroup;
