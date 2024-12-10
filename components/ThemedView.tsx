import { View, useColorScheme, type ViewProps } from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";
import Colors from "@/constants/Colors";

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
      style={[
        { backgroundColor: color == "dark" ? Colors.dark : Colors.white },
        style,
      ]}
      {...otherProps}
    />
  );
}
