import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Keyboard,
  Button,
  TouchableWithoutFeedback,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import shareStyle from "../styles/shareStyle";
import reviewSuccessStyle from "../styles/reviewSuccessStyle";
import Icon from "react-native-vector-icons/MaterialIcons";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../../firebase";
import successBackground from "../images/checked.png";

export default function ReviewSuccess({ navigation, route }) {
  const { orderEmail } = route.params || [];

  useEffect(() => {
    const addDiscount = async () => {
      try {
        await addDoc(collection(db, "discountList"), {
          orderEmail: orderEmail,
          discountCode: generateDiscount(),
        });
      } catch (error) {
        console.error("Error adding document: ", error);
      }
    };

    addDiscount();
  }, [orderEmail]);

  const generateDiscount = () => {
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
    //for date
    const currentDay = date.getDate();
    const currentMonth = months[date.getMonth()];
    const currentYear = date.getFullYear().toString().substring(2, 4);
    const currentDate = `${currentDay}${currentMonth}${currentYear}`;

    const generatedCode = `${currentDate}5PER`;

    return generatedCode;
  };

  const handleNavigateToHome = () => {
    navigation.navigate("Home");
  };

  return (
    <View behavior="padding" style={shareStyle.container}>
      <View style={shareStyle.content}>
        <View style={[shareStyle.navbar, shareStyle.navbar__one]}>
          <Text style={shareStyle.navbar__title}>Review Successfully</Text>
        </View>
        <View style={shareStyle.body}>
          <View style={reviewSuccessStyle.reviewS__container}>
            <Image source={successBackground} />
            <Text style={reviewSuccessStyle.reviewS__title}>
              Thank you for your feedback
            </Text>
            <Text style={reviewSuccessStyle.reviewS__title}>
              Here is a 5% discount code for your next order
            </Text>
            <Text style={reviewSuccessStyle.reviewS__code}>
              #{generateDiscount()}
            </Text>
            <View style={reviewSuccessStyle.reviewS__btn_container}>
              <TouchableOpacity
                style={reviewSuccessStyle.reviewS__btn}
                onPress={handleNavigateToHome}
              >
                <Text style={reviewSuccessStyle.reviewS__btn_text}>
                  back to home
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
