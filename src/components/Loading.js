import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import shareStyle from "../styles/shareStyle";
import loadingStyle from "../styles/loadingStyle";

import LoadingElip from "../images/loadingElip.png";
export default function Loading() {
  return (
    <View style={shareStyle.container}>
      <Text style={loadingStyle.loading__textUpper}>We are here for your</Text>
      <Text style={loadingStyle.loading__textLower}>cleaning time!</Text>
      <TouchableOpacity style={loadingStyle.loading__parent}>
        <View style={loadingStyle.loading__child}>
          <Text style={loadingStyle.loading__text}>ccGloves</Text>
        </View>
      </TouchableOpacity>

      <View style={loadingStyle.loading__container}>
        <Image source={LoadingElip} style={loadingStyle.loading__imageElip} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
