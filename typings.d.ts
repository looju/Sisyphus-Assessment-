import { ViewStyle } from "react-native";

declare interface MenuBoxProps {
  visible: boolean;
  setVisible: () => void;
  open: () => void;
  close: () => void;
}

declare interface PriceChangesProp {
  change: string;
  high: string;
  low: string;
}

declare interface TableProps {
  data: any;
  amount: string;
}

declare interface BtnProps {
  onPress: () => void;
  styles?: ViewStyle;
  btnColor: string;
  txtColor: string;
  text: string;
}
