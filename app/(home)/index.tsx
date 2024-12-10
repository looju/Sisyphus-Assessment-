import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  useColorScheme,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import CustomHeader from "@/components/CustomHeader";
import { ThemedView } from "@/components/ThemedView";
import Colors from "@/constants/Colors";
import axios from "axios";
import { Dropdown } from "react-native-element-dropdown";
import { Base_url } from "@/constants/BaseUrl";
import { pairs } from "@/constants/Pairs";
import { AntDesign } from "@expo/vector-icons";

const MainScreen = () => {
  const colors = useColorScheme();
  const [coinData, setCoinData] = useState();
  const [coinName, setCoinName] = useState("btc-bitcoin");
  const [value, setValue] = useState(null);
  const [iconSource, setIconSource] = useState();
  const [isFocus, setIsFocus] = useState(false);

  useEffect(() => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios.get(`${Base_url}/tickers/${coinName}`, config).then((response) => {
      console.log(response.data);
      setCoinData(response.data);
    });
  }, [coinName]);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors == "dark" ? Colors.dark : Colors.white,
      }}
    >
      <ThemedView style={{ marginBottom: 60 }}>
        <CustomHeader />
      </ThemedView>
      <ThemedView
        style={[
          {
            backgroundColor: colors == "dark" ? Colors.dark : Colors.white,
            flexDirection: "row",
          },
        ]}
      >
        <Image source={iconSource} style={styles.img} />
        <Dropdown
          style={[
            styles.dropdown,
            { backgroundColor: colors == "dark" ? Colors.dark : Colors.white },
          ]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={[
            styles.selectedTextStyle,
            { color: colors == "dark" ? Colors.white : Colors.dark },
          ]}
          inputSearchStyle={[
            styles.inputSearchStyle,
            { color: colors == "dark" ? Colors.white : Colors.dark },
          ]}
          iconStyle={styles.iconStyle}
          data={pairs}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? coinName : "..."}
          searchPlaceholder="Search..."
          value={coinName}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            setCoinName(item.value);
            setIsFocus(false);
            setIconSource(item.image);
          }}
        />
      </ThemedView>
    </SafeAreaView>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  container: {
    width: "50%",
    height: 80,
  },
  dropdown: {
    height: 50,
    borderColor: "gray",
    paddingHorizontal: 8,
    width: "50%",
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
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 24,
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
});
