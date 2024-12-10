import { View, Text, useColorScheme, StyleSheet } from "react-native";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";
import Colors from "@/constants/Colors";

export default function MenuBox({
  visible,
  close,
}: {
  visible: boolean;
  close: () => void;
}) {
  const colors = useColorScheme();
  return (
    <View
      style={{
        backgroundColor: colors == "dark" ? Colors.black : Colors.white,
      }}
    >
      <Menu
        style={{
          backgroundColor: colors == "dark" ? Colors.black : Colors.white,
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
        }}
        opened={visible}
        onBackdropPress={close}
        onClose={close}
      >
        <MenuTrigger text="Select action" />
        <MenuOptions>
          <MenuOption>
            <ThemedText
              style={{ color: colors == "dark" ? Colors.white : Colors.dark }}
            >
              Exchange
            </ThemedText>
          </MenuOption>
          <MenuOption>
            <ThemedText
              style={{ color: colors == "dark" ? Colors.white : Colors.dark }}
            >
              Wallets
            </ThemedText>
          </MenuOption>
          <MenuOption>
            <ThemedText
              style={{ color: colors == "dark" ? Colors.white : Colors.dark }}
            >
              Roqqu Hub
            </ThemedText>
          </MenuOption>
          <MenuOption>
            <ThemedText
              style={{ color: colors == "dark" ? Colors.white : Colors.dark }}
            >
              Logout
            </ThemedText>
          </MenuOption>
        </MenuOptions>
      </Menu>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    height: "100%",
  },
});
