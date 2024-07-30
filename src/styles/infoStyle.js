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
  info__container: {
    paddingHorizontal: res * 0.01,
    gap: res * 0.025,
  },
  info__box: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignContent: "center",
    justifyContent: "space-between",
  },
  info__input: {
    gap: res * 0.015,
  },
  input__half: {
    width: "45%",
  },
  input__full: {
    width: "100%",
  },
  box__title: {
    fontSize: res * 0.02,
    fontWeight: "600",
  },
  box__input: {
    backgroundColor: bgColor,
    paddingHorizontal: res * 0.015,
    paddingVertical: res * 0.01,
    borderRadius: res * 0.015,
    fontSize: res * 0.02,
    fontWeight: "600",
  },
  submit__container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: res * 0.02,
    paddingVertical: res * 0.03,
  },
  notSave: {
    backgroundColor: light,
    borderColor: dark,
    // borderWidth: 1,
    borderStyle: "solid",
    paddingVertical: res * 0.015,
    paddingHorizontal: res * 0.02,
    borderRadius: res * 0.015,
  },
  saved: {
    backgroundColor: primary,
    borderColor: primary,
    borderWidth: 1,
    borderStyle: "solid",
    paddingVertical: res * 0.015,
    paddingHorizontal: res * 0.02,
    borderRadius: res * 0.015,
  },
  saved__text: {
    fontWeight: "600",
    color: light,
  },
  notSave__text: {
    fontWeight: "600",
    color: dark,
  },
  submit__btn: {
    width: res * 0.07,
    height: res * 0.07,
    backgroundColor: softYellow,
    borderRadius: (res * 0.07) / 2,
    justifyContent: "center",
    alignItems: "center",
  },
  submit__circle: {
    width: res * 0.04,
    height: res * 0.04,
    backgroundColor: light,
    borderRadius: (res * 0.04) / 2,
    justifyContent: "center",
    alignItems: "center",
  },
  submit__text: {
    fontSize: res * 0.03,
  },
});

export default styles;
