import { StyleSheet, Text, View, useColorScheme } from "react-native";
import { TextInput, Tooltip } from "react-native-paper";
import React, { useState } from "react";
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";
import Feather from "@expo/vector-icons/Feather";
import Colors from "@/constants/Colors";
import { orderType as order } from "@/constants/Dummies";
import { Dropdown } from "react-native-element-dropdown";
import { useCoinStore } from "@/Store/useCoinSelection";

const TradeInput = ({
  value,
  onChangeText,
  label,
  placeholder,
  displayText,
  toolTipText,
  type = "default",
}) => {
  const colors = useColorScheme();
  const [isFocus, setIsFocus] = useState(false);
  const orderType = useCoinStore((state) => state.order);
  const addOrderType = useCoinStore((state) => state.addOrder);
  return (
    <ThemedView style={[styles.main]}>
      <ThemedView style={styles.toolTipView}>
        <ThemedText>{displayText}</ThemedText>
        <Tooltip title={toolTipText} enterTouchDelay={50}>
          <Feather
            name="info"
            size={24}
            color={colors == "dark" ? Colors.white : Colors.dark}
            style={{ left: 5 }}
          />
        </Tooltip>
      </ThemedView>
      {type == "default" ? (
        <TextInput
          label={label}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          style={[
            styles.input,
            { backgroundColor: colors == "dark" ? Colors.dark : Colors.white },
          ]}
          activeUnderlineColor={Colors.blue}
          placeholderTextColor={colors == "dark" ? Colors.gray : Colors.dark}
          textAlign="center"
          returnKeyType="done"
          keyboardType="numeric"
          autoCapitalize="none"
        />
      ) : type == "selection" ? (
        <Dropdown
          style={[
            styles.dropdown,
            {
              backgroundColor: colors == "dark" ? Colors.dark : Colors.white,
            },
          ]}
          placeholderStyle={[
            styles.placeholderStyle,
            { color: colors == "dark" ? Colors.white : Colors.dark },
          ]}
          containerStyle={{
            backgroundColor: colors == "dark" ? Colors.dark : Colors.white,
            borderColor: Colors.black,
            width: "40%",
          }}
          itemTextStyle={{
            color: colors == "dark" ? Colors.white : Colors.dark,
          }}
          selectedTextStyle={[
            styles.selectedTextStyle,
            { color: colors == "dark" ? Colors.white : Colors.dark },
          ]}
          inputSearchStyle={[
            styles.inputSearchStyle,
            { color: colors == "dark" ? Colors.white : Colors.dark },
          ]}
          iconStyle={styles.iconStyle}
          data={order}
          search
          maxHeight={300}
          placeholder={!isFocus ? orderType : "..."}
          searchPlaceholder="Search..."
          value={orderType}
          labelField={"name"}
          valueField={"name"}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item: any) => {
            addOrderType(item.name);
            setIsFocus(false);
          }}
          dropdownPosition="top"
        />
      ) : null}
    </ThemedView>
  );
};

export default TradeInput;

const styles = StyleSheet.create({
  main: {
    flexDirection: "row",
    flex: 1,
    paddingHorizontal: 10,
    marginVertical: 40,
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "center",
    width: "95%",
    marginLeft: 10,
  },
  input: {
    width: "50%",
    alignItems: "center",
    height: 30,
  },
  toolTipView: {
    flexDirection: "row",
    flex: 1,
    paddingHorizontal: 10,
    alignItems: "center",
    height: 30,
  },
  dropdown: {
    height: 50,
    borderColor: "gray",
    paddingHorizontal: 8,
    width: 170,
    bottom: 5,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 14,
  },
  selectedTextStyle: {
    fontSize: 14,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
