import React from "react";

import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, HeaderTitle } from "@react-navigation/stack";
import PalletListScreen from "../screens/PalletListScreen";
import InputScreen from "../screens/InputScreen";

import ContactsScreen from "../screens/ContactsScreen";
import SuppliersScreen from "../screens/SuppliersScreen";
import CustomersScreen from "../screens/CustomersScreen";
import ExcelScreen from "../screens/ExcelScreen";
import StockScreen from "../screens/StockScreen";
import { StatusBar } from "expo-status-bar";
import ProductsScreen from "../screens/ProductsScreen";

import colors from "../config/colors";
import DStyles from "../config/DStyles";
import DetailsScreen from "../screens/DetailsScreen";

function Nav(props) {
  const stack = createStackNavigator();
  // "#F6F4F3" ,"#FFEEEB"
  return (
    <>
      <StatusBar />

      <NavigationContainer>
        <stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#F6F4F3" },
            headerTitleStyle: {
              fontFamily: DStyles.text.fontFamily,
              fontWeight: "900",
              fontSize: 21,
            },
          }}
        >
          <stack.Screen name="Home" component={PalletListScreen} />
          <stack.Screen name="Products" component={ProductsScreen} />
          <stack.Screen name="Contacts" component={ContactsScreen} />
          <stack.Screen name="Suppliers" component={SuppliersScreen} />
          <stack.Screen name="Customers" component={CustomersScreen} />
          <stack.Screen name="Excel" component={ExcelScreen} />
          <stack.Screen name="Stock" component={StockScreen} />
          <stack.Screen
            name="Details"
            component={DetailsScreen}
            options={{ headerShown: false }}
          />
        </stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default Nav;
