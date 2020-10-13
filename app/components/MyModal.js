import { useFormikContext } from "formik";
import React from "react";
import { View, StyleSheet, Button, Modal } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import colors from "../config/colors";
import AddModalSc from "./AddModalSc";
import Seperator from "./Seperator";

function MyModal({
  visiblemodel,
  animationType,
  SubmitAdd,
  onPressUpdate,
  onPressclose,
  id,
  UpdateItemPlacehold,
  validationSchema,
  initialValues,
}) {
  return (
    <Modal visible={visiblemodel} animationType={animationType}>
      <KeyboardAwareScrollView>
        <AddModalSc
          id={id}
          onPressclose={onPressclose}
          SubmitAdd={SubmitAdd}
          onPressUpdate={onPressUpdate}
          UpdateItemPlacehold={UpdateItemPlacehold}
          validationSchema={validationSchema}
          initialValues={initialValues}
        />

        <Seperator />
        <Button title="close" onPress={onPressclose}></Button>
      </KeyboardAwareScrollView>
    </Modal>
  );
}

export default MyModal;
