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
import { MoreOptions, TradingViews } from "@/constants/Dummies";
import { iconNames } from "../constants/Dummies";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Dropdown } from "react-native-element-dropdown";
import ViewControls from "./ViewControls";

const Charts = () => {
  const colors = useColorScheme();
  const [activeIndex, setActiveIndex] = useState<null | number>(0);
  const [iconsActiveIndex, setIconsActiveIndex] = useState<null | number>(null);
  const [isFocus, setIsFocus] = useState(false);
  const [timeFrame, setTimeFrame] = useState("1M");
  return (
    <ThemedView style={[styles.main]}>
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
                <ThemedView style={[styles.tradingView]}>
                  <View
                    style={[
                      styles.btnView,
                      { backgroundColor: isActive ? Colors.gray : undefined },
                    ]}
                  >
                    <ThemedText>{item.name}</ThemedText>
                  </View>
                </ThemedView>
              </TouchableOpacity>
            );
          })}
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
            data={MoreOptions}
            search
            maxHeight={300}
            placeholder={!isFocus ? "1M" : "..."}
            searchPlaceholder="Search..."
            value={timeFrame}
            labelField={"name"}
            valueField={"name"}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(item) => {
              setTimeFrame(item.name);
              setIsFocus(false);
            }}
          />
          {iconNames.map((item, index) => {
            const isActive = item.id - 1 === iconsActiveIndex;
            return (
              <TouchableOpacity
                style={styles.tradingView}
                onPress={() => {
                  setActiveIndex(null), setIconsActiveIndex(index);
                }}
              >
                <ThemedView style={[styles.tradingView]}>
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
      <ViewControls />
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
  container: {
    width: "50%",
    height: 80,
  },
  dropdown: {
    height: 50,
    borderColor: "gray",
    paddingHorizontal: 8,
    width: 70,
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
  dropView: {},
  img: {
    width: 30,
    height: 30,
    resizeMode: "contain",
    alignSelf: "center",
    borderRadius: 10,
    marginRight: 10,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.green,
    marginLeft: 10,
    alignSelf: "center",
  },
});
