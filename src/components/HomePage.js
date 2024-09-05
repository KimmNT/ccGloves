import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import shareStyle from "../styles/shareStyle";
import homeStyle from "../styles/homeStyle";
import Icon from "react-native-vector-icons/MaterialIcons";
import Clock from "../images/clock.png";
import Calendar from "../images/calendar.png";
import Customer from "../images/customer-service.png";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase";

export default function HomePage({ navigation, route }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews();
  }, []);

  const getReviews = async () => {
    const reviewRef = collection(db, "reviewsList");

    const getReviewByState = query(reviewRef, where("state", "==", 1));

    const reviewSnapShot = await getDocs(getReviewByState);

    const reviewValue = reviewSnapShot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    setReviews(reviewValue);
  };

  return (
    <View style={shareStyle.container}>
      <View style={shareStyle.content}>
        <View style={[shareStyle.navbar, shareStyle.navbar__two]}>
          <Text style={shareStyle.navbar__title}>Good Morning!</Text>
          <TouchableOpacity
            style={shareStyle.navbar__icon}
            onPress={() => navigation.navigate("Detail")}
          >
            <View style={shareStyle.navbar__icon_container}>
              <Icon name="bookmark" style={shareStyle.icon} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={shareStyle.body}>
          <View style={homeStyle.home__container}>
            <View style={homeStyle.home__group}>
              <Text style={homeStyle.group__headline}>Our Services</Text>
              <View style={homeStyle.group__btns}>
                <TouchableOpacity
                  style={homeStyle.btn__container}
                  onPress={() => navigation.navigate("HourOrder")}
                >
                  <Image source={Clock} />
                  <View style={homeStyle.btn__text}>
                    <Text style={homeStyle.service}>Hire in</Text>
                    <Text style={homeStyle.type}>Hours</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={homeStyle.btn__container}
                  onPress={() => navigation.navigate("DayOrder")}
                >
                  <Image source={Calendar} />
                  <View style={homeStyle.btn__text}>
                    <Text style={homeStyle.service}>Hire in</Text>
                    <Text style={homeStyle.type}>Days</Text>
                  </View>
                </TouchableOpacity>
                {/* <TouchableOpacity style={homeStyle.btn__container}>
                  <Image source={Box} />

                  <View style={homeStyle.btn__text}>
                    <Text style={homeStyle.service}>Hire with</Text>
                    <Text style={homeStyle.type}>Combo</Text>
                  </View>
                </TouchableOpacity> */}
              </View>
              <View style={homeStyle.group__btns}>
                <TouchableOpacity
                  style={[homeStyle.btn__container, homeStyle.online]}
                  onPress={() => navigation.navigate("CustomOrder")}
                >
                  <Image source={Customer} />
                  <View style={homeStyle.btn__text}>
                    <Text style={homeStyle.type}>Custom</Text>
                    <Text style={homeStyle.type}>Services</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={homeStyle.home__group}>
              <Text style={homeStyle.group__headline}>Our Feedback</Text>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={homeStyle.group__review_list}
              >
                {reviews.length > 0 ? (
                  reviews.map((review, index) => (
                    <View key={index} style={homeStyle.list__item}>
                      <View style={homeStyle.item__headline}>
                        <Text style={homeStyle.item__name}>
                          {review.userName}
                        </Text>
                        <View style={homeStyle.item__service}>
                          <Text style={homeStyle.item__service_title}>
                            Service:
                          </Text>
                          {review.orderService === 0 ? (
                            <Text style={homeStyle.item__service_value}>
                              Hourly
                            </Text>
                          ) : review.orderService === 1 ? (
                            <Text style={homeStyle.item__service_value}>
                              Daily
                            </Text>
                          ) : (
                            <Text style={homeStyle.item__service_value}>
                              Combo
                            </Text>
                          )}
                        </View>
                        <View style={homeStyle.item__rate}>
                          <Text style={homeStyle.item__rate_number}>
                            {(review.rateOverall + 1).toFixed(1)}/5.0
                          </Text>
                          <Icon name="mood" style={homeStyle.item__rate_icon} />
                        </View>
                      </View>
                      <View style={homeStyle.item__feedback}>
                        {review.rateFeedback === "" ? (
                          <Text style={homeStyle.item__feedback_value}>
                            "Great!!"
                          </Text>
                        ) : review.rateFeedback.length < 30 ? (
                          <Text style={homeStyle.item__feedback_value}>
                            "{review.rateFeedback}"
                          </Text>
                        ) : (
                          <Text style={homeStyle.item__feedback_value}>
                            "{review.rateFeedback.substring(0, 30)}..."
                          </Text>
                        )}
                      </View>
                    </View>
                  ))
                ) : (
                  <Text>There is no review yet</Text>
                )}
              </ScrollView>
            </View>
          </View>
        </View>
      </View>
      {/* <View style={shareStyle.tab__container}>
        <Icon name="home" style={shareStyle.tab__icon}></Icon>
        <TouchableOpacity onPress={() => navigation.navigate("Detail")}>
          <Icon name="bookmark" style={shareStyle.tab__icon}></Icon>
        </TouchableOpacity>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({});
