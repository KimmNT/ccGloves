import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import shareStyle from "../styles/shareStyle";
import hourStyle from "../styles/hourStyle";
import houseSize from "../styles/houseSize";
import Icon from "react-native-vector-icons/MaterialIcons";
import HouseArea from "../images/houseSquare.png";

export default function HouseSize({ navigation, route }) {
  const { currentPrice, orderDate, orderType } = route.params || {};

  const [selectedRoom, setSelectedRoom] = useState(0);
  const [paymentCount, setPaymentCount] = useState(0);

  const roomValues = [
    { value: 10 },
    { value: 20 },
    { value: 30 },
    { value: 40 },
    { value: 50 },
    { value: 60 },
  ];

  const handleCalPayment = (value) => {
    setPaymentCount(value * 80 + currentPrice);
  };

  const handleNavigate = () => {
    navigation.navigate("Info", {
      orderType: orderType,
      currentPrice: paymentCount,
      orderDate: orderDate,
      roomSize: selectedRoom,
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
          <Text style={shareStyle.navbar__title}>House area</Text>
        </View>
        <View style={shareStyle.body}>
          <View style={hourStyle.hour__headline}>
            <Image source={HouseArea} />
            <View style={hourStyle.headline_text}>
              <Text style={hourStyle.item}>Price/m2: 80¥</Text>
              <Text style={hourStyle.item}>Minimum area: 10m2</Text>
              <Text style={hourStyle.item}>Maximum area: 60m2</Text>
            </View>
          </View>
          <View style={houseSize.room__container}>
            <Text style={houseSize.room__headline}>Room square</Text>
            <View style={houseSize.room__options}>
              {roomValues.map((room, index) => (
                <TouchableOpacity
                  style={[
                    houseSize.room__item,
                    selectedRoom === room.value
                      ? houseSize.room__selected
                      : houseSize.room__not_selected,
                  ]}
                  key={index}
                  onPress={() => {
                    setSelectedRoom(room.value);
                    handleCalPayment(room.value);
                  }}
                >
                  <Text
                    style={[
                      houseSize.room__item_value,
                      selectedRoom === room.value
                        ? houseSize.value__selected
                        : houseSize.value__not_selected,
                    ]}
                  >
                    {room.value}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
            <View style={houseSize.room__summary}>
              <Text style={houseSize.room__summary_value}>
                Total room area: {selectedRoom}m2 ({selectedRoom * 80}¥)
              </Text>
            </View>
          </View>
        </View>
      </View>
      {selectedRoom <= 0 ? (
        <></>
      ) : (
        <View style={shareStyle.btn__value}>
          <View style={shareStyle.btn__value_content}>
            <Text style={shareStyle.value__text}>{paymentCount}¥</Text>
            <TouchableOpacity
              style={shareStyle.value__icon_container}
              onPress={handleNavigate}
            >
              <Icon name="arrow-forward" style={shareStyle.value__icon} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
