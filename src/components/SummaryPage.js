import {
  Alert,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import shareStyle from "../styles/shareStyle";
import summaryStyle from "../styles/SummaryStyle";
import Icon from "react-native-vector-icons/MaterialIcons";
import OrderDetailModal from "./Models/OrderDetailModal";
import InformationDetailModal from "./Models/InformationDetailModals";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase";

export default function SummaryPage({ navigation, route }) {
  const { currentPrice, userInfo, orderDate, orderType } = route.params || [];

  const [orderId, setOrderId] = useState("");
  const [orderModalVisible, setOrderModalVisible] = useState(false);
  const [infoModalVisible, setInfoModalVisible] = useState(false);
  const [discountList, setDiscountList] = useState([]);
  const [discountInput, setDiscountInput] = useState("");
  const [discountResult, setDiscountResult] = useState([]);
  const [discountString, setDiscountString] = useState("");
  const [discountValue, setDiscountValue] = useState(0);

  useEffect(() => {
    setOrderId(generateOrderID());
    getDiscountByEmail();
  }, []);

  useEffect(() => {
    if (discountResult.length > 0) {
      discountResult.map((discount) =>
        setDiscountValue(discount.discountValue)
      );
    }
  }, [discountResult]);

  const handleDiscountInputChange = (newText) => {
    setDiscountInput(newText.toUpperCase());
  };

  const getDiscountByEmail = async () => {
    try {
      const q = query(
        collection(db, "discountList"),
        where("orderEmail", "==", userInfo.email)
      );
      const querySnapshot = await getDocs(q);
      const results = querySnapshot.docs.map((doc) => doc.data());
      setDiscountList(results);
    } catch (error) {
      console.error("Error searching by email: ", error);
    }
  };

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

  const handleNavigate = async () => {
    navigation.navigate("Payment", {
      orderType: orderType,
      currentPrice:
        currentPrice +
        currentPrice * 0.1 -
        (currentPrice * discountValue) / 100,
      userInfo: userInfo,
      orderDate: orderDate,
      orderID: orderId,
      discountCode: discountValue > 0 ? discountInput : "",
    });
  };

  const handleCheckDiscountCode = () => {
    const matchingDiscountValue = discountList.filter(
      (discount) => discount.discountCode === discountInput
    );
    if (matchingDiscountValue.length > 0) {
      setDiscountResult(matchingDiscountValue);
      setDiscountString("");
    } else {
      setDiscountString(
        "We cannot find this coupon. Please check it and try again."
      );
    }
  };

  const handleRemoveDiscount = () => {
    setDiscountResult([]), setDiscountString(""), setDiscountValue(0);
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
          <Text style={shareStyle.navbar__title}>Summary your order</Text>
        </View>
        <View style={shareStyle.body}>
          <View style={summaryStyle.summary__container}>
            <Text style={summaryStyle.order__id}>Order ID: #{orderId}</Text>
            <View style={summaryStyle.payment__price}>
              <View style={summaryStyle.payment__price_item}>
                <Text style={summaryStyle.sub__payment_value}>Subtotal:</Text>
                <Text style={summaryStyle.sub__payment_value}>
                  {currentPrice}¥
                </Text>
              </View>
              <View style={summaryStyle.payment__price_item}>
                <Text style={summaryStyle.sub__payment_value}>Tax:</Text>
                <Text style={summaryStyle.sub__payment_value}>10%</Text>
              </View>
              {discountResult.length > 0 ? (
                <View style={summaryStyle.payment__price_item}>
                  <Text style={summaryStyle.sub__payment_value}>Discount:</Text>
                  <View style={summaryStyle.sub__payment_coupon}>
                    <Text style={summaryStyle.sub__payment_value}>
                      -{discountValue}%
                    </Text>
                    <TouchableOpacity
                      style={summaryStyle.sub__payment_coupon_remove}
                      onPress={handleRemoveDiscount}
                    >
                      <Icon
                        name="remove"
                        style={summaryStyle.sub__payment_coupon_remove_icon}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              ) : (
                <></>
              )}
              <View style={summaryStyle.payment__price_item}>
                <Text style={summaryStyle.payment__value}>Total:</Text>
                {discountResult.length > 0 ? (
                  <Text style={summaryStyle.payment__value}>
                    {currentPrice +
                      currentPrice * 0.1 -
                      (currentPrice * discountValue) / 100}
                    ¥
                  </Text>
                ) : (
                  <Text style={summaryStyle.payment__value}>
                    {currentPrice + currentPrice * 0.1}¥
                  </Text>
                )}
              </View>
            </View>
            <View style={summaryStyle.coupon__container}>
              <View style={summaryStyle.coupon__content}>
                <TextInput
                  placeholder="Enter your discount"
                  onChangeText={handleDiscountInputChange}
                  value={discountInput}
                  style={summaryStyle.coupon__input}
                />
                <TouchableOpacity
                  onPress={handleCheckDiscountCode}
                  style={summaryStyle.coupon__btn}
                >
                  <Text style={summaryStyle.coupon__btn_text}>Apply</Text>
                </TouchableOpacity>
              </View>
              <Text style={summaryStyle.coupon__error}>{discountString}</Text>
            </View>
            <View style={summaryStyle.summary__item}>
              <TouchableOpacity
                style={summaryStyle.summary__btn}
                onPress={() => setOrderModalVisible(true)}
              >
                <Icon style={summaryStyle.btn__icon} name="shopping-bag" />
                <Text style={summaryStyle.btn__text}>Your order here!</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={summaryStyle.summary__btn}
                onPress={() => setInfoModalVisible(true)}
              >
                <Icon style={summaryStyle.btn__icon} name="person" />
                <Text style={summaryStyle.btn__text}>
                  Your information here!
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={summaryStyle.payment__confirm_container}
              onPress={handleNavigate}
            >
              <View style={summaryStyle.payment__confirm_content}>
                <Text style={summaryStyle.value__text}>checkout now</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <OrderDetailModal
        modalVisible={orderModalVisible}
        setModalVisible={setOrderModalVisible}
        orderDate={orderDate}
        orderType={orderType}
      />
      <InformationDetailModal
        modalVisible={infoModalVisible}
        setModalVisible={setInfoModalVisible}
        userInfo={userInfo}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
