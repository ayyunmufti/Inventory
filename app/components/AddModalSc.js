import React, { useRef } from "react";
import { View, StyleSheet, Text, Image, Button, Alert } from "react-native";
import { TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import colors from "../config/colors";
import Addinput from "./Addinput";
import Icon from "./Icon";
import SubmitButton from "./SubmitButton";
import * as yup from "yup";
import Appform from "./Appform";
import FlashMessage, { showMessage } from "react-native-flash-message";

const validationSchema1 = yup.object().shape({
  name: yup.string().required().label("Name"),
  price: yup.string().required().label("Price"),

  details: yup.string(),
  Pid: yup.string().required().label("Product-Id"),
  company: yup.string().required().label("Company"),
  quantity: yup.string().required().label("Quantity"),
  sold: yup.string().label("Sold"),
});

function AddModalSc({
  id,
  SubmitAdd,
  UpdateItemPlacehold,
  onPressUpdate,
  validationSchema = validationSchema1,
  initialValues,
}) {
  const flash1 = useRef("flash1");
  const initvalues = {
    name: UpdateItemPlacehold.name || "",
    price: UpdateItemPlacehold.price || "",
    Pid: UpdateItemPlacehold.Pid || "",

    details: UpdateItemPlacehold.details || "",
    company: UpdateItemPlacehold.company || "",
    quantity: UpdateItemPlacehold.quantity || "",
    sold: UpdateItemPlacehold.sold || "",
  };

  if (initialValues) {
    initialValues.number = "" || UpdateItemPlacehold.number;
    initialValues.name = "" || UpdateItemPlacehold.name;
  } else initialValues = initvalues;

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => console.log("ts")} style={styles.imbox}>
        <Icon
          name="picture"
          backcolor="transparent"
          iconcolor={colors.mediumgray}
          size={150}
        ></Icon>
      </TouchableOpacity>
      {/* <TouchableOpacity
          onPress={() => console.log("hi")}
          style={styles.iconbox}
        >
          <Image
            source={require("../assets/im.jpg")}
            style={styles.iconbox}
          ></Image>
        </TouchableOpacity> */}
      <Appform
        initialValues={initialValues}
        onSubmit={(v) => {
          if (UpdateItemPlacehold.Pid || UpdateItemPlacehold.number) {
            onPressUpdate(v);
          } else {
            SubmitAdd(v);
          }
        }}
        validationSchema={validationSchema}
      >
        <Addinput
          placeholder="Name"
          title="name"
          updateText={UpdateItemPlacehold.name}
        />
        {!id && (
          <Addinput
            placeholder="Number"
            title="number"
            keyboardType="phone-pad"
            updateText={UpdateItemPlacehold.number}
          />
        )}
        {id && (
          <>
            <Addinput
              placeholder="Price"
              title="price"
              keyboardType="phone-pad"
              updateText={UpdateItemPlacehold.price}
            />
            <Addinput
              placeholder="Product-Id"
              title="Pid"
              updateText={UpdateItemPlacehold.Pid}
              editable={UpdateItemPlacehold.Pid ? false : true}
            />
            <Addinput
              placeholder="Company"
              title="company"
              updateText={UpdateItemPlacehold.company}
            />
            <Addinput
              placeholder="Quantity"
              title="quantity"
              keyboardType="phone-pad"
              updateText={UpdateItemPlacehold.quantity}
            />
            <Addinput
              placeholder="Sold"
              title="sold"
              keyboardType="phone-pad"
              updateText={UpdateItemPlacehold.sold}
            />
          </>
        )}
        <Addinput
          title="details"
          placeholder="Details"
          updateText={UpdateItemPlacehold.details}
        />
        <SubmitButton
          title={
            UpdateItemPlacehold.Pid || UpdateItemPlacehold.number
              ? "update"
              : "Add"
          }
        />
      </Appform>
      <FlashMessage
        ref={flash1}
        position="center"
        style={{ height: 3 }}
        titleStyle={{ paddingBottom: 10 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.lightgray,
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  imbox: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 160,
    backgroundColor: colors.white,
    borderRadius: 10,
  },
});

export default AddModalSc;
