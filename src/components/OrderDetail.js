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
import orderDetailStyle from "../styles/orderDetailStyle";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function OrderDetail({ navigation, route }) {
  const { orderDetail } = route.params;

  const statusStyles = {
    0: {
      background: orderDetailStyle.pending,
      value: orderDetailStyle.value__pending,
      text: "Waiting to confirm",
      icon: "schedule",
    },
    1: {
      background: orderDetailStyle.working,
      value: orderDetailStyle.value__working,
      text: "Confirmed",
      icon: "check",
    },
    2: {
      background: orderDetailStyle.working,
      value: orderDetailStyle.value__working,
      text: "Working",
      icon: "cleaning-services",
    },
    3: {
      background: orderDetailStyle.completed,
      value: orderDetailStyle.value__completed,
      text: "Done",
      icon: "done-all",
    },
  };

  const { background, value, text, icon } =
    statusStyles[orderDetail.status] || statusStyles[2];

  const handleNavigateToReview = () => {
    navigation.navigate("Review", { orderDetail: orderDetail });
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
          <Text style={shareStyle.navbar__title}>Order Detail</Text>
        </View>
        <View style={shareStyle.body}>
          <View style={orderDetailStyle.od__container}>
            <View style={orderDetailStyle.od__headline}>
              <View style={orderDetailStyle.od__headline_item}>
                <Text style={orderDetailStyle.od__title}>Order ID:</Text>
                <Text style={orderDetailStyle.od__value}>
                  #{orderDetail.id}
                </Text>
              </View>
              <View style={orderDetailStyle.od__headline_item}>
                <Text style={orderDetailStyle.od__title}>Service:</Text>
                {orderDetail.type === 0 ? (
                  <Text style={orderDetailStyle.od__title}>Hire in Hours</Text>
                ) : orderDetail.type === 1 ? (
                  <Text style={orderDetailStyle.od__title}>Hire in Days</Text>
                ) : (
                  <Text style={orderDetailStyle.od__title}>
                    Hire with Combo
                  </Text>
                )}
              </View>
              <View style={orderDetailStyle.od__headline_item}>
                <Text style={orderDetailStyle.od__title}>Status:</Text>
                <View style={[orderDetailStyle.od__background, background]}>
                  <Text style={[orderDetailStyle.od__status_value, value]}>
                    {text}
                  </Text>
                  <Icon
                    name={icon}
                    style={[orderDetailStyle.od__status_value, value]}
                  />
                </View>
              </View>
              <View style={orderDetailStyle.od__headline_item}>
                <Text style={orderDetailStyle.od__title}>Total price:</Text>
                <Text style={orderDetailStyle.od__title}>
                  {orderDetail.total.toLocaleString("de-DE")}¥
                </Text>
              </View>
              {text === "Done" && orderDetail.ratingState === 0 ? (
                <TouchableOpacity
                  style={orderDetailStyle.od__rating}
                  onPress={handleNavigateToReview}
                >
                  <Text style={orderDetailStyle.od__rating_text}>
                    Leave a review to receive a coupon for your next order!
                  </Text>
                </TouchableOpacity>
              ) : (
                <></>
              )}
            </View>
            <View style={orderDetailStyle.od__content}>
              {orderDetail.workingTime.map((item, index) => (
                <View style={orderDetailStyle.content__item} key={index}>
                  <View style={orderDetailStyle.item__value}>
                    <Text style={orderDetailStyle.title}>Date</Text>
                    <Text style={orderDetailStyle.value}>
                      {item.selectedDate}
                    </Text>
                  </View>
                  <View style={orderDetailStyle.item__value}>
                    <Text style={orderDetailStyle.title}>Duration</Text>
                    <Text style={orderDetailStyle.value}>
                      {item.duration} hours
                    </Text>
                  </View>
                  <View style={orderDetailStyle.item__value}>
                    <Text style={orderDetailStyle.title}>Start time</Text>
                    <Text style={orderDetailStyle.value}>
                      {item.startTime}:00 - {item.startTime + item.duration}:00
                    </Text>
                  </View>
                </View>
              ))}
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({});
