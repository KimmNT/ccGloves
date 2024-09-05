import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import shareStyle from "../styles/shareStyle";
import hourStyle from "../styles/hourStyle";
import dayStyle from "../styles/dayStyle";
import Icon from "react-native-vector-icons/MaterialIcons";
import CalendarIcon from "../images/calendar.png";
import { Calendar } from "react-native-calendars";
import moment from "moment";
import DurationModals from "./Models/DurationModals";
import StartTimeModal from "./Models/StartTimeForDaysModal";

export default function DayPage({ navigation }) {
  const [markedDates, setMarkedDates] = useState({});
  const [selectedDates, setSelectedDates] = useState([]);
  const [isHolidaySelected, setIsHolidaySelected] = useState(false);
  const [paymentCount, setPaymentCount] = useState(0);
  const [duration, setDuration] = useState(7);
  const [startTime, setStartTime] = useState(7);
  const [modalVisible, setModalVisible] = useState(false);
  const [starTimeModalVisible, setStartTimeModalVisible] = useState(false);
  const [currentDateIndex, setCurrentDateIndex] = useState(null); // State to store current index
  const [totalDuration, setTotalDuration] = useState(0);
  const [holidayValue, setHolidayValue] = useState("");

  const holidayArray = [
    { name: "Testing Day", date: "28/08" },
    { name: "Christmas Day", date: "25/12" },
    { name: "Lunar New Year", date: "31/12" },
    { name: "Lunar New Year", date: "01/01" },
    { name: "Lunar New Year", date: "02/01" },
    { name: "Lunar New Year", date: "03/01" },
  ];

  useEffect(() => {
    const isHoliday = (date) => {
      const formattedDate = moment(date, "DD/MM/YYYY").format("DD/MM");
      return holidayArray.some((holiday) => holiday.date === formattedDate);
    };

    // Calculate the total duration
    const totalDuration = selectedDates.reduce(
      (total, item) => total + item.duration,
      0
    );

    // Check if any selected date is a holiday
    const holidayDetected = selectedDates.some((item) =>
      isHoliday(item.selectedDate)
    );

    // Adjust total duration if a holiday is detected
    holidayDetected
      ? setPaymentCount(totalDuration * 3000 + 7000)
      : setPaymentCount(totalDuration * 3000);

    // Set the total duration
    // setTotalDuration(adjustedDuration);
  }, [selectedDates]);

  useEffect(() => {
    if (isHolidaySelected) {
      Alert.alert(
        `Today is ${holidayValue}`,
        "An additional 7000¥ will be charged for each holiday you select."
      );
    }
  }, [totalDuration, isHolidaySelected]);

  const isHoliday = (date) => {
    const formattedDate = moment(date).format("DD/MM");
    return holidayArray.find((holiday) => holiday.date === formattedDate);
  };

  const onDayPress = (day) => {
    const selectedDate = day.dateString;
    const formattedDate = moment(selectedDate).format("DD/MM/YYYY");
    const selectedDay = moment(day.dateString);
    const currentDay = moment().startOf("day");

    const holiday = isHoliday(day.dateString);
    if (holiday) {
      setIsHolidaySelected(true);
      setHolidayValue(holiday.name);
    } else {
      setIsHolidaySelected(false);
    }

    setMarkedDates((prevMarkedDates) => {
      const newMarkedDates = { ...prevMarkedDates };
      if (newMarkedDates[selectedDate]) {
        delete newMarkedDates[selectedDate];
        setIsHolidaySelected(false);
        setSelectedDates((prevSelectedDates) =>
          prevSelectedDates.filter(
            (item) => item.selectedDate !== formattedDate
          )
        );
      } else if (selectedDay.isSame(currentDay, "day")) {
        Alert.alert("We are closed", "Please choose another day!");
        return prevMarkedDates;
      } else if (selectedDay.isBefore(currentDay)) {
        Alert.alert("Invalid Date", "You cannot select a date in the past.");
        return prevMarkedDates;
      } else {
        newMarkedDates[selectedDate] = {
          customStyles: {
            container: {
              backgroundColor: "#F45050",
            },
            text: {
              color: "white",
              fontWeight: "bold",
            },
          },
        };

        // Add selected date with duration and startTime
        setSelectedDates((prevSelectedDates) => {
          const newEntry = {
            selectedDate: formattedDate,
            startTime: startTime, // You can customize this value
            duration: duration, // You can customize this value
            title: "",
            detail: "",
          };
          const updatedDates = [...prevSelectedDates, newEntry].sort(
            (a, b) =>
              moment(a.selectedDate, "DD/MM/YYYY").unix() -
              moment(b.selectedDate, "DD/MM/YYYY").unix()
          );
          return updatedDates;
        });
      }
      return newMarkedDates;
    });
  };

  const removeSelectedDate = (index) => {
    setSelectedDates((prevSelectedDates) => {
      const newDates = [...prevSelectedDates];
      newDates.splice(index, 1); // Remove the item at the given index
      return newDates;
    });

    setMarkedDates((prevMarkedDates) => {
      const newMarkedDates = { ...prevMarkedDates };
      const dateToRemove = selectedDates[index].date;
      const formattedDate = moment(dateToRemove, "DD/MM/YYYY").format(
        "YYYY-MM-DD"
      );

      delete newMarkedDates[formattedDate];
      return newMarkedDates;
    });
  };

  const handleStartTimePress = (index) => {
    setCurrentDateIndex(index); // Set the index of the selected date
    setStartTimeModalVisible(true); // Open the StartTimeModal
  };

  const updateDuration = (selectedDuration) => {
    setSelectedDates((prevSelectedDates) => {
      const updatedDates = [...prevSelectedDates];
      updatedDates[currentDateIndex].duration = selectedDuration;
      return updatedDates;
    });
  };

  const updateStartTime = (selectedStartTime) => {
    setSelectedDates((prevSelectedDates) => {
      const updatedDates = [...prevSelectedDates];
      updatedDates[currentDateIndex].startTime = selectedStartTime;
      return updatedDates;
    });
  };

  const handleNavigateToHouseSize = () => {
    navigation.navigate("Info", {
      orderType: 1,
      currentPrice: paymentCount,
      orderDate: selectedDates,
    });
  };

  const handleRemoveDay = (index, item) => {
    Alert.alert(
      `Remove a day`,
      `Do you want to remove ${item.selectedDate} from your list`,
      [
        {
          text: "OK",
          onPress: () => {
            setSelectedDates((prevSelectedDates) => {
              const newDates = [...prevSelectedDates];
              newDates.splice(index, 1); // Remove the item at the given index
              return newDates;
            });

            setMarkedDates((prevMarkedDates) => {
              const newMarkedDates = { ...prevMarkedDates };
              const dateToRemove = selectedDates[index].selectedDate;
              const formattedDate = moment(dateToRemove, "DD/MM/YYYY").format(
                "YYYY-MM-DD"
              );

              delete newMarkedDates[formattedDate];
              return newMarkedDates;
            });
          },
        },
        {
          text: "Cancel",
          onPress: () => console.log("Cancel"),
        },
      ]
    );
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
          <Text style={shareStyle.navbar__title}>Create an order</Text>
        </View>
        <View style={shareStyle.body}>
          <View style={hourStyle.hour__container}>
            <View style={hourStyle.hour__headline}>
              <Image source={CalendarIcon} />
              <View style={hourStyle.headline_text}>
                <Text style={hourStyle.item}>Daily cleaning services</Text>
                <Text style={hourStyle.item}>Working hours: 07:00 - 20:00</Text>
                <Text style={hourStyle.item}>
                  20.000¥/day (8hrs, 1hr break included)
                </Text>
              </View>
            </View>
            <View style={hourStyle.hour__calendar}>
              <Calendar
                onDayPress={onDayPress}
                markedDates={markedDates}
                markingType={"custom"}
              />
            </View>
            <Text style={dayStyle.day__count}>{selectedDates.length} days</Text>
            <ScrollView
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              style={dayStyle.scroll}
            >
              <View style={dayStyle.day__list}>
                {selectedDates.map((item, index) => (
                  <TouchableOpacity
                    onPress={() => handleRemoveDay(index, item)}
                    style={dayStyle.list__item}
                    key={index}
                  >
                    <View style={dayStyle.item__info}>
                      <View style={dayStyle.item__date}>
                        <Text style={dayStyle.item__date_value}>
                          {item.selectedDate}
                        </Text>
                      </View>
                      <View style={dayStyle.item__line}></View>
                      <View style={dayStyle.item__detail_group}>
                        <TouchableOpacity
                          style={dayStyle.item__detail}
                          // onPress={() => handleDurationPress(index)}
                        >
                          <Text style={dayStyle.item__title}>Duration:</Text>
                          <Text style={dayStyle.item__value}>
                            {item.duration + 1} hrs
                          </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={dayStyle.item__detail}
                          onPress={() => handleStartTimePress(index)}
                        >
                          <Text style={dayStyle.item__title}>Start at:</Text>
                          <Text style={dayStyle.item__value}>
                            {item.startTime.toString().padStart(2, "0")}
                            :00
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                    <TouchableOpacity
                      style={dayStyle.item__remove_container}
                      onPress={() => removeSelectedDate(index)}
                    >
                      <View style={dayStyle.item__remove_btn}>
                        <Icon name="close" style={dayStyle.item__remove_icon} />
                      </View>
                    </TouchableOpacity>
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
      {selectedDates.length !== 0 ? (
        <View style={shareStyle.btn__value}>
          <View style={shareStyle.btn__value_content}>
            <Text style={shareStyle.value__text}>
              {paymentCount.toLocaleString("de-DE")}¥
            </Text>
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
        selectedDuration={updateDuration}
      />
      <StartTimeModal
        modalVisible={starTimeModalVisible}
        setModalVisible={setStartTimeModalVisible}
        durationValue={selectedDates[currentDateIndex]?.duration || duration}
        selectedStartTime={updateStartTime}
        selectedDate={
          selectedDates[currentDateIndex]?.selectedDate ||
          moment().format("DD/MM/YYYY")
        }
      />
    </View>
  );
}
