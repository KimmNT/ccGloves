import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import shareStyle from "../styles/shareStyle";
import paymentStyle from "../styles/paymentStyle";
import Icon from "react-native-vector-icons/MaterialIcons";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../firebase";

import cashIcon from "../images/dollar.png";
import atmIcon from "../images/atm-card.png";
import visaIcon from "../images/visa.png";
import jcbIcon from "../images/jcb.png";
import mastercardIcon from "../images/mastercard.png";

export default function PaymentPage({ navigation, route }) {
  const {
    currentPrice,
    userInfo,
    orderDate,
    orderID,
    orderType,
    discountCode,
  } = route.params || [];

  const [paymentOption, setPaymentOption] = useState(0);
  const [atmNumber, setAtmNumber] = useState(0);
  const [atmCVV, setAtmCVV] = useState(0);
  const [createdDate, setCreatedDate] = useState("");
  const [createdTime, setCreatedTime] = useState("");

  useEffect(() => {
    const now = new Date();

    const date = now.toLocaleDateString(); // e.g., '8/5/2024'
    const time = now.toLocaleTimeString(); // e.g., '3:45:30 PM'

    setCreatedDate(date);
    setCreatedTime(time);
  }, []);

  const handleCreateOrder = async () => {
    if (paymentOption === 1 && atmNumber === 0 && atmCVV === 0) {
      Alert.alert(
        "Not enough information",
        "Seem like you missing some fields. Please complete all required fields to continue!"
      );
    } else {
      await addDoc(collection(db, "orderList"), {
        id: orderID,
        type: orderType,
        userFirstName: userInfo.firstName,
        userLastName: userInfo.lastName,
        userEmail: userInfo.email,
        userPhone: userInfo.phone,
        userAddress: `${userInfo.addDetail}, ${userInfo.district}, ${userInfo.city}, ${userInfo.prefecture}`,
        status: 0,
        payment: {
          // paymentState: 0,
          paymentOption: paymentOption,
          paymentNumer: atmNumber,
          paymentCVV: atmCVV,
        },
        workingTime: orderDate,
        total: currentPrice,
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

      const ordersRef = collection(db, "discountList");
      const q = query(
        ordersRef,
        where("discountCode", "==", discountCode),
        where("orderEmail", "==", userInfo.email)
      );
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        const docRef = doc(db, "discountList", querySnapshot.docs[0].id);
        await deleteDoc(docRef);
      }
      navigation.navigate("Completed", { orderID: orderID });
    }
  };

  const formatNumber = (number) => {
    const numberString = number.toString();
    // Use a regular expression to format the number in groups of four digits
    return numberString.replace(/\d{4}(?=\d)/g, "$& ").trim();
  };

  const hideKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <View behavior="height" style={shareStyle.container}>
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
          <Text style={shareStyle.navbar__title}>Payment</Text>
        </View>
        <View style={shareStyle.body}>
          <TouchableWithoutFeedback onPress={hideKeyboard}>
            <View style={paymentStyle.payment__container}>
              <View style={paymentStyle.paymnet__price}>
                <Text style={paymentStyle.payment__price_value}>
                  Total: {currentPrice}¥
                </Text>
              </View>
              <View style={paymentStyle.payment__option}>
                <TouchableOpacity
                  style={[
                    paymentStyle.payment__btn,
                    paymentOption === 0
                      ? paymentStyle.active
                      : paymentStyle.inactive,
                  ]}
                  onPress={() => setPaymentOption(0)}
                >
                  <Image source={cashIcon} />
                  <Text
                    style={[
                      paymentStyle.payment__btn_text,
                      paymentOption === 0
                        ? paymentStyle.text__active
                        : paymentStyle.text__inactive,
                    ]}
                  >
                    Cash
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    paymentStyle.payment__btn,
                    paymentOption === 1
                      ? paymentStyle.active
                      : paymentStyle.inactive,
                  ]}
                  onPress={() => setPaymentOption(1)}
                >
                  <Image source={atmIcon} />
                  <Text
                    style={[
                      paymentStyle.payment__btn_text,
                      paymentOption === 1
                        ? paymentStyle.text__active
                        : paymentStyle.text__inactive,
                    ]}
                    onPress={() => setPaymentOption(1)}
                  >
                    ATM
                  </Text>
                </TouchableOpacity>
              </View>
              {paymentOption === 1 ? (
                <View style={paymentStyle.atm__container}>
                  <View style={paymentStyle.atm__item}>
                    <Text style={paymentStyle.item__title}>
                      Enter card number
                    </Text>
                    <TextInput
                      style={paymentStyle.item__input}
                      placeholder="Type here"
                      onChangeText={(newText) => setAtmNumber(newText)}
                      defaultValue={atmNumber}
                      keyboardType="numeric"
                    />
                  </View>
                  <View style={paymentStyle.atm__item}>
                    <Text style={paymentStyle.item__title}>
                      Enter card CVC/CVV
                    </Text>
                    <TextInput
                      style={paymentStyle.item__input}
                      placeholder="Type here"
                      onChangeText={(newText) => setAtmCVV(newText)}
                      defaultValue={atmCVV}
                      keyboardType="numeric"
                    />
                  </View>
                  <View style={paymentStyle.atm__card}>
                    <Text style={paymentStyle.atm__number}>
                      {formatNumber(atmNumber)}
                    </Text>
                    <Text style={paymentStyle.atm__code}>
                      CVC/CVV: {atmCVV}
                    </Text>
                  </View>
                </View>
              ) : (
                <></>
              )}
              <TouchableOpacity
                style={paymentStyle.payment__confirm_container}
                onPress={handleCreateOrder}
              >
                <View style={paymentStyle.payment__confirm_content}>
                  <Text style={paymentStyle.value__text}>
                    confirm your order
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
