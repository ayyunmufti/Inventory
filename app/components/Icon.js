import React from "react";
import { View, TouchableWithoutFeedback } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import colors from "../config/colors";

function Icon({
  name,
  size = 40,
  backcolor = "#000",
  iconcolor = "#fff",
  style,
  Aname,
  image,
  onPress,
}) {
  return (
    <View
      style={[
        {
          width: size,
          height: size,
          backgroundColor: backcolor,
          borderRadius: size / 1.5,
          justifyContent: "center",
          alignItems: "center",
        },
        style,
      ]}
    >
      {image && <Image source={image}></Image>}
      {name && <AntDesign name={name} color={iconcolor} size={size * 0.7} />}
      {Aname && (
        <TouchableWithoutFeedback onPress={onPress}>
          <AntDesign name={Aname} color={iconcolor} size={size * 0.7} />
        </TouchableWithoutFeedback>
      )}
    </View>
  );
}

export default Icon;
