import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Keyboard,
  Button,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import shareStyle from "../styles/shareStyle";
import homeStyle from "../styles/homeStyle";
import detailStyle from "../styles/detailStyle";
import Icon from "react-native-vector-icons/MaterialIcons";
export default function OrderDetail({ navigation, route }) {
  return (
    <View style={shareStyle.container}>
      <View style={shareStyle.content}>
        <View style={[shareStyle.navbar, shareStyle.navbar__two]}>
          <TouchableOpacity
            style={shareStyle.navbar__icon}
            onPress={() => navigation.goBack()}
          >
            <View style={shareStyle.navbar__icon_container}>
              <Icon name="arrow-back" style={shareStyle.icon} />
            </View>
          </TouchableOpacity>
          <Text style={shareStyle.navbar__title}>Order Detail</Text>
        </View>
        <View style={shareStyle.body}></View>
      </View>
      <View style={shareStyle.tab__container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="home" style={shareStyle.tab__icon}></Icon>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Detail")}>
          <Icon name="bookmark" style={shareStyle.tab__icon}></Icon>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({});
