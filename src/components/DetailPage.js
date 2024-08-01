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

export default function DetailPage({ navigation, route }) {
  const [navActive, setNavActive] = useState(0);
  const [number, setNumber] = useState("");
  const [text, setText] = useState("");
  const [displayText, setDisplayText] = useState("");
  const hideKeyboard = () => {
    Keyboard.dismiss();
  };
  const handleChange = (text) => {
    // Use a regex to ensure only numbers are allowed
    if (/^\d*$/.test(text)) {
      setNumber(text);
    }
  };
  const handlePress = () => {
    hideKeyboard();
    setDisplayText(text);
  };
  return (
    <View style={shareStyle.container}>
      <View style={shareStyle.content}>
        <View style={[shareStyle.navbar, shareStyle.navbar__one]}>
          <Text style={shareStyle.navbar__title}>Checking your order</Text>
        </View>
        <View style={shareStyle.body}>
          <TouchableWithoutFeedback onPress={hideKeyboard}>
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
                          defaultValue={text}
                        ></TextInput>
                      ) : (
                        <TextInput
                          style={detailStyle.detail__input}
                          placeholder="Type your phone number"
                          keyboardType="numeric"
                          onChangeText={handleChange}
                          value={number}
                        ></TextInput>
                      )}
                    </View>
                  </View>
                  <TouchableOpacity
                    style={detailStyle.search__icon_container}
                    onPress={handlePress}
                  >
                    <Icon name="search" style={detailStyle.search__icon} />
                  </TouchableOpacity>
                </View>
                <Text style={homeStyle.group__headline}>Your orders list</Text>
                <TouchableOpacity
                  style={detailStyle.orderBox}
                  onPress={() => navigation.navigate("OrderDetail")}
                >
                  <View style={detailStyle.orderBox__name}>
                    <Text style={detailStyle.orderBox__textName}>Order ID</Text>
                    <Text style={detailStyle.orderBox__textName}>Service</Text>
                    <Text style={detailStyle.orderBox__textName}>Status</Text>
                  </View>
                  <View style={detailStyle.orderBox__data}>
                    <Text style={detailStyle.orderBox__textData}>
                      {displayText}
                    </Text>
                    <Text style={detailStyle.orderBox__textData}>
                      Hire in hour
                    </Text>
                    <Text style={detailStyle.orderBox__textData}>{number}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
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
