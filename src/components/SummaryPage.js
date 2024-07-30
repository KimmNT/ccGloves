import {
  Alert,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import shareStyle from "../styles/shareStyle";
import infoStyle from "../styles/infoStyle";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function SummaryPage({ navigation, route }) {
  const { currentPrice, userInfo } = route.params || [];

  console.log(userInfo);

  const createOrderId = (length) => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = "";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  console.log(createOrderId(10));
  return (
    <View style={shareStyle.container}>
      <View style={shareStyle.content}>
        <Text>{currentPrice}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
