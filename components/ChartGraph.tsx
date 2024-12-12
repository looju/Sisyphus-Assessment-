import { Dimensions, StyleSheet, useColorScheme } from "react-native";
import { CandlestickChart } from "react-native-wagmi-charts";
import data from "@/mock/Data.json";
import Colors from "@/constants/Colors";
import { ThemedView } from "./ThemedView";
import { useCoinStore } from "@/Store/useCoinSelection";
import { ThemedText } from "./ThemedText";
import { generateIntervalsOf } from "@/utils/NumberUtils";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
import { Data } from "@/constants/Dummies";
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
        <ThemedView style={styles.candleStick}>
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
              <CandlestickChart.Crosshair
                color={colors == "dark" ? Colors.white : Colors.black}
              >
                <CandlestickChart.Tooltip style={styles.toolTip} />
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
        <ThemedView
          style={[
            {
              flex: 1,
              width: "100%",
              alignItems: "center",
            },
          ]}
        >
          <ThemedView style={styles.rtView}>
            <ThemedView style={styles.row}>
              <ThemedText>Vol(BTC):</ThemedText>
              <ThemedText style={styles.lossTxt}>65.254k</ThemedText>
            </ThemedView>
            <ThemedView style={styles.row}>
              <ThemedText>Vol(USDT)</ThemedText>
              <ThemedText style={styles.lossTxt}>2.418B</ThemedText>
            </ThemedView>
          </ThemedView>

          <BarChart
            data={Data}
            width={Dimensions.get("window").width * 0.85} // from react-native
            height={240}
            yAxisLabel="$"
            xAxisLabel={undefined}
            yAxisSuffix="k"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundColor: colors == "dark" ? "#141518" : "#fff",
              backgroundGradientFrom: colors == "dark" ? "#141518" : "#fff",
              backgroundGradientTo: colors == "dark" ? "#141518" : "#fff",
              decimalPlaces: 2,
              strokeWidth: 1,
              color: (opacity = 1) => `rgba(0,128,0,${opacity})`,
              labelColor: (opacity = 1) =>
                `${
                  colors == "light"
                    ? `rgba(0,0,0, ${opacity})`
                    : `rgba(255, 255, 255, ${opacity})`
                }`,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: "#ffa726",
              },
            }}
            withHorizontalLabels={false}
            withInnerLines={false}
            style={{
              width: "90%",

              alignSelf: "flex-start",
            }}
          />
        </ThemedView>
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  main: {
    height: "70%",
  },
  candleStick: {
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
  toolTip: {
    backgroundColor: Colors.green,
    borderRadius: 2,
    alignSelf: "flex-end",
  },
  lossTxt: {
    color: Colors.red,
  },
  rtView: {
    flexDirection: "row",
    width: "70%",
    justifyContent: "space-around",
    alignSelf: "flex-start",
  },
  row: {
    flexDirection: "row",
  },
});
