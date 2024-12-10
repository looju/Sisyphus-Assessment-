import {
  StyleSheet,
  Text,
  View,
  useColorScheme,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";
import { useHeaderHeight } from "@react-navigation/elements";
import { useNavigation } from "expo-router";

const CustomHeader = () => {
  const headerHeight = useHeaderHeight();
  const navigation = useNavigation();
  return (
    <SafeAreaView>
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
          <TouchableOpacity onPress={() => }>
            <Image
              source={require("@/assets/images/Menu.png")}
              resizeMode="cover"
              resizeMethod="auto"
            />
          </TouchableOpacity>
        </ThemedView>
      </View>
    </SafeAreaView>
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
  },
  menu: {
    flexDirection: "row",
    flex: 0.5,
    justifyContent: "space-around",
  },
});
