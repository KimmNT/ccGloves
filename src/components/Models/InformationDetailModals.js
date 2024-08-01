import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import detailStyle from "../../styles/orderDetailModal";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function InformationDetailModal({
  modalVisible,
  setModalVisible,
  userInfo,
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
          <Text style={detailStyle.order__title}>Information</Text>
          <View style={detailStyle.info__container}>
            <View style={detailStyle.info__item}>
              <Text style={detailStyle.item__title}>Name</Text>
              <Text style={detailStyle.item__value}>
                {userInfo.firstName} {userInfo.lastName}
              </Text>
            </View>
            <View style={detailStyle.info__item}>
              <Text style={detailStyle.item__title}>Phone number</Text>
              <Text style={detailStyle.item__value}>{userInfo.phone}</Text>
            </View>
            <View style={detailStyle.info__item}>
              <Text style={detailStyle.item__title}>Email</Text>
              <Text style={detailStyle.item__value}>{userInfo.email}</Text>
            </View>
            <View style={detailStyle.info__item}>
              <Text style={detailStyle.item__title}>Postcode</Text>
              <Text style={detailStyle.item__value}>{userInfo.postCode}</Text>
            </View>
            <View style={detailStyle.info__item}>
              <Text style={detailStyle.item__title}>Address</Text>
              <Text style={detailStyle.item__value}>
                {userInfo.addDetail}, {userInfo.district}, {userInfo.city},
                {userInfo.prefecture}
              </Text>
            </View>
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
