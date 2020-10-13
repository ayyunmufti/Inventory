import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, StyleSheet, Text } from "react-native";

function Listitem({ id, fname, lname }) {
  return (
    <>
      <StatusBar />

      <View style={styles.box}>
        <Text>{id}</Text>

        <Text>{fname}</Text>
        <Text>{lname}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: "skyblue",
    padding: 20,
    borderRadius: 50,
    margin: 5,
  },
});

export default Listitem;
