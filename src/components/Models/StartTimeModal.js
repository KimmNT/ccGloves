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

export default function StartTimeModal({
  modalVisible,
  setModalVisible,
  durationValue,
  selectedStartTime,
}) {
  const numbers = [
    { time: 7 },
    { time: 8 },
    { time: 9 },
    { time: 10 },
    { time: 11 },
    { time: 12 },
    { time: 13 },
    { time: 14 },
    { time: 15 },
    { time: 16 },
    { time: 17 },
    { time: 18 },
    { time: 19 },
  ];
  const maxTime = 22 - durationValue;
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
          <Text style={durationStyle.btn__item_text}>Close</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({});
