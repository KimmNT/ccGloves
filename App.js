import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "./src/components/HomePage";
import DetailPage from "./src/components/DetailPage";
import Loading from "./src/components/Loading";
import HourPage from "./src/components/HourPage";
import DayPage from "./src/components/DayPage";
import Testing from "./src/Test/Testing";
import OrderDetail from "./src/components/OrderDetail";
import HouseSize from "./src/components/HouseSize";
import InfoPage from "./src/components/InfoPage";
import SummaryPage from "./src/components/SummaryPage";
import PaymentPage from "./src/components/PaymentPage";
import CompletedPage from "./src/components/CompletedPage";
import ReviewPage from "./src/components/ReviewPage";
import ReviewSuccess from "./src/components/ReviewSuccess";
import CustomeServices from "./src/components/CustomeServices";
import CustomeCreate from "./src/components/CustomeCreate";
import CustomCreateInfo from "./src/components/CustomCreateInfo";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="Testing" component={Testing} /> */}
        <Stack.Screen name="Loading" component={Loading} />
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Detail" component={DetailPage} />
        <Stack.Screen name="HourOrder" component={HourPage} />
        <Stack.Screen name="DayOrder" component={DayPage} />
        <Stack.Screen name="CustomOrder" component={CustomeServices} />
        <Stack.Screen name="CustomOrderCreate" component={CustomeCreate} />
        <Stack.Screen
          name="CustomOrderCreateInfo"
          component={CustomCreateInfo}
        />
        <Stack.Screen name="OrderDetail" component={OrderDetail} />
        <Stack.Screen name="HouseSize" component={HouseSize} />
        <Stack.Screen name="Info" component={InfoPage} />
        <Stack.Screen name="Summary" component={SummaryPage} />
        <Stack.Screen name="Payment" component={PaymentPage} />
        <Stack.Screen name="Completed" component={CompletedPage} />
        <Stack.Screen name="Review" component={ReviewPage} />
        <Stack.Screen name="ReviewSuccess" component={ReviewSuccess} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
