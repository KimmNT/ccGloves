import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import shareStyle from "../styles/shareStyle";
export default function Loading({ navigation }) {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Home")}
      style={shareStyle.container}
    >
      <Text style={shareStyle.text}>Loading</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
