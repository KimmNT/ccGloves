import { Dimensions, StyleSheet } from "react-native";

const res = Dimensions.get("window").height;

const primary = "#141E46";
const btnColor = "#F0EEED";
const bgColor = "#EDEDED";
const softRed = "#F45050";
const softYellow = "#FFC861";
const dark = "#000";
const light = "#FFF";

const styles = StyleSheet.create({
  custom__container: {
    width: "100%",
  },
  custom__content: {
    width: "100%",
    position: "relative",
  },
  custom__menu: {
    flexDirection: "row",
    gap: res * 0.01,
    marginTop: res * 0.02,
  },
  menu__item_main: {
    backgroundColor: primary,
    paddingHorizontal: res * 0.02,
    paddingVertical: res * 0.01,
    borderRadius: res * 0.01,
  },
  menu__item_text_main: {
    fontSize: res * 0.015,
    fontWeight: "600",
    color: light,
  },
  custom__menu_list: {},
  menu__item: {
    backgroundColor: light,
    paddingHorizontal: res * 0.02,
    paddingVertical: res * 0.01,
    borderRadius: res * 0.01,
    marginRight: res * 0.005,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: primary,
  },
  menu__item_text: {
    fontSize: res * 0.015,
    fontWeight: "600",
  },
  menu__item_active: {
    backgroundColor: softYellow,
    borderColor: softYellow,
  },
  menu__item_text_active: {},
  custom__items: {
    width: "100%",
    marginTop: res * 0.02,
  },
  item__detail: {
    flexDirection: "row",
    width: "100%",
    flexWrap: "wrap",
    gap: res * 0.01,
  },
  detail__btn: {
    backgroundColor: light,
    paddingHorizontal: res * 0.02,
    paddingVertical: res * 0.01,
    borderRadius: res * 0.01,
    marginRight: res * 0.005,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: primary,
    justifyContent: "center",
    alignItems: "center",
  },
  detail__btn_value: {
    fontWeight: "600",
    color: dark,
  },
  detail__btn_active: {
    backgroundColor: primary,
  },
  detail__btn_value_active: {
    fontWeight: "600",
    color: light,
  },
  custom__create_container: {
    position: "absolute",
    bottom: res * 0.03,
    right: res * 0.03,
    backgroundColor: "#FFE9BF",
    width: res * 0.07,
    height: res * 0.07,
    borderRadius: (res * 0.07) / 2,
    alignItems: "center",
    justifyContent: "center",
  },
  custom__create_btn: {
    backgroundColor: softYellow,
    width: res * 0.05,
    height: res * 0.05,
    borderRadius: (res * 0.05) / 2,
    alignItems: "center",
    justifyContent: "center",
  },
  custom__create_btn_value: {
    fontSize: res * 0.02,
    color: dark,
  },
});

export default styles;
