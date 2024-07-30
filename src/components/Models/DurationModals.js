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

export default function DurationModals({
  modalVisible,
  setModalVisible,
  selectedDuration,
  startTimeValue,
  selectedDate,
}) {
  const numbers = [
    { time: 3 },
    { time: 4 },
    { time: 5 },
    { time: 6 },
    { time: 7 },
    { time: 8 },
    { time: 9 },
    { time: 10 },
    { time: 11 },
    { time: 12 },
    { time: 13 },
    { time: 14 },
    { time: 15 },
  ];

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
          <Text style={durationStyle.modalText}>
            Choose duration (3 hours at least)
          </Text>
          <View style={durationStyle.numer__list}>
            {numbers.map((number, index) => (
              <TouchableOpacity
                style={durationStyle.numberButton}
                key={index}
                onPress={() => {
                  selectedDuration(number.time);

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
