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
  payment__container: {
    width: "100%",
    height: "100%",
    gap: res * 0.04,
  },
  payment__value: {
    fontSize: res * 0.03,
    fontWeight: "600",
    color: dark,
    textAlign: "center",
    marginTop: res * 0.01,
  },
  payment__option: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  payment__btn: {
    width: "45%",
    flexDirection: "row",
    alignItems: "center",
    padding: res * 0.005,
    borderRadius: res * 0.02,
    justifyContent: "space-around",
  },
  active: {
    backgroundColor: primary,
  },
  inactive: {
    backgroundColor: bgColor,
  },
  payment__btn_text: {
    fontSize: res * 0.02,
    fontWeight: "600",
  },
  text__active: {
    color: light,
  },
  text__inactive: {
    color: dark,
  },
  payment__confirm_container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: res * 0.01,
  },
  payment__confirm_content: {
    backgroundColor: softYellow,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: res * 0.03,
    paddingHorizontal: res * 0.015,
    borderRadius: res * 0.04,
  },
  value__text: {
    fontSize: res * 0.025,
    textTransform: "uppercase",
    fontWeight: "900",
  },
  atm__container: {
    gap: res * 0.02,
    marginTop: res * 0.02,
  },
  atm__item: {
    width: "100%",
    gap: res * 0.01,
  },
  item__title: {
    fontSize: res * 0.02,
    color: dark,
    fontWeight: "600",
  },
  item__input: {
    width: "100%",
    paddingVertical: res * 0.01,
    paddingHorizontal: res * 0.02,
    backgroundColor: btnColor,
    borderRadius: res * 0.02,
    fontSize: res * 0.02,
    fontWeight: "600",
  },
  atm__card: {
    width: "100%",
    backgroundColor: primary,
    paddingVertical: res * 0.02,
    paddingHorizontal: res * 0.04,
    borderRadius: res * 0.02,
    gap: res * 0.04,
  },
  atm__number: {
    fontSize: res * 0.025,
    fontWeight: "600",
    color: light,
  },
  atm__code: {
    fontSize: res * 0.02,
    fontWeight: "600",
    color: light,
  },
  atm__type: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: res * 0.02,
    width: "100%",
  },
});

export default styles;
