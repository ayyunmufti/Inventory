import React, { useRef, useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import FlashMessage, { showMessage } from "react-native-flash-message";

import Icon from "../components/Icon";
import Item from "../components/Item";
import MyModal from "../components/MyModal";
import RightAction from "../components/RightAction";
import Seperator from "../components/Seperator";
import colors from "../config/colors";
import DStyles from "../config/DStyles";

import DetailsScreen from "./DetailsScreen";

function ProductsScreen({ navigation, route }) {
  const d = [
    {
      id: 1,
      price: 40,
      name: "Night Stand",
      company: "Company8",
      quantity: 50,
      img: require("../assets/night.jpg"),
      sold: 100,
    },
    {
      id: 2,
      price: 100,
      name: "chair",
      company: "Company3",
      quantity: 10,
      img: require("../assets/chair.jpg"),
      sold: 100,
    },
    {
      id: 3,
      price: 100,
      name: "fan",
      company: "Company4",
      quantity: 10,
      img: require("../assets/download.jpg"),
      sold: 100,
    },
    {
      id: 4,
      name: "Ac",
      price: 100,
      company: "Company4",
      quantity: 10,
      img: require("../assets/download.jpg"),
      sold: 100,
    },
    {
      id: 8,
      name: "tv",
      price: 100,
      company: "Company6",
      quantity: 10000000,
      img: require("../assets/download.jpg"),
      sold: 100,
    },
    {
      id: 7,
      name: "Couch",
      price: 100,
      company: "Company1",
      quantity: 10,
      img: require("../assets/download.jpg"),
      sold: 100,
    },
    {
      id: 6,
      name: "Light",
      price: 200,

      company: "Company1",
      quantity: 10,
      img: require("../assets/download.jpg"),
      sold: 1013,
    },
  ];

  if (route.params) {
    const m = d.filter((n) => n.company == route.params.company);
    var [data, setdata] = useState(m);
  } else {
    var [data, setdata] = useState(d);
  }

  const HandleDelete = (i) => {
    setdata(data.filter((n) => n.id !== i));
  };

  const [visiblemodel, setmodalvisible] = useState(false);
  const [updatedData, setupdateddata] = useState({});
  const flash1 = useRef("flash1");

  const handleAdd = (v) => {
    v["id"] = Number(v["Pid"]);
    delete v["Pid"];
    v["price"] = Number(v["price"]);
    v["quantity"] = Number(v["quantity"]);

    v["sold"] = Number(v["sold"]);

    data.push(v);
  };
  const Handleupdate = (z) => {
    const v = { ...z };
    v["Pid"] = v["id"].toString();

    v["price"] = v["price"].toString();
    v["quantity"] = v["quantity"].toString();
    v["sold"] = v["sold"].toString();
    delete v["id"];
    delete v["img"];
    setupdateddata(v);
    setmodalvisible(true);
  };
  const onPressUpdate = (v) => {
    // let z = data.filter((n) => n.id == v.Pid);
    // z = { ...[...z] };
    const r = data.findIndex((n) => n.id == v.Pid);
    //z[0];
    v["Pid"] = Number(v["Pid"]);
    v["id"] = v["Pid"];
    delete v["Pid"];
    delete v["details"];
    v["price"] = Number(v["price"]);
    v["quantity"] = Number(v["quantity"]);
    v["sold"] = Number(v["sold"]);

    data[r] = v;
    setdata(data);
    setmodalvisible(false);
    setupdateddata({});
    showMessage({
      message: "Updated",
      description: `name: ${data[r].name} 
      id:   ${data[r].id}`,
      type: "success",
      color: "black",
    });
  };
  //setvisibleRightAction(true);
  return (
    <>
      <View style={styles.container}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Item
              name={item.name}
              description={item.company}
              quanty={item.quantity}
              img={item.img}
              RightAction={() => (
                <RightAction
                  doDelete={() => HandleDelete(item.id)}
                  doUpate={() => Handleupdate(item)}
                />
              )}
              onPress={() =>
                navigation.navigate("Details", {
                  Pid: item.id,
                  name: item.name,
                  company: item.company,
                  quantity: item.quantity,
                  img: item.img,
                  price: item.price,
                  sold: item.sold,
                })
              }
            ></Item>
          )}
          ItemSeparatorComponent={Seperator}
        />
        {!route.params && (
          <Icon
            Aname="plus"
            backcolor={colors.tomato}
            style={DStyles.plusicon}
            size={55}
            onPress={() => setmodalvisible(true)}
          />
        )}
      </View>
      <MyModal
        visiblemodel={visiblemodel}
        animationType="slide"
        onPressclose={() => {
          setmodalvisible(false);
          setupdateddata({});
        }}
        id={1}
        SubmitAdd={(v) => handleAdd(v)}
        onPressUpdate={(v) => onPressUpdate(v)}
        UpdateItemPlacehold={updatedData}
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

export default ProductsScreen;

// {
//   name: "",
//   price: "",
//   Pid: "",
//   details: "",
//   company: "",
//   quantity: "",
//   sold: "",
// }
