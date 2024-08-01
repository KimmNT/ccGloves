import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

export default function Testing() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const handleSumit = async () => {
    await addDoc(collection(db, "orderList"), {
      id: generateRandomString(20),
      type: "Daily",
      userFirstName: "Duy",
      userLastName: "Vu",
      userEmail: "duyvu@gmail.com",
      userPhone: "123123123",
      userAddress:
        "68 Nguyen Ngoc Phuong, phuong 19, quan Binh Thanh, thanh pho HCM",
      status: "Working",
      paymentType: 1,
      houseSize: 55,
      cleaningTool: 1,
      workingTime: [
        {
          date: "10/05/2024",
          start: 15,
          duration: 3,
        },
      ],
      total: 11420,
    });
    getData();
  };

  const getData = async () => {
    try {
      const data = await getDocs(collection(db, "orderList"));
      const orderData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setOrders(orderData);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Testing</Text>
      <TouchableOpacity onPress={handleSumit}>
        <Text>Create record</Text>
      </TouchableOpacity>
      {orders.map((order) => (
        <View key={order.id}>
          <Text>{order.Id}</Text>
          <Text>{order.name}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({});
