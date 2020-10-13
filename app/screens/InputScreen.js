import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, TextInput, Button } from "react-native";
import { userAdded } from "../../store/customer";

import { useDispatch, useSelector } from "react-redux";

import { db, addtodb, getItem, deletetb } from "../../database/database";
import { get } from "react-native/Libraries/Utilities/PixelRatio";

function InputScreen(props) {
  const [id, setid] = useState("");
  const [name, setname] = useState("");
  const [lastname, setlastname] = useState("");
  const dispatch = useDispatch();

  // dispatch(userAdded({ id: 1, firstname: "king", lastname: "man" }));

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.TxtCont}
        placeholder="id"
        keyboardType="phone-pad"
        onChangeText={(text) => setid(text)}
      ></TextInput>
      <TextInput
        style={styles.TxtCont}
        onChangeText={(text) => setname(text)}
        placeholder="First Name"
      ></TextInput>
      <TextInput
        style={styles.TxtCont}
        onChangeText={(text) => setlastname(text)}
        placeholder="Last Name"
      ></TextInput>
      <Button
        title="submit"
        onPress={() => {
          dispatch(userAdded({ id: id, firstname: name, lastname: lastname }));

          addtodb(id, name, lastname);
          // getItem();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgray",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  TxtCont: {
    backgroundColor: "white",
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "tomato",
    borderRadius: 50,
    padding: 8,
    fontSize: 25,
    marginVertical: 10,
  },
});

export default InputScreen;
