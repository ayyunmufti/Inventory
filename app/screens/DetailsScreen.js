import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import DetailBar from "../components/DetailBar";
import Icon from "../components/Icon";
import colors from "../config/colors";

function DetailsScreen({
  img = require("../assets/download.jpg"),
  name = "Furniturelkl",
  price = 100,
  details = "Details...",
  navigation,
  route,
}) {
  const O = route.params;

  return (
    <>
      <StatusBar backgroundColor={"transparent"} />
      <View style={styles.container}>
        <Image source={O.img} style={styles.im} resizeMode="cover" />
        <View style={styles.Nbox}>
          <Text numberOfLines={2} style={styles.txt}>
            {O.name}
          </Text>
          <Text numberOfLines={1} style={styles.txt2}>
            {O.price && "$" + O.price}
            {O.number && O.number}
          </Text>
          {O.number && (
            <Icon
              Aname={"phone"}
              size={50}
              style={styles.icon}
              backcolor={"lime"}
            />
          )}
          {O.number && (
            <Icon
              Aname={"message1"}
              size={50}
              style={styles.icon2}
              backcolor={"royalblue"}
            />
          )}
        </View>
        <View style={styles.detilsbox}>
          <Text style={styles.detilstxt} numberOfLines={3}>
            {details}
          </Text>
        </View>
        {O.Pid && (
          <DetailBar
            label={Object.keys(O)[0]}
            exp={O.Pid}
            style={{
              fontSize: O.Pid.toString().length > 10 ? 15 : 20,
            }}
          />
        )}
        {O.company && (
          <DetailBar
            label={Object.keys(O)[2]}
            exp={O.company}
            style={{
              fontSize: O.company.length > 8 ? 13 : 20,
            }}
          />
        )}
        {O.quantity && (
          <DetailBar
            label={Object.keys(O)[3]}
            exp={O.quantity}
            style={{
              fontSize: O.quantity.length > 10 ? 15 : 20,
            }}
          />
        )}
        {O.sold && (
          <DetailBar
            label={Object.keys(O)[6]}
            exp={O.sold}
            style={{
              fontSize: O.sold.length > 10 ? 15 : 20,
            }}
          />
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.lightgray },
  im: { width: "100%", height: 280 },
  Nbox: { backgroundColor: colors.lightred },
  txt: { padding: 3, fontSize: 20, paddingLeft: 10 },
  txt2: {
    fontSize: 15,
    paddingLeft: 10,

    color: colors.tomato,
  },
  detilsbox: {
    backgroundColor: colors.white,
    borderRadius: 5,
    margin: 5,
    marginBottom: 0,
  },
  detilstxt: { color: "gainsboro", fontStyle: "italic" },
  icon: {
    position: "absolute",
    right: 70,
    top: 5,
    borderRadius: 10,
  },
  icon2: {
    position: "absolute",
    right: 10,
    top: 5,
    borderRadius: 10,
  },
});

export default DetailsScreen;
