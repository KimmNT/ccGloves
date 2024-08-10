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
import React, { act, useEffect, useState } from "react";
import shareStyle from "../styles/shareStyle";
import completedStyle from "../styles/completedStyle";

import completedIcon from "../images/checked.png";

export default function CompletedPage({ navigation, route }) {
  const { currentPrice, userInfo, orderDate, roomSize, orderID } =
    route.params || [];

  const handleNavigate = () => {
    navigation.navigate("Home");
  };
  return (
    <View style={shareStyle.container}>
      <View style={shareStyle.content}>
        <View style={[shareStyle.navbar, shareStyle.navbar__one]}>
          <Text style={shareStyle.navbar__title}>Order Completed!</Text>
        </View>
        <View style={shareStyle.body}>
          <View style={completedStyle.completed__container}>
            <Text style={completedStyle.completed__headline}>
              Thank you for choosing us!
            </Text>
            <Text style={completedStyle.completed__orderID}>
              Your order ID: #{orderID}
            </Text>
            <Image source={completedIcon} />
            <Text style={completedStyle.completed__text}>
              We'll be in touch shortly to confirm your order
            </Text>
            <TouchableOpacity
              style={completedStyle.completed__btn_container}
              onPress={handleNavigate}
            >
              <View style={completedStyle.completed__btn}>
                <Text style={completedStyle.completed__btn_text}>
                  back to home
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
