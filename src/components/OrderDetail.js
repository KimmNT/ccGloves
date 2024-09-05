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
} from "react-native";
import React, { useState } from "react";
import shareStyle from "../styles/shareStyle";
import orderDetailStyle from "../styles/orderDetailStyle";
import Icon from "react-native-vector-icons/MaterialIcons";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";

export default function OrderDetail({ navigation, route }) {
  const { orderDetails } = route.params;

  const [orderDetail, setOrderDetail] = useState(orderDetails);
  const [isExpand, setIsExpand] = useState(false);
  const [cancelReason, setCancelReason] = useState("");
  const [isCancel, setIsCancel] = useState(false);

  const cancelArray = [
    {
      title: "Change of mind",
    },
    {
      title: "Found a better price",
    },
    {
      title: "No longer needed",
    },
    {
      title: "Prefer a different one",
    },
    {
      title: "Wrong information",
    },
    {
      title: "Poor customer service experience",
    },
    {
      title: "None of above",
    },
  ];

  const statusStyles = {
    0: {
      background: orderDetailStyle.pending,
      value: orderDetailStyle.value__pending,
      text: "Waiting to confirm",
      icon: "schedule",
    },
    1: {
      background: orderDetailStyle.working,
      value: orderDetailStyle.value__working,
      text: "Confirmed",
      icon: "check",
    },
    2: {
      background: orderDetailStyle.working,
      value: orderDetailStyle.value__working,
      text: "Working",
      icon: "cleaning-services",
    },
    3: {
      background: orderDetailStyle.completed,
      value: orderDetailStyle.value__completed,
      text: "Done",
      icon: "done-all",
    },
    4: {
      background: orderDetailStyle.cancel,
      value: orderDetailStyle.value__cancel,
      text: "Canceled",
      icon: "close",
    },
  };

  const { background, value, text, icon } =
    statusStyles[orderDetail.status] || statusStyles[2];

  const handleNavigateToReview = () => {
    navigation.navigate("Review", { orderDetail: orderDetail });
  };

  const handleCancelOrder = async () => {
    try {
      // Reference to the Firestore document
      const orderRef = doc(db, "orderList", orderDetail.firestoreId);

      // Update the order status in Firestore
      await updateDoc(orderRef, { status: 4 });

      await updateDoc(orderRef, { describe: cancelReason });

      //   Update the local state for the single order item
      setOrderDetail((prevOrder) => ({
        ...prevOrder,
        status: 4,
        describe: cancelReason,
      }));
      setIsCancel(false);
      console.log(`Order status updated to cancel`);
    } catch (error) {
      console.error("Error updating order status:", error);
    }
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
          <Text style={shareStyle.navbar__title}>Order Detail</Text>
        </View>
        <View style={shareStyle.body}>
          <View style={orderDetailStyle.od__container}>
            <View style={orderDetailStyle.od__headline}>
              <View style={orderDetailStyle.od__headline_item}>
                <Text style={orderDetailStyle.od__title}>Order ID:</Text>
                <Text style={orderDetailStyle.od__value}>
                  #{orderDetail.id}
                </Text>
              </View>
              <View style={orderDetailStyle.od__headline_item}>
                <Text style={orderDetailStyle.od__title}>Service:</Text>
                {orderDetail.type === 0 ? (
                  <Text style={orderDetailStyle.od__title}>Hire in Hours</Text>
                ) : orderDetail.type === 1 ? (
                  <Text style={orderDetailStyle.od__title}>Hire in Days</Text>
                ) : (
                  <Text style={orderDetailStyle.od__title}>
                    Hire with Combo
                  </Text>
                )}
              </View>
              <View style={orderDetailStyle.od__headline_item}>
                <Text style={orderDetailStyle.od__title}>Status:</Text>
                <View style={[orderDetailStyle.od__background, background]}>
                  <Text style={[orderDetailStyle.od__status_value, value]}>
                    {text}
                  </Text>
                  <Icon
                    name={icon}
                    style={[orderDetailStyle.od__status_value, value]}
                  />
                </View>
                {orderDetail.status === 0 && (
                  <TouchableOpacity
                    onPress={() => setIsCancel(true)}
                    style={orderDetailStyle.cancel__btn_container}
                  >
                    <Text style={orderDetailStyle.cancel__btn_value}>
                      Cancel
                    </Text>
                  </TouchableOpacity>
                )}
                {orderDetail.status === 4 && (
                  <Text style={orderDetailStyle.od__title}>
                    {orderDetails.describe}
                  </Text>
                )}
              </View>
              <View style={orderDetailStyle.od__headline_item}>
                <Text style={orderDetailStyle.od__title}>Total price:</Text>
                <Text style={orderDetailStyle.od__title}>
                  {orderDetail.total.toLocaleString("de-DE")}¥
                </Text>
              </View>
              {text === "Done" && orderDetail.ratingState === 0 ? (
                <TouchableOpacity
                  style={orderDetailStyle.od__rating}
                  onPress={handleNavigateToReview}
                >
                  <Text style={orderDetailStyle.od__rating_text}>
                    Leave a review to receive a coupon for your next order!
                  </Text>
                </TouchableOpacity>
              ) : (
                <></>
              )}
            </View>
            <View style={orderDetailStyle.od__content}>
              {orderDetail.workingTime.slice(0, 3).map((item, index) => {
                return (
                  <View style={orderDetailStyle.content__item} key={index}>
                    {orderDetail.type === 3 ? (
                      <>
                        <View style={orderDetailStyle.item__value}>
                          <Text style={orderDetailStyle.title}>Date</Text>
                          <Text style={orderDetailStyle.value}>
                            {item.selectedDate}
                          </Text>
                        </View>
                        <View style={orderDetailStyle.item__value}>
                          <Text style={orderDetailStyle.title}>Duration</Text>
                          <Text style={orderDetailStyle.value}>
                            {item.duration} hours
                          </Text>
                        </View>
                        <View style={orderDetailStyle.item__value}>
                          <Text style={orderDetailStyle.title}>Start time</Text>
                          <Text style={orderDetailStyle.value}>
                            {item.startTime}:00 -{" "}
                            {item.startTime + item.duration}
                            :00
                          </Text>
                        </View>
                      </>
                    ) : (
                      <>
                        <View style={orderDetailStyle.item__value}>
                          <Text style={orderDetailStyle.title}>Date</Text>
                          <Text style={orderDetailStyle.value}>
                            {item.selectedDate}
                          </Text>
                        </View>
                        <View style={orderDetailStyle.item__value}>
                          <Text style={orderDetailStyle.title}>Service</Text>
                          <Text style={orderDetailStyle.value}>
                            {item.title}
                          </Text>
                        </View>
                        <View style={orderDetailStyle.item__value}>
                          <Text style={orderDetailStyle.title}>Detail</Text>
                          <Text style={orderDetailStyle.value}>
                            {item.detail}
                          </Text>
                        </View>
                      </>
                    )}
                  </View>
                );
              })}
              {orderDetail.workingTime.length - 3 > 0 && (
                <TouchableOpacity
                  onPress={() => setIsExpand(true)}
                  style={orderDetailStyle.od__more_container}
                >
                  <Text style={orderDetailStyle.od__more_value}>
                    {orderDetail.workingTime.length - 3} more - See all
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
      </View>
      {isExpand && (
        <TouchableOpacity
          onPress={() => setIsExpand(false)}
          style={orderDetailStyle.expand}
        >
          <View style={[orderDetailStyle.od__content]}>
            {orderDetail.workingTime.map((item, index) => (
              <View style={orderDetailStyle.content__item} key={index}>
                <View style={orderDetailStyle.item__value}>
                  <Text style={orderDetailStyle.title}>Date</Text>
                  <Text style={orderDetailStyle.value}>
                    {item.selectedDate}
                  </Text>
                </View>
                <View style={orderDetailStyle.item__value}>
                  <Text style={orderDetailStyle.title}>Duration</Text>
                  <Text style={orderDetailStyle.value}>
                    {item.duration} hours
                  </Text>
                </View>
                <View style={orderDetailStyle.item__value}>
                  <Text style={orderDetailStyle.title}>Start time</Text>
                  <Text style={orderDetailStyle.value}>
                    {item.startTime}:00 - {item.startTime + item.duration}
                    :00
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </TouchableOpacity>
      )}
      {isCancel && (
        <TouchableOpacity
          style={orderDetailStyle.cancel__container}
          onPress={() => setIsCancel(false)}
        >
          <View style={orderDetailStyle.cancel__content}>
            <Text style={orderDetailStyle.cancel__title}>
              Please let us know why you wish to cancel this order.
            </Text>
            <View style={orderDetailStyle.cancel__suggestion}>
              {cancelArray.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    orderDetailStyle.suggestion__btn,
                    item.title === cancelReason
                      ? orderDetailStyle.suggestion__btn_active
                      : "",
                  ]}
                  onPress={() => setCancelReason(item.title)}
                >
                  <Text
                    style={[
                      orderDetailStyle.suggestion__btn_value,
                      item.title === cancelReason
                        ? orderDetailStyle.suggestion__btn_value_active
                        : "",
                    ]}
                  >
                    {item.title}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
            {cancelReason && (
              <TouchableOpacity
                style={[orderDetailStyle.cancel__btn]}
                onPress={handleCancelOrder}
              >
                <Text style={[orderDetailStyle.cancel__btn_text]}>
                  cancel order now
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
}
const styles = StyleSheet.create({});
