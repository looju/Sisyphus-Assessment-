import React, { useCallback, useMemo, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  useColorScheme,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet, {
  BottomSheetScrollView,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { RefProps } from "@/typings";
import Colors from "@/constants/Colors";
import { ThemedView } from "./ThemedView";
import { currency, exchanges, tradeType } from "@/constants/Dummies";
import { ThemedText } from "./ThemedText";
import TradeInput from "./TradeInput";
import { useCoinStore } from "@/Store/useCoinSelection";
import TradeButton from "./TradeButton";
import Button from "./Button";

const TradePanel = ({ refProp }: RefProps) => {
  const colors = useColorScheme();
  const [activeIndex, setActiveIndex] = useState(0);
  const [tradeTypeIndex, setTradeTypeIndex] = useState(0);
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");
  const [totalValue, setTotalValue] = useState("");
  const [orders, setOrders] = useState("");
  const [available, setAvailable] = useState("");
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);
  const orderType = useCoinStore((state) => state.order);
  let USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  const android = Platform.OS === "android";

  const Transact = () => {
    //integrate with server
  };

  const InitiateBankTransaction = () => {
    //integrate with server based on whetehr withdrawal or deposit
    // activeIndex==0?//DepositMoney():WithdrawMoney()
  };
  return (
    <BottomSheet
      ref={refProp}
      onChange={handleSheetChanges}
      index={-1}
      snapPoints={["50%"]}
      enablePanDownToClose
      handleIndicatorStyle={{
        backgroundColor: colors == "dark" ? Colors.white : Colors.black,
      }}
      containerHeight={1000}
      backgroundStyle={{
        backgroundColor: colors == "dark" ? Colors.dark : Colors.white,
      }}
      keyboardBehavior="extend"
    >
      <BottomSheetScrollView
        style={[
          styles.contentContainer,
          { backgroundColor: colors == "dark" ? Colors.dark : Colors.white },
        ]}
        contentContainerStyle={{
          backgroundColor: colors == "dark" ? Colors.dark : Colors.white,
          height: 1000,
          width: "100%",
          paddingVertical: 50,
        }}
        contentInsetAdjustmentBehavior={"automatic"}
      >
        <ThemedView>
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
                  key={item.id}
                >
                  <TouchableOpacity onPress={() => setActiveIndex(index)}>
                    <ThemedText>{item.name}</ThemedText>
                  </TouchableOpacity>
                </ThemedView>
              );
            })}
          </ThemedView>
          <ThemedView
            style={[
              styles.options,
              {
                paddingHorizontal: 10,
                justifyContent: "space-between",
                top: 40,
                marginBottom: 90,
              },
            ]}
          >
            {tradeType.map((item, index) => {
              const isActive = item.id === tradeTypeIndex;
              return (
                <ThemedView
                  style={[
                    {
                      backgroundColor: isActive ? Colors.darkBlue : undefined,
                    },
                    styles.btn2,
                  ]}
                  key={item.id}
                >
                  <TouchableOpacity onPress={() => setTradeTypeIndex(index)}>
                    <ThemedText>{item.name}</ThemedText>
                  </TouchableOpacity>
                </ThemedView>
              );
            })}
          </ThemedView>
          <TradeInput
            value={price}
            onChangeText={(value: string) => setPrice(value)}
            label=""
            placeholder="0.00USD"
            displayText="Limit Price"
            toolTipText="This is the alloted limit price"
          />
          <TradeInput
            value={amount}
            onChangeText={(value: string) => setAmount(value)}
            label=""
            placeholder="0.00USD"
            displayText="Amount"
            toolTipText="Amount to transact"
            type="default"
          />
          <TradeInput
            label=""
            placeholder="0.00USD"
            displayText="Type"
            toolTipText="Type of transaction"
            type="selection"
          />
          <TradeInput
            label=""
            placeholder="0.00USD"
            displayText="Post Only"
            toolTipText="Deferrable Transaction"
          />
          <ThemedView style={styles.row}>
            <ThemedText>Total</ThemedText>
            <ThemedText>
              {USDollar.format(Number(amount) * Number(price))}
            </ThemedText>
          </ThemedView>
          <TradeButton
            styles={{ marginVertical: 15, alignSelf: "center" }}
            text={"Buy BTC"}
            onPress={() => Transact()}
          />
          <TradeInput
            label=""
            placeholder="0.00"
            displayText="Total Account Value"
            toolTipText="Type of transaction"
            type="selection"
            fullInput={"singular"}
            showIcon={false}
            value={totalValue}
            onChangeText={(value: string) => setTotalValue(value)}
            currency={true}
          />
          <TradeInput
            label=""
            placeholder="0.00"
            displayText="Open Orders"
            toolTipText="Type of transaction"
            type="selection"
            fullInput={"double"}
            showIcon={false}
            value={orders}
            onChangeText={(value: string) => setOrders(value)}
          />
          <Button
            text={activeIndex == 0 ? "Deposit" : "Withdraw"}
            btnColor={activeIndex == 0 ? Colors.blue : Colors.red}
            txtColor={colors == "dark" ? Colors.white : Colors.black}
            onPress={() => InitiateBankTransaction()}
            styles={{ top: 40 }}
          />
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
    bottom: 50,
    width: "100%",
    position: "absolute",
    elevation: 5,
    height: "100%",
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
  btn2: {
    width: 80,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    marginBottom: 10,
  },
});

export default TradePanel;
