import React, { useState } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import { allppl } from "../../store/customer";

function ViewScreen() {
  //console.log(allppl);
  const stat = useSelector(allppl);
  const handlePress = () => {
    if (stat !== undefined) {
      console.log(stat.length);
      if (flag == false) setFlag(true);
      else setFlag(false);
    }
  };
  const [flag, setFlag] = useState(false);

  return (
    <View style={styles.container}>
      {flag && (
        <>
          <Text style={styles.tx}>{stat[stat.length - 1].id}</Text>
          <Text style={styles.tx}>{stat[stat.length - 1].firstname}</Text>
          <Text style={styles.tx}>{stat[stat.length - 1].lastname}</Text>
        </>
      )}
      <Button title="view" onPress={() => handlePress()}></Button>
      <TextInput>{}</TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgray",
    alignItems: "center",
    justifyContent: "center",
  },
  tx: {},
});

export default ViewScreen;
