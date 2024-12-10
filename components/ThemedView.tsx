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
      style={[{ backgroundColor: color == "dark" ? "#000" : "#fff" }, style]}
      {...otherProps}
    />
  );
}
