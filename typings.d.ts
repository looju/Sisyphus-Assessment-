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

declare interface RefProps {
  refProp: React.RefObject<BottomSheetMethods>;
}

declare interface BtnProps {
  onPress: () => void;
  styles?: ViewStyle;
  btnColor?: string;
  txtColor?: string;
  text: string;
  gradient?: boolean;
}

declare interface onPressProps {
  onPress: () => void;
}
declare interface TradeInputProps {
  value?: string;
  onChangeText?: (value: string) => void;
  value2?: string;
  onChangeText2?: (value: string) => void;
  label: string;
  placeholder: string;
  displayText: string;
  toolTipText: string;
  type?: "default" | "selection";
  showIcon?: boolean;
  fullInput?: "singular" | "double" | "";
  currency?: boolean;
}
