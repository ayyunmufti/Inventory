import React from "react";
import { View, StyleSheet, FlatList, Dimensions } from "react-native";
import Pallet from "../components/Pallet";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import colors from "../config/colors";
import { StatusBar } from "expo-status-bar";

function PalletListScreen({ navigation }) {
  const d = [
    { id: 3, name: "bars", tx: "Products" },
    { id: 4, name: "contacts", tx: "Contacts" },
    { id: 5, name: "solution1", tx: "Suppliers" },
    { id: 6, name: "team", tx: "Customers" },
    { id: 7, name: "table", tx: "Excel" },
    { id: 8, name: "book", tx: "Stock" },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        style={{ marginBottom: 80 }}
        data={d}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Pallet
            name={item.name}
            text={item.tx}
            back={item.back}
            color={item.color}
            onpress={() => navigation.navigate(item.tx)}
          />
        )}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("screen").height,
    width: Dimensions.get("screen").width,

    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: colors.tomato,
    paddingLeft: 40,
  },
});

export default PalletListScreen;
