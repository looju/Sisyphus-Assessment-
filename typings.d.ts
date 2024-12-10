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
