import * as React from "react";
import { View } from "react-native";
import { Button, Menu, Divider, PaperProvider } from "react-native-paper";

const MenuBox = ({ visible, open, close }: MenuBoxProps) => {
  return (
    <PaperProvider>
      <View
        style={{
          paddingTop: 50,
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Menu
          visible={visible}
          onDismiss={close}
          anchor={<Button onPress={open}>Show menu</Button>}
        >
          <Menu.Item onPress={() => {}} title="Item 1" />
          <Menu.Item onPress={() => {}} title="Item 2" />
          <Divider />
          <Menu.Item onPress={() => {}} title="Item 3" />
        </Menu>
      </View>
    </PaperProvider>
  );
};

export default MenuBox;
