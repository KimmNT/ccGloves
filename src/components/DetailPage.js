import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function DetailPage({ navigation, route }) {
  const { name } = route.params;

  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
