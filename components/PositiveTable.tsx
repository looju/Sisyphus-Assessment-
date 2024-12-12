import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";
import { useCoinStore } from "@/Store/useCoinSelection";
import Colors from "@/constants/Colors";
import AntDesign from "@expo/vector-icons/AntDesign";
import TradeBook from "./TradeBook";
import { TableProps } from "@/typings";

const PositiveTable = ({ data, amount }: TableProps) => {
  const coin: string = useCoinStore((state) => state.coin);
  const price: string = data.low.toLocaleString(undefined, {
    minimumFractionDigits: 3,
  });
  const total: string = data.close.toLocaleString(undefined, {
    minimumFractionDigits: 2,
  });
  const amountPerCoin: string = data.open.toLocaleString(undefined, {
    minimumFractionDigits: 2,
  });

  const priceArray = price.repeat(Number(amount)).split(",");
  const totalArray = total.repeat(Number(amount)).split(",");
  const amountPerCoinArray = amountPerCoin.repeat(Number(amount)).split(",");

  //the reason for creating these arrays is to act as dummy data considering that the api does not return an array of historical values
  return (
    <>
      <ThemedView>
        <ThemedView style={styles.headers}>
          <ThemedView style={styles.innerHeaderView}>
            <ThemedText style={styles.headerText} numberOfLines={1}>
              Price
            </ThemedText>
            <ThemedText>(USDT)</ThemedText>
            <ThemedView style={styles.dataView}>
              {priceArray.map((price) => {
                return (
                  <ThemedText style={styles.profitTxt}>{price}</ThemedText>
                );
              })}
            </ThemedView>
          </ThemedView>
          <ThemedView style={styles.innerHeaderView}>
            <ThemedText style={styles.headerText} numberOfLines={1}>
              Amount
            </ThemedText>
            <ThemedText>({coin.slice(0, 3).toLocaleUpperCase()})</ThemedText>
            <ThemedView style={styles.dataView}>
              {amountPerCoinArray.map((price) => {
                return (
                  <ThemedText style={styles.txt}>
                    {price.slice(0, 7)}
                  </ThemedText>
                );
              })}
            </ThemedView>
          </ThemedView>
          <ThemedView style={styles.innerHeaderView}>
            <ThemedText style={styles.headerText} numberOfLines={1}>
              Total
            </ThemedText>
            <ThemedView style={[styles.dataView, { top: 25 }]}>
              {totalArray.map((price) => {
                return (
                  <ThemedText style={[styles.txt]}>
                    {price.slice(0, 7)}
                  </ThemedText>
                );
              })}
            </ThemedView>
          </ThemedView>
        </ThemedView>
        <View style={{ marginTop: 40 }} />
        <ThemedView style={styles.row}>
          <ThemedText style={[styles.lgTxt, { color: Colors.red }]}>
            {priceArray[3]}
          </ThemedText>
          <AntDesign name="arrowdown" size={20} color={Colors.red} />
          <ThemedText style={[styles.lgTxt]}>{priceArray[3]}</ThemedText>
        </ThemedView>
        <ThemedView style={styles.headers}>
          <ThemedView style={styles.innerHeaderView}>
            <ThemedView style={styles.dataView}>
              {priceArray.map((price) => {
                return <ThemedText style={styles.lossTxt}>{price}</ThemedText>;
              })}
            </ThemedView>
          </ThemedView>
          <ThemedView style={styles.innerHeaderView}>
            <ThemedView style={styles.dataView}>
              {amountPerCoinArray.map((price) => {
                return (
                  <ThemedText style={styles.txt}>
                    {price.slice(0, 7)}
                  </ThemedText>
                );
              })}
            </ThemedView>
          </ThemedView>
          <ThemedView style={styles.innerHeaderView}>
            <ThemedView style={[styles.dataView]}>
              {totalArray.map((price) => {
                return (
                  <ThemedText style={[styles.txt]}>
                    {price.slice(0, 7)}
                  </ThemedText>
                );
              })}
            </ThemedView>
          </ThemedView>
        </ThemedView>
      </ThemedView>
      <TradeBook />
    </>
  );
};

export default PositiveTable;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  headers: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "400",
    marginBottom: 5,
    flexWrap: "wrap",
  },
  innerHeaderView: {
    alignItems: "center",
  },
  dataView: {
    marginTop: 10,
  },
  lossTxt: {
    color: Colors.red,
    alignSelf: "center",
  },
  profitTxt: {
    color: Colors.green,
    alignSelf: "center",
  },
  txt: {
    alignSelf: "center",
    flexWrap: "wrap",
  },
  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
    width: "70%",
    alignSelf: "center",
  },
  lgTxt: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 5,
    flexWrap: "wrap",
    alignSelf: "center",
  },
});
