import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
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
  const [isHolidaySelected, setIsHolidaySelected] = useState(false);

  const holidayArray = [
    {
      name: "Testing Day",
      date: "15/08",
    },
    {
      name: "Christmas Day",
      date: "25/12",
    },
    {
      name: "Lunar New Year",
      date: "31/12",
    },
    {
      name: "Lunar New Year",
      date: "01/01",
    },
    {
      name: "Lunar New Year",
      date: "02/01",
    },
    {
      name: "Lunar New Year",
      date: "03/01",
    },
  ];

  useEffect(() => {
    const date = new Date();
    const hour = date.getHours();

    if (hour > 7 && hour < 19) {
      setStartTime(hour + 4);
    }
  }, []);

  useEffect(() => {
    if (isHolidaySelected) {
      setPaymentCount(duration * 3000 + duration * 3000 * 0.25);
    } else {
      setPaymentCount(duration * 3000);
    }
  }, [duration, isHolidaySelected]);

  const isHoliday = (date) => {
    const formattedDate = moment(date).format("DD/MM");
    const holiday = holidayArray.find(
      (holiday) => holiday.date === formattedDate
    );
    return holiday;
  };

  const onDayPress = (day) => {
    const selectedDay = moment(day.dateString);
    const currentDay = moment().startOf("day"); // Get current day without time
    const currentTime = new Date();

    if (selectedDay.isBefore(currentDay)) {
      Alert.alert("Invalid Date", "You cannot select a date in the past.");
      return;
    }
    if (selectedDay.isSame(currentDay, "day") && currentTime.getHours() >= 19) {
      Alert.alert("We are closed", "Please choose another day!");
      return;
    }
    const holiday = isHoliday(day.dateString);
    if (holiday) {
      setIsHolidaySelected(true);
      Alert.alert(
        `Today is ${holiday.name}`,
        "We will add 25% to the total invoice for holiday occasions."
      );
    } else {
      setIsHolidaySelected(false);
    }

    const formattedDate = selectedDay.format("DD/MM/YYYY");
    setSelectedDate(formattedDate);

    setMarkedDates({
      [day.dateString]: {
        selected: true,
        selectedColor: "#141E46",
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

  const handleNavigateToHouseSize = () => {
    navigation.navigate("Info", {
      orderType: 0,
      currentPrice: paymentCount,
      orderDate: [
        {
          selectedDate: selectedDate,
          startTime: startTime,
          duration: duration,
        },
      ],
    });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={shareStyle.container}
      keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
    >
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
                    <Text style={hourStyle.picking__input}>{startTime}:00</Text>
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
            <TouchableOpacity
              style={shareStyle.value__icon_container}
              onPress={handleNavigateToHouseSize}
            >
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
        selectedDate={selectedDate}
      />
      <StartTimeModal
        modalVisible={starTimeModalVisible}
        setModalVisible={setStartTimeModalVisible}
        selectedStartTime={handleSelectStartTime}
        durationValue={duration}
        selectedDate={selectedDate}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({});
