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
  KeyboardAvoidingView,
} from "react-native";
import shareStyle from "../styles/shareStyle";
import customCreateStyle from "../styles/customOrderCreateStyle";
import infoStyle from "../styles/infoStyle";
import Icon from "react-native-vector-icons/MaterialIcons";
import * as FileSystem from "expo-file-system";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

export default function CustomCreateInfo({ navigation, route }) {
  const { selectedService, selectedDate } = route.params || [];

  const [orderDetail, setOrderDetail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState(0);
  const [email, setEmail] = useState("");
  const [createdDate, setCreatedDate] = useState("");
  const [createdTime, setCreatedTime] = useState("");
  const [storageValue, setStorageValue] = useState("");
  const [orderID, setOrderID] = useState("");

  useEffect(() => {
    const now = new Date();

    const date = now.toLocaleDateString(); // e.g., '8/5/2024'
    const time = now.toLocaleTimeString(); // e.g., '3:45:30 PM'

    setCreatedDate(date);
    setCreatedTime(time);
    setOrderID(generateOrderID());
  }, []);

  useEffect(() => {
    readDataFromFile("userInfo.txt");
    if (storageValue !== "") {
      // Split the string by the | delimiter
      const parts = storageValue.split("|");

      // Destructure the parts into individual variables
      const [firstName, lastName, phoneNumber, email] = parts;
      setFirstName(firstName);
      setLastName(lastName);
      setPhone(phoneNumber);
      setEmail(email);
    }
  }, [storageValue]);

  async function readDataFromFile(fileName) {
    const fileUri = FileSystem.documentDirectory + fileName;
    try {
      const data = await FileSystem.readAsStringAsync(fileUri);
      console.log("Data read successfully:", data);
      return setStorageValue(data);
    } catch (error) {
      console.error("Error reading data", error);
      return null;
    }
  }

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

  const handleCreateOrder = async () => {
    try {
      await addDoc(collection(db, "orderList"), {
        id: orderID,
        type: 2,
        userFirstName: firstName,
        userLastName: lastName,
        userEmail: email,
        userPhone: phone,
        userAddress: "",
        status: 0,
        payment: {
          paymentState: 0,
          paymentOption: 0,
          paymentNumer: 0,
          paymentCVV: 0,
        },
        workingTime: [
          {
            selectedDate: selectedDate,
            startTime: 0,
            duration: 0,
            title: selectedService.name,
            detail: orderDetail,
          },
        ],
        total: 0,
        created: {
          date: createdDate,
          time: createdTime,
        },
        working: {
          date: "",
          time: "",
        },
        completed: {
          date: "",
          time: "",
        },
        ratingState: 0,
        belongTo: {
          empId: "",
          empName: "",
        },
        describe: "",
      });
      navigation.navigate("Completed", { orderID: orderID });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior="padding"
      // keyboardVerticalOffset={50} // Adjust this value if necessary
      style={shareStyle.container}
    >
      <ScrollView style={shareStyle.content}>
        <View style={[shareStyle.navbar, shareStyle.navbar__two]}>
          <TouchableOpacity
            style={shareStyle.navbar__icon}
            onPress={() => navigation.goBack()}
          >
            <View style={shareStyle.navbar__icon_container}>
              <Icon name="arrow-back" style={shareStyle.icon} />
            </View>
          </TouchableOpacity>
          <Text style={shareStyle.navbar__title}>Information</Text>
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
            <View style={infoStyle.info__box}>
              <View style={[infoStyle.info__input, infoStyle.input__half]}>
                <Text style={infoStyle.box__title}>First name</Text>
                <TextInput
                  style={infoStyle.box__input}
                  placeholder="Type here"
                  onChangeText={(newText) => setFirstName(newText)}
                  defaultValue={firstName}
                />
              </View>
              <View style={[infoStyle.info__input, infoStyle.input__half]}>
                <Text style={infoStyle.box__title}>Last name</Text>
                <TextInput
                  style={infoStyle.box__input}
                  placeholder="Type here"
                  onChangeText={(newText) => setLastName(newText)}
                  defaultValue={lastName}
                />
              </View>
            </View>
            <View style={infoStyle.info__box}>
              <View style={[infoStyle.info__input, infoStyle.input__full]}>
                <Text style={infoStyle.box__title}>Phone number</Text>
                <TextInput
                  style={infoStyle.box__input}
                  placeholder="Type here"
                  onChangeText={(newText) => setPhone(newText)}
                  defaultValue={phone}
                  keyboardType="numeric"
                />
              </View>
            </View>
            <View style={infoStyle.info__box}>
              <View style={[infoStyle.info__input, infoStyle.input__full]}>
                <Text style={infoStyle.box__title}>Email address</Text>
                <TextInput
                  style={infoStyle.box__input}
                  placeholder="Type here"
                  onChangeText={(newText) => setEmail(newText)}
                  defaultValue={email}
                />
              </View>
            </View>
            <View style={infoStyle.info__box}>
              <View style={[infoStyle.info__input, infoStyle.input__full]}>
                <Text style={infoStyle.box__title}>
                  Please provide us with more details if possible.
                </Text>
                <TextInput
                  placeholder="Enter here"
                  multiline
                  onChangeText={(newText) => setOrderDetail(newText)}
                  defaultValue={orderDetail}
                  style={[
                    infoStyle.box__input,
                    customCreateStyle.create__detail,
                  ]}
                />
              </View>
            </View>
            <TouchableOpacity
              style={customCreateStyle.create__btn_info}
              onPress={handleCreateOrder}
            >
              <View style={customCreateStyle.create__btn}>
                <Text style={customCreateStyle.create__btn_value}>
                  create your order
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({});
