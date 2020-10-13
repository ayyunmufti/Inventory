import { useFormikContext } from "formik";
import React from "react";
import { View, StyleSheet, Button } from "react-native";
import colors from "../config/colors";

function SubmitButton({ title = "Add" }) {
  const { handleSubmit } = useFormikContext();
  return (
    <View style={styles.container}>
      <Button
        title={title}
        onPress={handleSubmit}
        color={colors.tomato}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { width: 320 },
});

export default SubmitButton;
