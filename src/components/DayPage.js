import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import shareStyle from "../styles/shareStyle";
import hourStyle from "../styles/hourStyle";
import Icon from "react-native-vector-icons/MaterialIcons";
import Clock from "../images/clock.png";
import { Calendar } from "react-native-calendars";
import moment from "moment";

export default function DayPage() {
  const [markedDates, setMarkedDates] = useState({});
  const [selectedDates, setSelectedDates] = useState([]);

  const onDayPress = (day) => {
    const selectedDate = day.dateString;
    const formattedDate = moment(selectedDate).format("DD/MM/YYYY");

    setMarkedDates((prevMarkedDates) => {
      const newMarkedDates = { ...prevMarkedDates };

      if (newMarkedDates[selectedDate]) {
        delete newMarkedDates[selectedDate]; // Unmark the date if already marked
        setSelectedDates((prevSelectedDates) =>
          prevSelectedDates.filter((date) => date !== formattedDate)
        );
      } else {
        newMarkedDates[selectedDate] = {
          customStyles: {
            container: {
              backgroundColor: "blue",
            },
            text: {
              color: "white",
              fontWeight: "bold",
            },
          },
        };
        setSelectedDates((prevSelectedDates) => [
          ...prevSelectedDates,
          formattedDate,
        ]);
      }

      return newMarkedDates;
    });
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 50,
      }}
    >
      <Calendar
        onDayPress={onDayPress}
        markedDates={markedDates}
        markingType={"custom"}
      />
      <ScrollView
        style={{ marginTop: 20, width: "100%", paddingHorizontal: 20 }}
      >
        {selectedDates.length > 0 ? (
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
            Selected Dates:
          </Text>
        ) : null}
        {selectedDates.map((date, index) => (
          <Text key={index} style={{ fontSize: 14, marginTop: 5 }}>
            {date}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
