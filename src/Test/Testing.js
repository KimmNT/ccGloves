import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import * as FileSystem from "expo-file-system";

export default function Testing() {
  const [input, setInput] = useState("");
  const [storageValue, setStorageValue] = useState("");

  async function saveDataToFile(fileName, data) {
    const fileUri = FileSystem.documentDirectory + fileName;
    try {
      await FileSystem.writeAsStringAsync(fileUri, data);
      console.log("Data saved successfully to", fileUri);
    } catch (error) {
      console.error("Error saving data", error);
    }
  }
  async function readDataFromFile(fileName) {
    const fileUri = FileSystem.documentDirectory + fileName;
    try {
      const data = await FileSystem.readAsStringAsync(fileUri);
      console.log("Data read successfully:", data);
      return setStorageValue(data);
    } catch (error) {
      console.error("Error reading data", error);
      return null;
    }
  }
  const handleSaveStorage = () => {
    saveDataToFile("userInfo.txt", input);
  };
  const handleReadStorage = () => {
    readDataFromFile("userInfo.txt");
  };
  return (
    <SafeAreaView>
      <TextInput
        placeholder="Input here"
        defaultValue={input}
        onChangeText={(newText) => setInput(newText)}
      />
      <Text>{storageValue}</Text>
      <TouchableOpacity onPress={handleSaveStorage}>
        <Text>Save input value</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleReadStorage}>
        <Text>Read input value</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
