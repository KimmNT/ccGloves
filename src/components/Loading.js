import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import shareStyle from "../styles/shareStyle";
export default function Loading() {
  return (
    <View style={shareStyle.container}>
      <Text style={shareStyle.text}>Loading</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
