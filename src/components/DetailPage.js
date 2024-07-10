import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import shareStyle from "../styles/shareStyle";
import homeStyle from "../styles/homeStyle";
import detailStyle from "../styles/detailStyle";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function DetailPage({ navigation, route }) {
  const [navActive, setNavActive] = useState(0);
  return (
    <View style={shareStyle.container}>
      <View style={shareStyle.content}>
        <View style={shareStyle.navbar}>
          <Text style={shareStyle.navbar__title}>Checking your order</Text>
        </View>
        <View style={shareStyle.body}>
          <View style={detailStyle.detail__container}>
            <View style={detailStyle.detail__header}>
              <View style={detailStyle.detail__headerButton}>
                <TouchableOpacity
                  style={[
                    navActive === 0
                      ? detailStyle.btn__active
                      : detailStyle.btn__inactive,
                    detailStyle.detail__btn,
                  ]}
                  onPress={() => setNavActive(0)}
                >
                  <Text style={detailStyle.detail__headerButtontext}>
                    OrderID
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={
                    navActive === 1
                      ? detailStyle.btn__active
                      : detailStyle.btn__inactive
                  }
                  onPress={() => setNavActive(1)}
                >
                  <Text style={detailStyle.detail__headerButtontext}>
                    Phone number
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={detailStyle.detail__hearderInput}></View>
            </View>
          </View>
        </View>
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
