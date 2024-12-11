import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
export const pairs = [
  {
    label: "BTC/USD",
    value: "bitcoin",
    image: require("@/assets/images/pairs.png"),
    id: "btc-bitcoin",
  },
  {
    label: "ETH/USD",
    value: "ethereum",
    image: require("@/assets/images/eth.png"),
    id: "eth-ethereum",
  },
  {
    label: "TETHER/USD",
    value: "tether",
    image: require("@/assets/images/tether.jpeg"),
    id: "usdt-tether",
  },
  {
    label: "RIPPLE/USD",
    value: "ripple",
    image: require("@/assets/images/xrp.jpeg"),
    id: "xrp-rippel",
  },
  {
    label: "CARDANO/USD",
    value: "cardano",
    image: require("@/assets/images/cardano.jpeg"),
    id: "ada-cardano",
  },
];

export const TradingViews = [
  {
    id: 1,
    name: "Time",
  },
  {
    id: 2,
    name: "1H",
  },
  {
    id: 3,
    name: "2H",
  },
  {
    id: 4,
    name: "4H",
  },
  {
    id: 5,
    name: "1D",
  },
  {
    id: 6,
    name: "1W",
  },
];

export const MoreOptions = [
  {
    id: 1,
    name: "1M",
  },
  {
    id: 2,
    name: "2M",
  },
  {
    id: 3,
    name: "3M",
  },

  {
    id: 3,
    name: "4M",
  },
];

export const iconNames = [
  {
    id: 1,
    icon: "chart-scatter-plot",
  },
  {
    id: 2,
    icon: "abugida-devanagari",
  },
  {
    id: 3,
    icon: "currency-ils",
  },
];

export const controlViews = [
  {
    id: 0,
    name: "Trading View",
  },
  {
    id: 1,
    name: "Depth",
  },
];

export const time = [
  {
    id: 0,
    name: "10",
  },
  {
    id: 1,
    name: "20",
  },
  {
    id: 2,
    name: "30",
  },
];

export const TradeOptions = [
  {
    id: 0,
    name: "Open Orders",
  },
  {
    id: 1,
    name: "Positions",
  },
  {
    id: 2,
    name: "History",
  },
  {
    id: 3,
    name: "Transactions",
  },
];

export const exchanges = [
  {
    id: 0,
    name: "Buy",
  },
  {
    id: 1,
    name: "Sell",
  },
];

export const tradeType = [
  {
    id: 0,
    name: "Limit",
  },
  {
    id: 1,
    name: "Market",
  },
  {
    id: 2,
    name: "Stop",
  },
];

export const orderType = [
  {
    id: 0,
    name: "Good Till Cancelled",
  },
  {
    id: 1,
    name: "Day Order",
  },
  {
    id: 2,
    name: "Fill Order",
  },
];

export const currency = [
  {
    id: 0,
    name: "NGN",
  },
  {
    id: 1,
    name: "USD",
  },
  {
    id: 2,
    name: "GBP",
  },
];
