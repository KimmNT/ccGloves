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
export default function Loading({ navigation }) {
  return (
    <View style={shareStyle.container}>
      <View style={loadingStyle.loading__header}>
        <View style={loadingStyle.loading__headerText}>
          <Text style={loadingStyle.loading__textUpper}>
            We are here for your
          </Text>
          <Text style={loadingStyle.loading__textLower}>cleaning time!</Text>
        </View>
        <TouchableOpacity
          style={loadingStyle.loading__buttonParent}
          onPress={() => navigation.navigate("Home")}
        >
          <View style={loadingStyle.loading__buttonChild}>
            <Text style={loadingStyle.loading__textButton}>ccGloves</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={loadingStyle.loading__containerImage}>
        <Image source={LoadingElip} style={loadingStyle.loading__imageElip} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
