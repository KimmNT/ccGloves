import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import shareStyle from "../styles/shareStyle";
import homeStyle from "../styles/homeStyle";
import detailStyle from "../styles/detailStyle";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function DetailPage({ navigation, route }) {
  const [navActive, setNavActive] = useState(0);
  const [number, setNumber] = useState("");
  const [text, setText] = useState("");
  const hideKeyboard = () => {
    Keyboard.dismiss();
  };
  const handleChange = (text) => {
    // Use a regex to ensure only numbers are allowed
    if (/^\d*$/.test(text)) {
      setNumber(text);
    }
  };
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
                  <Text
                    style={[
                      navActive === 0
                        ? detailStyle.text__active
                        : detailStyle.text__inactive,
                    ]}
                    onPress={() => setNavActive(0)}
                  >
                    Order ID
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    navActive === 1
                      ? detailStyle.btn__active
                      : detailStyle.btn__inactive,
                    detailStyle.detail__btn,
                  ]}
                  onPress={() => setNavActive(1)}
                >
                  <Text
                    style={[
                      navActive === 1
                        ? detailStyle.text__active
                        : detailStyle.text__inactive,
                    ]}
                    onPress={() => setNavActive(1)}
                  >
                    Phone number
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={detailStyle.detail__containerInput}>
                <View style={detailStyle.detail__hearderInput}>
                  <View>
                    {navActive === 0 ? (
                      <TextInput
                        style={detailStyle.detail__input}
                        placeholder="Type your order #ID"
                        onChangeText={(newText) => setText(newText)}
                      ></TextInput>
                    ) : (
                      <TextInput
                        style={detailStyle.detail__input}
                        placeholder="Type your phone number"
                        keyboardType="numeric"
                        onChangeText={handleChange}
                      ></TextInput>
                    )}
                  </View>
                </View>
                <TouchableOpacity
                  style={detailStyle.search__icon_container}
                  title="Hide Keyboard"
                  onPress={hideKeyboard}
                >
                  <Icon name="search" style={detailStyle.search__icon} />
                </TouchableOpacity>
              </View>
              <Text style={homeStyle.group__headline}>Your orders list</Text>
              <View style={detailStyle.orderBox}>
                <View style={detailStyle.orderBox_name}>
                  <Text style={detailStyle.orderBox__text}>Order ID</Text>
                  <Text style={detailStyle.orderBox__text}>Service</Text>
                  <Text style={detailStyle.orderBox__text}>Status</Text>
                </View>
              </View>
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
