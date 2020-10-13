import React from "react";
import { View, StyleSheet, FlatList, Button } from "react-native";
import * as SQLite from "expo-sqlite";
import { useState } from "react";
import Listitem from "../components/Listitem";
import { db } from "../../database/database";

const dta = db;
const data = [
  { id: 1, first_name: "king", last_name: "ji" },
  { id: 2, first_name: "ksdasg", last_name: "jasi" },
  { id: 3, first_name: "asng", last_name: "jasi" },
  { id: 4, first_name: "king", last_name: "ji" },
  { id: 5, first_name: "ksdasg", last_name: "jasi" },
  { id: 6, first_name: "asng", last_name: "jasi" },
  { id: 9, first_name: "king", last_name: "ji" },
  { id: 10, first_name: "ksdasg", last_name: "jasi" },
  { id: 11, first_name: "asng", last_name: "jasi" },
];

function ListScren(props) {
  const [items, setitems] = useState();
  const [flag, setflag] = useState(true);
  function HandlePress() {
    if (flag == true) setflag(false);
    if (flag == false) setflag(true);

    console.log(dta);
    dta.transaction((tx) => {
      tx.executeSql("select * from cus", [], (_, { rows: { _array } }) =>
        setitems(_array)
      );
    });
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(i) => i.id.toString()}
        renderItem={({ item }) => (
          <Listitem
            id={item.id}
            fname={item.first_name}
            lname={item.last_name}
          />
        )}
      />
      {flag && <Button title="view" onPress={() => HandlePress()}></Button>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default ListScren;
