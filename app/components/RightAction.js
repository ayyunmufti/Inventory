import React, { useState } from "react";
import { View, StyleSheet, Vibration } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { TouchableOpacity } from "react-native-gesture-handler";

function RightAction({ doDelete, doUpate }) {
  return (
    <View style={styles.con}>
      <TouchableOpacity
        style={[styles.container, { backgroundColor: "lightgreen" }]}
        onPress={doUpate}
      >
        <MaterialCommunityIcons
          name="square-edit-outline"
          size={45}
          color={colors.white}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          doDelete();
          Vibration.vibrate(100);
        }}
      >
        <MaterialCommunityIcons
          name="trash-can"
          size={45}
          color={colors.white}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: colors.danger,
  },
  con: {
    flexDirection: "row",
  },
});

export default RightAction;
