import { BtnProps } from "@/typings";
import * as React from "react";
import { Button } from "react-native-paper";

const CustomButton = ({
  onPress,
  styles,
  btnColor,
  txtColor,
  text,
}: BtnProps) => (
  <Button
    mode="contained"
    onPress={() => onPress}
    style={[{ width: 150, borderRadius: 10 }, styles]}
    buttonColor={btnColor}
    textColor={txtColor}
    compact
  >
    {text}
  </Button>
);

export default CustomButton;
