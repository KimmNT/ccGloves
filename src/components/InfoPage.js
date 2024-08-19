import {
  Alert,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import shareStyle from "../styles/shareStyle";
import infoStyle from "../styles/infoStyle";
import Icon from "react-native-vector-icons/MaterialIcons";
import * as FileSystem from "expo-file-system";

export default function InfoPage({ navigation, route }) {
  const { currentPrice, orderDate, orderType } = route.params || {};

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState(0);
  const [email, setEmail] = useState("");
  const [prefecture, setPrefecture] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [postCode, setPostCode] = useState("");
  const [addDetail, setAddDetail] = useState("");
  const [saveInfo, setSaveInfo] = useState(false);
  const [storageValue, setStorageValue] = useState("");

  useEffect(() => {
    readDataFromFile("userInfo.txt");
    if (storageValue !== "") {
      // Split the string by the | delimiter
      const parts = storageValue.split("|");

      // Destructure the parts into individual variables
      const [
        firstName,
        lastName,
        phoneNumber,
        email,
        prefecture,
        city,
        district,
        postCode,
        addDetail,
      ] = parts;
      setFirstName(firstName);
      setLastName(lastName);
      setPhone(phoneNumber);
      setEmail(email);
      setPrefecture(prefecture);
      setCity(city);
      setDistrict(district);
      setPostCode(postCode);
      setAddDetail(addDetail);
    }
  }, [storageValue]);

  useEffect(() => {
    if (saveInfo) {
      saveDataToFile(
        "userInfo.txt",
        `${firstName}|${lastName}|${phone}|${email}|${prefecture}|${city}|${district}|${postCode}|${addDetail}`
      );
    }
  }, [saveInfo]);

  const handleSumarry = () => {
    if (
      firstName === "" &&
      lastName === "" &&
      phone === 0 &&
      email === "" &&
      prefecture === "" &&
      city === "" &&
      district === "" &&
      postCode === "" &&
      addDetail === ""
    ) {
      Alert.alert(
        "Not enough information",
        "Seem like you missing some fields. Please complete all required fields to continue!",
        [{ text: "OK", onPress: () => console.log("OK Pressed") }]
      );
    } else {
      navigation.navigate("Summary", {
        orderType: orderType,
        currentPrice: currentPrice,
        orderDate: orderDate,
        userInfo: {
          firstName: firstName,
          lastName: lastName,
          phone: phone,
          email: email,
          prefecture: prefecture,
          city: city,
          district: district,
          postCode: postCode,
          addDetail: addDetail,
        },
      });
    }
  };

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

  return (
    <KeyboardAvoidingView
      behavior="padding"
      // keyboardVerticalOffset={50} // Adjust this value if necessary
      style={shareStyle.container}
    >
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
          <Text style={shareStyle.navbar__title}>Information</Text>
        </View>
        <View style={shareStyle.body}>
          <View style={infoStyle.info__container}>
            <View style={infoStyle.info__box}>
              <View style={[infoStyle.info__input, infoStyle.input__half]}>
                <Text style={infoStyle.box__title}>First name</Text>
                <TextInput
                  style={infoStyle.box__input}
                  placeholder="Type here"
                  onChangeText={(newText) => setFirstName(newText)}
                  defaultValue={firstName}
                />
              </View>
              <View style={[infoStyle.info__input, infoStyle.input__half]}>
                <Text style={infoStyle.box__title}>Last name</Text>
                <TextInput
                  style={infoStyle.box__input}
                  placeholder="Type here"
                  onChangeText={(newText) => setLastName(newText)}
                  defaultValue={lastName}
                />
              </View>
            </View>
            <View style={infoStyle.info__box}>
              <View style={[infoStyle.info__input, infoStyle.input__full]}>
                <Text style={infoStyle.box__title}>Phone number</Text>
                <TextInput
                  style={infoStyle.box__input}
                  placeholder="Type here"
                  onChangeText={(newText) => setPhone(newText)}
                  defaultValue={phone}
                  keyboardType="numeric"
                />
              </View>
            </View>
            <View style={infoStyle.info__box}>
              <View style={[infoStyle.info__input, infoStyle.input__full]}>
                <Text style={infoStyle.box__title}>Email address</Text>
                <TextInput
                  style={infoStyle.box__input}
                  placeholder="Type here"
                  onChangeText={(newText) => setEmail(newText)}
                  defaultValue={email}
                />
              </View>
            </View>
            <View style={infoStyle.info__box}>
              <View style={[infoStyle.info__input, infoStyle.input__half]}>
                <Text style={infoStyle.box__title}>Prefecture</Text>
                <TextInput
                  style={infoStyle.box__input}
                  placeholder="Type here"
                  onChangeText={(newText) => setPrefecture(newText)}
                  defaultValue={prefecture}
                />
              </View>
              <View style={[infoStyle.info__input, infoStyle.input__half]}>
                <Text style={infoStyle.box__title}>City</Text>
                <TextInput
                  style={infoStyle.box__input}
                  placeholder="Type here"
                  onChangeText={(newText) => setCity(newText)}
                  defaultValue={city}
                />
              </View>
            </View>
            <View style={infoStyle.info__box}>
              <View style={[infoStyle.info__input, infoStyle.input__half]}>
                <Text style={infoStyle.box__title}>District/Area</Text>
                <TextInput
                  style={infoStyle.box__input}
                  placeholder="Type here"
                  onChangeText={(newText) => setDistrict(newText)}
                  defaultValue={district}
                />
              </View>
              <View style={[infoStyle.info__input, infoStyle.input__half]}>
                <Text style={infoStyle.box__title}>Post code</Text>
                <TextInput
                  style={infoStyle.box__input}
                  placeholder="Type here"
                  onChangeText={(newText) => setPostCode(newText)}
                  defaultValue={postCode}
                  keyboardType="numeric"
                />
              </View>
            </View>
            <View style={infoStyle.info__box}>
              <View style={[infoStyle.info__input, infoStyle.input__full]}>
                <Text style={infoStyle.box__title}>Block/Street</Text>
                <TextInput
                  style={infoStyle.box__input}
                  placeholder="Type here"
                  onChangeText={(newText) => setAddDetail(newText)}
                  defaultValue={addDetail}
                />
              </View>
            </View>
          </View>
          <View style={infoStyle.submit__container}>
            <TouchableOpacity
              style={saveInfo ? infoStyle.saved : infoStyle.notSave}
              onPress={() => setSaveInfo(!saveInfo)}
            >
              <Text
                style={
                  saveInfo ? infoStyle.saved__text : infoStyle.notSave__text
                }
              >
                Save for next time
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={infoStyle.submit__btn}
              onPress={handleSumarry}
            >
              <View style={infoStyle.submit__circle}>
                <Icon name="arrow-forward" style={infoStyle.submit__text} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({});
