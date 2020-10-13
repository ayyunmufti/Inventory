import React from "react";
import { View, StyleSheet, Text } from "react-native";

function DetailBar({ label, exp, style }) {
  return (
    <View style={styles.detail}>
      <Text style={styles.detailtxt}>{label + ":"}</Text>
      <View style={[styles.detailtbox, style]}>
        <Text style={[styles.detailtxt, style]} numberOfLines={2}>
          {exp}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detail: {
    backgroundColor: "white",
    // width: "100%",
    height: 40,
    borderRadius: 10,
    margin: 5,
    marginHorizontal: 5,
    padding: 3,
    alignItems: "center",
    flexDirection: "row",
  },
  detailtxt: {
    fontSize: 20,
  },
  detailtbox: {
    fontSize: 13,

    position: "absolute",
    right: 20,
    top: 4,

    maxWidth: 160,
  },
});

export default DetailBar;
