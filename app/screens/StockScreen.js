import React from "react";
import { View, StyleSheet, FlatList, Dimensions } from "react-native";
import colors from "../config/colors";

import Icon from "../components/Icon";
import Pallet from "../components/Pallet";

import DStyles from "../config/DStyles";

function StockScreen({ navigation }) {
  const d = [
    { id: 3, name: "folder1", tx: "Company1" },
    { id: 4, name: "folder1", tx: "Company2" },
    { id: 5, name: "folder1", tx: "Company3" },
    { id: 6, name: "folder1", tx: "Company4" },
    { id: 7, name: "folder1", tx: "Company5" },
    { id: 8, name: "folder1", tx: "Company6" },
    { id: 9, name: "folder1", tx: "Company6" },
    { id: 10, name: "folder1", tx: "Company8" },
    { id: 11, name: "folder1", tx: "Company6" },
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
            onpress={() =>
              navigation.navigate("Products", { company: item.tx })
            }
          />
        )}
        numColumns={2}
        ListFooterComponent={
          <Pallet name={"addfolder"} text={"Add"} onpress={() => handleAdd()} />
        }
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

export default StockScreen;
