import { Dimensions, PixelRatio } from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
export const normalizeHeight = (size: number): number => {
  return PixelRatio.roundToNearestPixel(verticalScale(size));
};
export const screenWidth: number = Dimensions.get("window").width;
export const screenHeight: number = Dimensions.get("window").height;
