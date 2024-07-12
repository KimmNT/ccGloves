import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Modal,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import shareStyle from "../styles/shareStyle";
import hourStyle from "../styles/hourStyle";
import Icon from "react-native-vector-icons/MaterialIcons";
import Clock from "../images/clock.png";
import { Calendar } from "react-native-calendars";
import moment from "moment";
import DurationModals from "./Models/DurationModals";
import StartTimeModal from "./Models/StartTimeModal";

export default function HourPage({ navigation }) {
  const [selectedDate, setSelectedDate] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [starTimeModalVisible, setStartTimeModalVisible] = useState(false);
  const [markedDates, setMarkedDates] = useState({});
  const [duration, setDuration] = useState(3);
  const [startTime, setStartTime] = useState(0);
  const [paymentCount, setPaymentCount] = useState(0);

  useEffect(() => {
    const date = new Date();
    const hour = date.getHours();

    if (hour > 7 && hour < 22) {
      setStartTime(hour + 1);
    }
  }, []);

  useEffect(() => {
    setPaymentCount(duration * 3000);
  }, [duration]);

  const onDayPress = (day) => {
    const selectedDay = moment(day.dateString);
    const currentDay = moment().startOf("day"); // Get current day without time

    if (selectedDay.isBefore(currentDay)) {
      Alert.alert("Invalid Date", "You cannot select a date in the past.");
      return;
    }

    const formattedDate = selectedDay.format("DD/MM/YYYY");
    setSelectedDate(formattedDate);

    setMarkedDates({
      [day.dateString]: {
        selected: true,
        selectedColor: "blue",
        customStyles: {
          container: {
            backgroundColor: "#F45050",
          },
          text: {
            color: "white",
            fontWeight: "bold",
          },
        },
      },
    });
  };

  const handleSelectDuration = (number) => {
    setDuration(number);
  };
  const handleSelectStartTime = (number) => {
    setStartTime(number);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={shareStyle.container}
      keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
    >
      <View style={shareStyle.content}>
        <View style={shareStyle.navbar}>
          <TouchableOpacity
            style={shareStyle.navbar__icon}
            onPress={() => navigation.goBack()}
          >
            <View style={shareStyle.navbar__icon_container}>
              <Icon name="arrow-back" style={shareStyle.icon} />
            </View>
          </TouchableOpacity>
          <Text style={shareStyle.navbar__title}>Create an order</Text>
        </View>
        <View style={shareStyle.body}>
          <View style={hourStyle.hour__container}>
            <View style={hourStyle.hour__headline}>
              <Image source={Clock} />
              <View style={hourStyle.headline_text}>
                <Text style={hourStyle.item}>Hourly cleaning services</Text>
                <Text style={hourStyle.item}>3000¥/h (at least 3hrs)</Text>
                <Text style={hourStyle.item}>Working time: 7AM - 10PM</Text>
              </View>
            </View>
            <View style={hourStyle.hour__calendar}>
              <Calendar
                onDayPress={onDayPress}
                markedDates={markedDates}
                markingType={"custom"}
              />
            </View>
            {selectedDate !== "" ? (
              <View style={hourStyle.hour__time}>
                <Text style={hourStyle.time__headline}>
                  Choose working hours
                </Text>
                <View style={hourStyle.time__picking}>
                  <TouchableOpacity
                    onPress={() => {
                      setModalVisible(true);
                      setStartTime(0);
                    }}
                    style={hourStyle.picking__item}
                  >
                    <Text style={hourStyle.picking__title}>Duration</Text>
                    <View style={hourStyle.picking__line}></View>
                    <Text style={hourStyle.picking__input}>{duration} hrs</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => setStartTimeModalVisible(true)}
                    style={hourStyle.picking__item}
                  >
                    <Text style={hourStyle.picking__title}>Start time</Text>
                    <View style={hourStyle.picking__line}></View>
                    <Text style={hourStyle.picking__input}>{startTime}H</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ) : (
              <></>
            )}
          </View>
        </View>
      </View>
      {startTime !== 0 && selectedDate ? (
        <View style={shareStyle.btn__value}>
          <View style={shareStyle.btn__value_content}>
            <Text style={shareStyle.value__text}>{paymentCount}¥</Text>
            <TouchableOpacity style={shareStyle.value__icon_container}>
              <Icon name="arrow-forward" style={shareStyle.value__icon} />
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <></>
      )}
      <DurationModals
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        selectedDuration={handleSelectDuration}
        startTimeValue={startTime}
      />
      <StartTimeModal
        modalVisible={starTimeModalVisible}
        setModalVisible={setStartTimeModalVisible}
        selectedStartTime={handleSelectStartTime}
        durationValue={duration}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({});
