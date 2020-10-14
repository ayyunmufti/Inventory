import React, { useRef, useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import Icon from "../components/Icon";
import Item from "../components/Item";
import MyModal from "../components/MyModal";
import RightAction from "../components/RightAction";
import Seperator from "../components/Seperator";
import colors from "../config/colors";
import DStyles from "../config/DStyles";
import * as yup from "yup";
import FlashMessage, { showMessage } from "react-native-flash-message";

const validationSchema2 = yup.object().shape({
  name: yup.string().required().label("Name1"),
  number: yup.string().required().min(11).label("Number"),
});
const initialValues = { name: "", number: "" };

function SuppliersScreen({ navigation }) {
  const d = [
    {
      name: "king",
      number: "03246102999",

      img: require("../assets/im.jpg"),
    },
    {
      name: "chair",
      number: "032461029946",

      img: require("../assets/im.jpg"),
    },
  ];
  const [data, setdata] = useState(d);
  const [visiblemodel, setmodalvisible] = useState(false);
  const [updateddata, setupdateddata] = useState(false);
  const flash1 = useRef("flash1");

  const HandleDelete = (i) => {
    setdata(data.filter((n) => n.number !== i));
  };
  const handleAdd = (v) => {
    v = { name: v["name"], number: v["number"] };

    d.push(v);
    setdata(d);
  };
  const Handleupdate = (z) => {
    const v = { ...z };

    setupdateddata(v);
    setmodalvisible(true);
  };
  const onPressUpdate = (v) => {
    const i = d.findIndex((n) => n.number == v.number);

    data[i] = v;
    console.log(i);
    setdata(data);
    setmodalvisible(false);
    showMessage({
      message: "Updated",
      description: `name: ${data[i].name} 
      id:   ${data[i].number}`,
      type: "success",
      color: "black",
    });
    setupdateddata({});
  };
  return (
    <>
      <View style={styles.container}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.number.toString()}
          renderItem={({ item }) => (
            <Item
              name={item.name}
              description={item.number}
              img={item.img}
              RightAction={() => (
                <RightAction
                  doDelete={() => HandleDelete(item.number)}
                  doUpate={() => Handleupdate(item)}
                />
              )}
              onPress={() =>
                navigation.navigate("Details", {
                  img: item.img,
                  name: item.name,
                  number: item.number,
                })
              }
            ></Item>
          )}
          ItemSeparatorComponent={Seperator}
        />
        <Icon
          Aname="plus"
          backcolor={colors.tomato}
          style={DStyles.plusicon}
          size={55}
          onPress={() => setmodalvisible(true)}
        />
      </View>
      <MyModal
        visiblemodel={visiblemodel}
        animationType="slide"
        onPressclose={() => {
          setmodalvisible(false);
          setupdateddata({});
        }}
        SubmitAdd={(v) => handleAdd(v)}
        onPressUpdate={(v) => onPressUpdate(v)}
        id={false}
        UpdateItemPlacehold={updateddata}
        validationSchema={validationSchema2}
        initialValues={initialValues}
      />
      <FlashMessage ref={flash1} position="top" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SuppliersScreen;
