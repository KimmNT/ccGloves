import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import shareStyle from "../styles/shareStyle";
import homeStyle from "../styles/homeStyle";
import Icon from "react-native-vector-icons/MaterialIcons";
import Clock from "../images/clock.png";
import Box from "../images/box.png";
import Calendar from "../images/calendar.png";
import Customer from "../images/customer-service.png";

export default function HomePage({ navigation }) {
  return (
    <View style={shareStyle.container}>
      <View style={shareStyle.content}>
        <View style={[shareStyle.navbar, shareStyle.navbar__two]}>
          <Text style={shareStyle.navbar__title}>Good Morning!</Text>
          <TouchableOpacity style={shareStyle.navbar__icon}>
            <View style={shareStyle.navbar__icon_container}>
              <Icon name="notifications" style={shareStyle.icon} />
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
                <TouchableOpacity style={homeStyle.btn__container}>
                  <Image source={Box} />

                  <View style={homeStyle.btn__text}>
                    <Text style={homeStyle.service}>Hire with</Text>
                    <Text style={homeStyle.type}>Combo</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={homeStyle.group__btns}>
                <TouchableOpacity
                  style={[homeStyle.btn__container, homeStyle.online]}
                >
                  <Image source={Customer} />
                  <View style={homeStyle.btn__text}>
                    <Text style={homeStyle.type}>Customer</Text>
                    <Text style={homeStyle.type}>Services</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={shareStyle.tab__container}>
        <Icon name="home" style={shareStyle.tab__icon}></Icon>
        <TouchableOpacity onPress={() => navigation.navigate("Detail")}>
          <Icon name="bookmark" style={shareStyle.tab__icon}></Icon>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
