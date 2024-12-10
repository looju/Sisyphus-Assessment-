import {
  StyleSheet,
  Text,
  View,
  Image,
  useColorScheme,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import { ThemedView } from "./ThemedView";
import Colors from "@/constants/Colors";
import { Dropdown } from "react-native-element-dropdown";
import { time } from "@/constants/Dummies";
import axios from "axios";
import { Base_url } from "@/constants/BaseUrl";

const OrderBook = () => {
  const [negativeFirst, setNegativeFirst] = useState(true);
  const [positiveFirst, setPositiveFirst] = useState(false);
  const [coinData, setCoinData] = useState([]);
  const [isFocus, setIsFocus] = useState(false);
  const [timeFrame, setTimeFrame] = useState("10");
  const colors = useColorScheme();

  const toggleNegativeFirst = () => {
    setNegativeFirst(true);
    setPositiveFirst(false);
  };

  const togglePositiveFirst = () => {
    setPositiveFirst(true);
    setNegativeFirst(false);
  };

  useEffect(() => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios
      .get(`${Base_url}/tickers/${coinName}`)
      .then((res) => setCoinData(res.data))
      .catch((error) => {
        console.log(error, "Error calling ticker");
      });
  }, []);

  return (
    <ThemedView style={styles.main}>
      <ThemedView style={styles.controls}>
        <ThemedView style={styles.toggleBtns}>
          <Image source={require("@/assets/images/2.png")} />
          <Image source={require("@/assets/images/1.png")} />
          <Image source={require("@/assets/images/2.png")} />
        </ThemedView>
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
          data={time}
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
      </ThemedView>
      <FlatList />
    </ThemedView>
  );
};

export default OrderBook;

const styles = StyleSheet.create({
  main: { flex: 1, marginTop: 20 },
  controls: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    width: "100%",
  },
  toggleBtns: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 10,
    width: 100,
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
});
