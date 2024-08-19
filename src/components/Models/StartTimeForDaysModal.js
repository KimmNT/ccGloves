import {
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import durationStyle from "../../styles/durationModal";
import Icon from "react-native-vector-icons/MaterialIcons";
import moment from "moment";

export default function StartTimeModal({
  modalVisible,
  setModalVisible,
  durationValue,
  selectedStartTime,
  selectedDate,
}) {
  const currentDate = moment().format("DD/MM/YYYY");

  const getCurrentHour = () => {
    const date = new Date();
    return date.getHours();
  };

  const generateTimesArray = () => {
    if (currentDate === selectedDate) {
      const currentHour = getCurrentHour();
      const times = [];
      for (let i = currentHour + 1; i <= 20; i++) {
        times.push({ time: i });
      }
      return times;
    } else {
      const times = [];
      for (let i = 7; i <= 20; i++) {
        times.push({ time: i });
      }
      return times;
    }
  };

  const numbers = generateTimesArray();

  const maxTime = 20 - durationValue;
  const sortedNumbers = numbers
    .filter((number) => number.time <= maxTime)
    .sort((a, b) => a.time - b.time);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={durationStyle.modal__container}>
        <View style={durationStyle.modal__content}>
          <Text style={durationStyle.modalText}>Choose start time</Text>
          <View style={durationStyle.numer__list}>
            {sortedNumbers.map((number, index) => (
              <TouchableOpacity
                style={durationStyle.numberButton}
                key={index}
                onPress={() => {
                  selectedStartTime(number.time);
                  setModalVisible(false);
                }}
              >
                <Text style={durationStyle.numberText}>{number.time}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <TouchableOpacity
          style={durationStyle.btn__item}
          onPress={() => setModalVisible(false)}
        >
          <Icon style={durationStyle.btn__item_icon} name="close" />
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({});
