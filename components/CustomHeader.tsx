import {
  StyleSheet,
  Text,
  View,
  useColorScheme,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";
import { useHeaderHeight } from "@react-navigation/elements";
import { useNavigation } from "expo-router";
import MenuBox from "./Menu";

const CustomHeader = () => {
  const headerHeight = useHeaderHeight();
  const navigation = useNavigation();
  const [visible, setVisibile] = useState(false);
  return (
    <View style={[styles.main, {}]}>
      <Image
        source={require("@/assets/images/logo.png")}
        resizeMode="cover"
        resizeMethod="auto"
      />

      <ThemedView style={styles.menu}>
        <Image
          source={require("@/assets/images/user.png")}
          resizeMode="cover"
          resizeMethod="auto"
        />
        <Image
          source={require("@/assets/images/user.png")}
          resizeMode="cover"
          resizeMethod="auto"
        />
        <TouchableOpacity onPress={() => setVisibile(!visible)}>
          <Image
            source={require("@/assets/images/Menu.png")}
            resizeMode="cover"
            resizeMethod="auto"
          />
        </TouchableOpacity>
      </ThemedView>
      {visible && (
        <MenuBox visible={visible} close={() => setVisibile(false)} />
      )}
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    height: 40,
  },
  img: {
    height: 20,
    width: 30,
    alignSelf: "center",
  },
  imgView: {
    height: 20,
    width: 30,
    flex: 1,
  },
  menu: {
    flexDirection: "row",
    flex: 0.7,
    justifyContent: "space-around",
  },
});
