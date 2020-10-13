import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/Swipeable";
import DStyles from "../config/DStyles";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function Item({
  name = "y",
  description,
  quanty,
  chev = "chevron-left",
  img = require("../assets/im.jpg"),
  RightAction,
  onPress,
}) {
  return (
    <View style={styles.ba}>
      <Swipeable renderRightActions={RightAction}>
        <TouchableOpacity onPress={onPress}>
          <View style={styles.container}>
            {img && <Image source={img} style={styles.im}></Image>}
            <View>
              <Text numberOfLines={1} style={DStyles.text}>
                {name}
              </Text>
              <Text numberOfLines={1} style={[DStyles.text, styles.txt]}>
                {description}
              </Text>
            </View>
            {quanty && (
              <Text numberOfLines={1} style={[DStyles.text, styles.qty]}>
                {"Qty:" + quanty}
              </Text>
            )}
            {chev && (
              <MaterialCommunityIcons
                name={chev}
                style={styles.chev}
                size={25}
              ></MaterialCommunityIcons>
            )}
          </View>
        </TouchableOpacity>
      </Swipeable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 60,
    width: "100%",
    backgroundColor: colors.lightred,
  },
  chev: { position: "absolute", right: 2, alignSelf: "center" },
  ba: { flex: 1, justifyContent: "center" },
  im: {
    height: 45,
    width: 45,
    borderRadius: 22,

    margin: 4,
    marginRight: 6,
  },
  txt: { fontSize: 10 },
  qty: {
    fontSize: 15,
    position: "absolute",
    left: 210,
    alignSelf: "center",
    maxWidth: 80,
  },
});

export default Item;
