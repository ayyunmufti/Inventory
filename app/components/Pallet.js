import React from "react";
import { StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "./Icon";

function Pallet({ name, text, back = "white", color = "tomato", onpress }) {
  return (
    <TouchableOpacity style={styles.box} onPress={onpress}>
      <Icon name={name} size={70} backcolor={back} iconcolor={color}></Icon>
      <Text style={styles.txt}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    height: 100,
    width: 100,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  txt: {
    fontSize: 10,
    paddingTop: 2,
  },
});

export default Pallet;
