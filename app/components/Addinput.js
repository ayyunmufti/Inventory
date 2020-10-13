import { useFormikContext } from "formik";
import React from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";

import colors from "../config/colors";

function Addinput({ placeholder = "NA", updateText, title, ...otherprops }) {
  const {
    handleChange,

    errors,
    setFieldTouched,
    touched,
  } = useFormikContext();

  return (
    <>
      <View style={styles.container}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={colors.mediumgray}
          style={styles.txt}
          onChangeText={handleChange(title)}
          onBlur={() => setFieldTouched(title)}
          defaultValue={updateText}
          {...otherprops}
        ></TextInput>
      </View>
      {errors[title] && touched[title] && (
        <Text style={styles.eror}>{errors[title]}</Text>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 45,
    backgroundColor: colors.white,
    borderRadius: 10,
    paddingHorizontal: 10,
    justifyContent: "center",
    marginVertical: 5,
  },
  txt: { fontSize: 20, fontStyle: "italic" },
  eror: { fontSize: 7, color: "red", alignSelf: "flex-start", paddingLeft: 10 },
});

export default Addinput;
