import { View, Text, useColorScheme, StyleSheet } from "react-native";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  renderers,
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
  const { ContextMenu } = renderers;
  return (
    <Menu
      opened={visible}
      onBackdropPress={close}
      onClose={close}
      renderer={ContextMenu}
    >
      <MenuTrigger text="Select action" />
      <MenuOptions
        optionsContainerStyle={{
          backgroundColor: colors == "dark" ? Colors.dark : Colors.white,
        }}
      >
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
  );
}

const styles = StyleSheet.create({
  main: {
    height: "100%",
  },
});
