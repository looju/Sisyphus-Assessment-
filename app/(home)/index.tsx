import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  useColorScheme,
  Image,
  ActivityIndicator,
  Platform,
} from "react-native";
import React, { useEffect, useState } from "react";
import CustomHeader from "@/components/CustomHeader";
import { ThemedView } from "@/components/ThemedView";
import Colors from "@/constants/Colors";
import axios from "axios";
import { Dropdown } from "react-native-element-dropdown";
import { Base_url } from "@/constants/BaseUrl";
import { pairs } from "@/constants/Dummies";
import { AntDesign } from "@expo/vector-icons";
import PriceChanges from "@/components/PriceChanges";
import CollapsibeTabs from "@/components/CollapsibleTabs";
import { useCoinStore } from "@/Store/useCoinSelection";

const MainScreen = () => {
  const colors = useColorScheme();
  const [coinData, setCoinData] = useState<[] | any>([]);
  const [coinName, setCoinName] = useState("btc-bitcoin");
  const [value, setValue] = useState(null);
  const [iconSource, setIconSource] = useState();
  const [isFocus, setIsFocus] = useState(false);
  const [coinDisplayName, setCoinDisplayName] = useState("BTC/USD");
  const addCoinToStore = useCoinStore((state) => state.addCoin);
  const addPriceToStore = useCoinStore((state) => state.addPrice);
  const android = Platform.OS === "android";

  useEffect(() => {
    axios
      .get(`${Base_url}/tickers/${coinName}`)
      .then((res) => setCoinData(res.data))
      .catch((error) => {
        console.log(error, "Error calling ticker");
      });
    axios
      .get(`${Base_url}/coins/${coinName}/ohlcv/today`)
      .then((res) => addPriceToStore(res.data))
      .catch((error) => {
        console.log(error, "Error calling daily prices");
      });
  }, [coinName]);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors == "dark" ? Colors.dark : Colors.white,
        top: android ? 30 : 0,
      }}
    >
      {coinData.length == 0 ? (
        <ThemedView
          style={{ alignItems: "center", justifyContent: "center", flex: 1 }}
        >
          <ActivityIndicator size={"small"} />
        </ThemedView>
      ) : (
        <>
          <ThemedView style={{ marginBottom: 60, flex: 1 }}>
            <ThemedView style={{ marginBottom: 60 }}>
              <CustomHeader />
            </ThemedView>
            <ThemedView
              style={[
                {
                  flexDirection: "row",
                  alignItems: "center",
                },
              ]}
            >
              <Image
                source={iconSource ?? require("@/assets/images/pairs.png")}
                style={styles.img}
              />
              <Dropdown
                style={[
                  styles.dropdown,
                  {
                    backgroundColor:
                      colors == "dark" ? Colors.dark : Colors.white,
                  },
                ]}
                placeholderStyle={[
                  styles.placeholderStyle,
                  { color: colors == "dark" ? Colors.white : Colors.dark },
                ]}
                containerStyle={{
                  backgroundColor:
                    colors == "dark" ? Colors.dark : Colors.white,
                  borderColor: Colors.black,
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
                data={pairs}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? coinDisplayName : "..."}
                searchPlaceholder="Search..."
                value={coinDisplayName}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={(item) => {
                  setCoinName(item.id);
                  setCoinDisplayName(item.label);
                  addCoinToStore(item.id);
                  setIsFocus(false);
                  setIconSource(item.image);
                }}
              />
              <Text style={styles.price}>
                $
                {coinData.quotes.USD.price.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                })}
              </Text>
            </ThemedView>
            <ThemedView
              style={{
                flex: 1,
              }}
            >
              <PriceChanges
                change={coinData.quotes.USD.percent_change_24h}
                high={coinData.quotes.USD.percent_change_24h}
                low={coinData.quotes.USD.percent_change_24h}
              />
              <CollapsibeTabs />
            </ThemedView>
          </ThemedView>
        </>
      )}
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
    fontSize: 24,
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
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.green,
    marginLeft: 10,
    alignSelf: "center",
  },
});
