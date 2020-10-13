import { Platform } from "react-native";
import colors from "./colors";

export default {
  colors,
  text: {
    color: colors.darkgray,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",

    maxWidth: 120,
  },
  plusicon: {
    position: "absolute",
    bottom: 20,
    right: 20,
  },
};
