import { Dimensions, StyleSheet, useColorScheme } from "react-native";
import { CandlestickChart } from "react-native-wagmi-charts";
import data from "@/mock/Data.json";
import Colors from "@/constants/Colors";
import { ThemedView } from "./ThemedView";
import { useCoinStore } from "@/Store/useCoinSelection";
import { ThemedText } from "./ThemedText";
import { generateIntervalsOf } from "@/utils/NumberUtils";
const width = Dimensions.get("screen").width;

export default function ChartGraph() {
  const colors = useColorScheme();
  const prices = useCoinStore((state) => state.prices);
  const coinName = useCoinStore((state) => state.coin);
  const multiple = prices[0].high / 20;
  const pricesLogs = generateIntervalsOf(
    Number(multiple),
    0,
    Number(prices[0].high)
  );

  const formatter = new Intl.NumberFormat("en-US");
  return (
    <>
      <ThemedView style={styles.main}>
        <CandlestickChart.Provider data={data}>
          <CandlestickChart width={width * 0.85}>
            <CandlestickChart.Candles
              positiveColor={Colors.positive}
              negativeColor={Colors.negative}
            />
            <ThemedView style={{}}>
              <CandlestickChart.DatetimeText
                type="close"
                style={{
                  color: colors == "dark" ? Colors.white : Colors.black,
                }}
              />
            </ThemedView>
            <CandlestickChart.Crosshair>
              <CandlestickChart.Tooltip />
            </CandlestickChart.Crosshair>
          </CandlestickChart>
        </CandlestickChart.Provider>
        <ThemedView
          style={[
            styles.verticalBar,
            { borderColor: colors == "dark" ? Colors.white : Colors.black },
          ]}
        >
          {pricesLogs.reverse().map((prices) => {
            const decimal = (Math.round(prices * 100) / 100).toFixed(2);
            const formattedDecimal = formatter.format(Number(decimal));
            return (
              <ThemedText style={styles.text}>-{formattedDecimal}</ThemedText>
            );
          })}
        </ThemedView>
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  main: {
    top: "10%",
    flexDirection: "row",
  },
  verticalBar: {
    flex: 1,
    alignSelf: "flex-end",
    height: "100%",
    borderWidth: 1,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  text: {
    fontSize: 10,
  },
});
