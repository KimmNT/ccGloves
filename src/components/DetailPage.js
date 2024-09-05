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
import React, { useEffect, useState } from "react";
import shareStyle from "../styles/shareStyle";
import homeStyle from "../styles/homeStyle";
import detailStyle from "../styles/detailStyle";
import Icon from "react-native-vector-icons/MaterialIcons";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase";

export default function DetailPage({ navigation, route }) {
  const [navActive, setNavActive] = useState(0);
  const [number, setNumber] = useState("");
  const [text, setText] = useState("");
  const [orders, setOrders] = useState([]);

  const hideKeyboard = () => {
    Keyboard.dismiss();
  };

  const handleTextChange = (newText) => {
    setText(newText.toUpperCase());
  };

  const searchById = async (searchId) => {
    try {
      const q = query(collection(db, "orderList"), where("id", "==", text));
      const querySnapshot = await getDocs(q);
      const results = querySnapshot.docs.map((doc) => ({
        firestoreId: doc.id, // Firestore-generated document ID
        ...doc.data(),
      }));
      console.log("Search results by ID:", results);
      setOrders(results);
    } catch (error) {
      console.error("Error searching by ID: ", error);
    }
  };
  const searchByUserPhone = async (searchPhone) => {
    try {
      const q = query(
        collection(db, "orderList"),
        where("userPhone", "==", number)
      );
      const querySnapshot = await getDocs(q);
      const results = querySnapshot.docs.map((doc) => ({
        firestoreId: doc.id, // Firestore-generated document ID
        ...doc.data(),
      }));
      setOrders(results);
    } catch (error) {
      console.error("Error searching by User Phone: ", error);
    }
  };

  const handleToItemDetail = (order) => {
    navigation.navigate("OrderDetail", { orderDetails: order });
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
          <Text style={shareStyle.navbar__title}>Checking your order</Text>
        </View>
        <View style={shareStyle.body}>
          <TouchableWithoutFeedback onPress={hideKeyboard}>
            <View style={detailStyle.detail__container}>
              <View style={detailStyle.detail__header}>
                <View style={detailStyle.detail__headerButton}>
                  <TouchableOpacity
                    style={[
                      navActive === 0
                        ? detailStyle.btn__active
                        : detailStyle.btn__inactive,
                      detailStyle.detail__btn,
                    ]}
                    onPress={() => {
                      setNavActive(0);
                      setOrders([]);
                    }}
                  >
                    <Text
                      style={[
                        navActive === 0
                          ? detailStyle.text__active
                          : detailStyle.text__inactive,
                      ]}
                    >
                      Order ID
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[
                      navActive === 1
                        ? detailStyle.btn__active
                        : detailStyle.btn__inactive,
                      detailStyle.detail__btn,
                    ]}
                    onPress={() => {
                      setNavActive(1);
                      setOrders([]);
                    }}
                  >
                    <Text
                      style={[
                        navActive === 1
                          ? detailStyle.text__active
                          : detailStyle.text__inactive,
                      ]}
                    >
                      Phone number
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={detailStyle.detail__containerInput}>
                  <View style={detailStyle.detail__hearderInput}>
                    {navActive === 0 ? (
                      <TextInput
                        style={detailStyle.detail__input}
                        placeholder="Type your order #ID"
                        onChangeText={handleTextChange}
                        value={text}
                      />
                    ) : (
                      <TextInput
                        style={detailStyle.detail__input}
                        placeholder="Type your phone number"
                        keyboardType="numeric"
                        onChangeText={(newText) => setNumber(newText)}
                        value={number}
                      ></TextInput>
                    )}
                  </View>
                  {navActive === 0 ? (
                    <TouchableOpacity
                      style={detailStyle.search__icon_container}
                      onPress={searchById}
                    >
                      <Icon name="search" style={detailStyle.search__icon} />
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      style={detailStyle.search__icon_container}
                      onPress={searchByUserPhone}
                    >
                      <Icon name="search" style={detailStyle.search__icon} />
                    </TouchableOpacity>
                  )}
                </View>
                <Text style={homeStyle.group__headline}>Your orders list</Text>
                <ScrollView style={detailStyle.order__list}>
                  {orders.map((order, index) => (
                    <TouchableOpacity
                      key={index}
                      style={detailStyle.orderBox}
                      onPress={() => handleToItemDetail(order)}
                    >
                      <View style={detailStyle.orderBox__row}>
                        <Text style={detailStyle.orderBox__textName}>
                          Order ID
                        </Text>
                        <Text style={detailStyle.orderBox__textData}>
                          #{order.id}
                        </Text>
                      </View>
                      <View style={detailStyle.orderBox__row}>
                        <Text style={detailStyle.orderBox__textName}>
                          Service
                        </Text>
                        {order.type === 0 ? (
                          <Text style={detailStyle.orderBox__textData}>
                            Hire in Hours
                          </Text>
                        ) : order.type === 1 ? (
                          <Text style={detailStyle.orderBox__textData}>
                            Hire in Days
                          </Text>
                        ) : (
                          <Text style={detailStyle.orderBox__textData}>
                            Hire with Combo
                          </Text>
                        )}
                      </View>
                      <View style={detailStyle.orderBox__row}>
                        <Text style={detailStyle.orderBox__textName}>
                          Status
                        </Text>
                        {order.status === 0 ? (
                          <Text style={detailStyle.orderBox__textData}>
                            Waiting to confirm
                          </Text>
                        ) : order.status === 1 ? (
                          <Text style={detailStyle.orderBox__textData}>
                            Confirmed
                          </Text>
                        ) : order.status === 2 ? (
                          <Text style={detailStyle.orderBox__textData}>
                            Working
                          </Text>
                        ) : order.status === 3 ? (
                          <Text style={detailStyle.orderBox__textData}>
                            Done
                          </Text>
                        ) : (
                          <Text style={detailStyle.orderBox__textData}>
                            Canceled
                          </Text>
                        )}
                      </View>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
      {/* <View style={shareStyle.tab__container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="home" style={shareStyle.tab__icon}></Icon>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Detail")}>
          <Icon name="bookmark" style={shareStyle.tab__icon}></Icon>
        </TouchableOpacity>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({});
