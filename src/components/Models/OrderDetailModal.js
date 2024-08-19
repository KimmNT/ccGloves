import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import detailStyle from "../../styles/orderDetailModal";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function OrderDetailModal({
  modalVisible,
  setModalVisible,
  orderDate,
  orderType,
}) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(false);
      }}
    >
      <View style={detailStyle.summary__popup}>
        <View style={detailStyle.summary__content}>
          <Text style={detailStyle.order__title}>Order Detail</Text>
          {orderType === 0 ? (
            <Text style={detailStyle.order__headline}>
              Service: Hire in Hours
            </Text>
          ) : orderType === 1 ? (
            <Text style={detailStyle.order__headline}>
              Service: Hire in Days
            </Text>
          ) : (
            <></>
          )}
          <View style={detailStyle.order__list}>
            {orderDate.map((order, index) => (
              <View style={detailStyle.order__item} key={index}>
                <View style={detailStyle.item__info}>
                  <Text style={detailStyle.item__text}>Date:</Text>
                  <Text style={detailStyle.item__value}>
                    {order.selectedDate}
                  </Text>
                </View>
                <View style={detailStyle.item__info}>
                  <Text style={detailStyle.item__text}>Work time:</Text>
                  <Text style={detailStyle.item__value}>
                    {order.startTime}:00 - {order.startTime + order.duration}
                    :00 ({order.duration}hrs)
                  </Text>
                </View>
              </View>
            ))}
          </View>
          <TouchableOpacity
            style={detailStyle.close__btn}
            onPress={() => setModalVisible(false)}
          >
            <Icon name="close" style={detailStyle.close__icon} />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({});
