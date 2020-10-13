import React from "react";
import { StyleSheet, View } from "react-native";
import colors from "../config/colors";
function Seperator() {
  return <View style={styles.sep} />;
}
const styles = StyleSheet.create({
  sep: { width: "100%", height: 2, backgroundColor: colors.lightgray },
});
export default Seperator;
