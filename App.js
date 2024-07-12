import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "./src/components/HomePage";
import DetailPage from "./src/components/DetailPage";
import Loading from "./src/components/Loading";
import HourPage from "./src/components/HourPage";
import DayPage from "./src/components/DayPage";
<<<<<<< HEAD
import Testing from "./src/Test/Testing";
=======
import OrderDetail from "./src/components/OrderDetail";
>>>>>>> duyDev

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Testing" component={Testing} />
        <Stack.Screen name="Loading" component={Loading} />
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Detail" component={DetailPage} />
        <Stack.Screen name="HourOrder" component={HourPage} />
        <Stack.Screen name="DayOrder" component={DayPage} />
        <Stack.Screen name="OrderDetail" component={OrderDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
