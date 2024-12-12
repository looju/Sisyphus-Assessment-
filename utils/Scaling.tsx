import { Dimensions, PixelRatio } from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
export const normalizeHeight = (size: number): number => {
  return PixelRatio.roundToNearestPixel(verticalScale(size));
};
