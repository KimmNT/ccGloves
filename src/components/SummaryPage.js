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
import React, { useEffect, useState } from "react";
import shareStyle from "../styles/shareStyle";
import summaryStyle from "../styles/SummaryStyle";
import Icon from "react-native-vector-icons/MaterialIcons";
import OrderDetailModal from "./Models/OrderDetailModal";
import InformationDetailModal from "./Models/InformationDetailModals";

export default function SummaryPage({ navigation, route }) {
  const { currentPrice, userInfo, orderDate, roomSize, orderType } =
    route.params || [];

  const [orderId, setOrderId] = useState("");
  const [orderModalVisible, setOrderModalVisible] = useState(false);
  const [infoModalVisible, setInfoModalVisible] = useState(false);

  useEffect(() => {
    setOrderId(generateOrderID());
  }, []);

  const getRandomNumber = (min, max) => {
    const random = Math.random() * (max - min) + min;
    return parseInt(random);
  };

  const generateOrderID = () => {
    const date = new Date();
    const months = [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
    ];
    //for time
    const currentHour = date.getHours();
    const currentMinute = date.getMinutes();
    const currentSecond = date.getSeconds();
    const currentTime = `${currentHour}${currentMinute}${currentSecond}`;
    //for date
    const currentDay = date.getDate();
    const currentMonth = months[date.getMonth()];
    const currentYear = date.getFullYear().toString().substring(2, 4);
    const currentDate = `${currentMonth}${currentDay}${currentYear}`;

    const generatedID = `${currentTime}${currentDate}${getRandomNumber(
      0,
      1000
    )}`;

    return generatedID;
  };

  /*
  for generate a random string without matching
  get current time, ex: 132701
  get currrent day, ex: AUG1024
  generate random number from 0-1000: 500
  combine: AUG1024132701500
  */

  const handleNavigate = async () => {
    navigation.navigate("Payment", {
      orderType: orderType,
      currentPrice: currentPrice,
      userInfo: userInfo,
      orderDate: orderDate,
      roomSize: roomSize,
      orderID: orderId,
    });
  };

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
          <Text style={shareStyle.navbar__title}>Summary your order</Text>
        </View>
        <View style={shareStyle.body}>
          <View style={summaryStyle.summary__container}>
            <Text style={summaryStyle.order__id}>Order ID: #{orderId}</Text>
            <View style={summaryStyle.summary__item}>
              <TouchableOpacity
                style={summaryStyle.summary__btn}
                onPress={() => setOrderModalVisible(true)}
              >
                <Icon style={summaryStyle.btn__icon} name="shopping-bag" />
                <Text style={summaryStyle.btn__text}>Your order here!</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={summaryStyle.summary__btn}
                onPress={() => setInfoModalVisible(true)}
              >
                <Icon style={summaryStyle.btn__icon} name="person" />
                <Text style={summaryStyle.btn__text}>
                  Your information here!
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View style={shareStyle.btn__value}>
        <View style={shareStyle.btn__value_content}>
          <Text style={shareStyle.value__text}>{currentPrice}¥</Text>
          <TouchableOpacity
            style={shareStyle.value__icon_container}
            onPress={handleNavigate}
          >
            <Icon name="arrow-forward" style={shareStyle.value__icon} />
          </TouchableOpacity>
        </View>
      </View>
      <OrderDetailModal
        modalVisible={orderModalVisible}
        setModalVisible={setOrderModalVisible}
        orderDate={orderDate}
        orderType={orderType}
      />
      <InformationDetailModal
        modalVisible={infoModalVisible}
        setModalVisible={setInfoModalVisible}
        userInfo={userInfo}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
