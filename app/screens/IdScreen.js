import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Button,
  Text,
  ActivityIndicator,
  StatusBar,
} from "react-native";
import { getById } from "../../store/customer";
import { useSelector } from "react-redux";

function IdScreen(props) {
  const [id, setid] = useState();
  const [name, setname] = useState();
  const [lastname, setlastname] = useState();
  const [flag, setFlag] = useState(false);

  const k = getById(id);
  const l = useSelector(k);
  console.log(l[0]);
  const g = l[0];
  const Handlepress = () => {
    if (g !== undefined) {
      console.log(g.firstname);
      if (flag == false) setFlag(true);
      else setFlag(false);
    }
  };

  return (
    <>
      <StatusBar backgroundColor="royalblue" />
      <View style={styles.container}>
        {flag && (
          <>
            <Text style={styles.tx}>{g.id}</Text>
            <Text style={styles.tx}>{g.firstname}</Text>
            <Text style={styles.tx}>{g.lastname}</Text>
          </>
        )}
        <ActivityIndicator size="large" color="tomato" animating={flag} />
        <TextInput
          style={styles.TxtCont}
          placeholder="id"
          keyboardType="phone-pad"
          onChangeText={(text) => setid(text)}
        ></TextInput>
        <Button title="view" onPress={() => Handlepress()} />
      </View>
    </>
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

export default IdScreen;
