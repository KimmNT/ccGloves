import React, { useEffect, useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
  TextInput,
} from "react-native";
import shareStyle from "../styles/shareStyle";
import customCreateStyle from "../styles/customOrderCreateStyle";
import hourStyle from "../styles/hourStyle";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Calendar } from "react-native-calendars";
import moment from "moment";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

export default function CustomeCreate({ navigation, route }) {
  const { selectedService } = route.params || [];

  const [selectedDate, setSelectedDate] = useState("");
  const [isHolidaySelected, setIsHolidaySelected] = useState(false);
  const [markedDates, setMarkedDates] = useState({});

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

  const handleGetInfo = () => {
    navigation.navigate("CustomOrderCreateInfo", {
      selectedService: selectedService,
      selectedDate: selectedDate,
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
          <Text style={shareStyle.navbar__title}>Pick a day</Text>
        </View>
        <View style={shareStyle.body}>
          <View style={customCreateStyle.custom__create_container}>
            <View style={customCreateStyle.create__summary}>
              <Text style={customCreateStyle.create__summary_name}>
                {selectedService.name}
              </Text>
              <Text style={customCreateStyle.create__summary_detail}>
                {selectedService.detail}
              </Text>
            </View>
            <View style={hourStyle.hour__calendar}>
              <Calendar
                onDayPress={onDayPress}
                markedDates={markedDates}
                markingType={"custom"}
              />
            </View>
            {/* <View style={customCreateStyle.create__detail}>
              <TextInput
                placeholder="Please provide us with more details if possible."
                multiline
                value={orderDetail}
                onChange={(newText) => setOrderDetail(newText)}
                style={customCreateStyle.create__detail_value}
              />
            </View> */}
          </View>
        </View>
      </View>
      {selectedDate ? (
        <TouchableOpacity
          style={customCreateStyle.create__btn_container}
          onPress={handleGetInfo}
        >
          <View style={customCreateStyle.create__btn}>
            <Text style={customCreateStyle.create__btn_value}>next</Text>
          </View>
        </TouchableOpacity>
      ) : (
        <></>
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
