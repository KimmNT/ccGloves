import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

export default function Testing() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  //AUTO GENERATE STRING AS ID
  const generateRandomString = (length) => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let result = "";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  const handleSumit = async () => {
    await addDoc(collection(db, "orderList"), {
      Id: generateRandomString(10),
      name: generateRandomString(5),
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
