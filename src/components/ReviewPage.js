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
} from "react-native";
import React, { useState } from "react";
import shareStyle from "../styles/shareStyle";
import reviewStyle from "../styles/reviewingStyle";
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

export default function ReviewPage({ navigation, route }) {
  const { orderDetail } = route.params || [];

  const [rateService, setRateService] = useState(0);
  const [rateStaff, setRateStaff] = useState(0);
  const [rateBooking, setRateBooking] = useState(0);
  const [rateFeedback, setRateFeedback] = useState("");
  const [rateOverall, setRateOverall] = useState(0);

  const updateOrderByCustomId = async (customId, updateData) => {
    try {
      // Query for the document with the custom id
      const q = query(collection(db, "orderList"), where("id", "==", customId));
      const querySnapshot = await getDocs(q);

      // Check if the document exists
      if (!querySnapshot.empty) {
        // Get the first matching document (assuming id is unique)
        const docSnapshot = querySnapshot.docs[0];
        const docRef = doc(db, "orderList", docSnapshot.id);

        // Update the document
        await updateDoc(docRef, updateData);
        console.log("Document updated successfully!");
      } else {
        console.log("No matching document found.");
      }
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  };

  const handleSendReview = async () => {
    if (rateService === 0 || rateStaff === 0 || rateBooking === 0) {
      Alert.alert(
        "Not enough information",
        "Seem like you missing some fields. Please complete all required fields to continue!",
        [{ text: "OK", onPress: () => console.log("OK Pressed") }]
      );
    } else {
      await addDoc(collection(db, "reviewsList"), {
        orderId: orderDetail.id,
        userName: `${orderDetail.userFirstName} ${orderDetail.userLastName}`,
        orderService: orderDetail.type,
        rateService: rateService,
        rateBooking: rateBooking,
        rateStaff: rateStaff,
        rateFeedback: rateFeedback,
        rateOverall: (rateService + rateBooking + rateStaff) / 3,
        state: 0,
      });
      await updateOrderByCustomId(orderDetail.id, { ratingState: 1 });
      navigation.navigate("ReviewSuccess", {
        orderEmail: orderDetail.userEmail,
      });
    }
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={shareStyle.container}>
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
          <Text style={shareStyle.navbar__title}>Reviewing</Text>
        </View>
        <View style={shareStyle.body}>
          <View style={reviewStyle.review__container}>
            <View style={reviewStyle.review__list}>
              <View style={reviewStyle.review__item}>
                <Text style={reviewStyle.item__title}>Service quality</Text>
                <View style={reviewStyle.item__rate}>
                  <TouchableOpacity
                    onPress={() => setRateService(1)}
                    style={reviewStyle.rate__btn}
                  >
                    <Icon
                      name="sentiment-dissatisfied"
                      style={[
                        reviewStyle.rate__icon,
                        rateService === 1 ? reviewStyle.choseBad : "",
                      ]}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => setRateService(2)}
                    style={reviewStyle.rate__btn}
                  >
                    <Icon
                      name="sentiment-neutral"
                      style={[
                        reviewStyle.rate__icon,
                        rateService === 2 ? reviewStyle.choseOk : "",
                      ]}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => setRateService(3)}
                    style={reviewStyle.rate__btn}
                  >
                    <Icon
                      name="sentiment-satisfied"
                      style={[
                        reviewStyle.rate__icon,
                        rateService === 3 ? reviewStyle.choseGood : "",
                      ]}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => setRateService(4)}
                    style={reviewStyle.rate__btn}
                  >
                    <Icon
                      name="mood"
                      style={[
                        reviewStyle.rate__icon,
                        rateService === 4 ? reviewStyle.choseGreat : "",
                      ]}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={reviewStyle.review__item}>
                <Text style={reviewStyle.item__title}>Booking system</Text>
                <View style={reviewStyle.item__rate}>
                  <TouchableOpacity
                    onPress={() => setRateBooking(1)}
                    style={reviewStyle.rate__btn}
                  >
                    <Icon
                      name="sentiment-dissatisfied"
                      style={[
                        reviewStyle.rate__icon,
                        rateBooking === 1 ? reviewStyle.choseBad : "",
                      ]}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => setRateBooking(2)}
                    style={reviewStyle.rate__btn}
                  >
                    <Icon
                      name="sentiment-neutral"
                      style={[
                        reviewStyle.rate__icon,
                        rateBooking === 2 ? reviewStyle.choseOk : "",
                      ]}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => setRateBooking(3)}
                    style={reviewStyle.rate__btn}
                  >
                    <Icon
                      name="sentiment-satisfied"
                      style={[
                        reviewStyle.rate__icon,
                        rateBooking === 3 ? reviewStyle.choseGood : "",
                      ]}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => setRateBooking(4)}
                    style={reviewStyle.rate__btn}
                  >
                    <Icon
                      name="mood"
                      style={[
                        reviewStyle.rate__icon,
                        rateBooking === 4 ? reviewStyle.choseGreat : "",
                      ]}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={reviewStyle.review__item}>
                <Text style={reviewStyle.item__title}>Staff</Text>
                <View style={reviewStyle.item__rate}>
                  <TouchableOpacity
                    onPress={() => setRateStaff(1)}
                    style={reviewStyle.rate__btn}
                  >
                    <Icon
                      name="sentiment-dissatisfied"
                      style={[
                        reviewStyle.rate__icon,
                        rateStaff === 1 ? reviewStyle.choseBad : "",
                      ]}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => setRateStaff(2)}
                    style={reviewStyle.rate__btn}
                  >
                    <Icon
                      name="sentiment-neutral"
                      style={[
                        reviewStyle.rate__icon,
                        rateStaff === 2 ? reviewStyle.choseOk : "",
                      ]}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => setRateStaff(3)}
                    style={reviewStyle.rate__btn}
                  >
                    <Icon
                      name="sentiment-satisfied"
                      style={[
                        reviewStyle.rate__icon,
                        rateStaff === 3 ? reviewStyle.choseGood : "",
                      ]}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => setRateStaff(4)}
                    style={reviewStyle.rate__btn}
                  >
                    <Icon
                      name="mood"
                      style={[
                        reviewStyle.rate__icon,
                        rateStaff === 4 ? reviewStyle.choseGreat : "",
                      ]}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={reviewStyle.review__item}>
                <Text style={reviewStyle.item__title}>Any othes though</Text>
                <TextInput
                  style={reviewStyle.item__rich_input}
                  multiline
                  numberOfLines={4}
                  onChangeText={(text) => setRateFeedback(text)}
                  value={rateFeedback}
                  placeholder="Give us your though"
                />
              </View>
              <View style={reviewStyle.review__btn_container}>
                <TouchableOpacity
                  style={reviewStyle.review__btn}
                  onPress={handleSendReview}
                >
                  <Text style={reviewStyle.review__btn_text}>done</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({});
