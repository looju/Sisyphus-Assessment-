import { View, useColorScheme, type ViewProps } from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedView({
  style,
  lightColor,
  darkColor,
  ...otherProps
}: ThemedViewProps) {
  const color = useColorScheme();

  return (
    <View
      style={[{ backgroundColor: color == "dark" ? "#fff" : "#000" }, style]}
      {...otherProps}
    />
  );
}
