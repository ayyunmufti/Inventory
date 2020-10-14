import "react-native-gesture-handler";
import React from "react";
import Navigation from "./app/components/Nav";
import { Provider } from "react-redux";
import store from "./store/configStore";
import Nav from "./app/components/Nav";

import { db } from "./database/database";
import ListScren from "./app/screens/ListScren";
import Pallet from "./app/components/Pallet";
import PalletListScreen from "./app/screens/PalletListScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import InputScreen from "./app/screens/InputScreen";
import Item from "./app/components/Item";
import RightAction from "./app/components/RightAction";
import DetailsScreen from "./app/screens/DetailsScreen";

export default function App() {
  if (db) {
    db.transaction((tx) => {
      tx.executeSql(
        "create table if not exists customer (id integer,name string,number string);"
      );
    });
  }

  return (
    // <Item />
    // <AddScreen></AddScreen>
    <Provider store={store}>
      <Nav />
    </Provider>
  );
}
