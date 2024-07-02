import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

export default function HomePage({ navigation }) {
  const [input, setInput] = useState("");

  return (
    <View>
      <Text>HomePage</Text>
      <TextInput
        value={input}
        onChangeText={(text) => setInput(text)}
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate("Detail", { name: input })}
      >
        <Text>Passing dataaaaaaa</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
