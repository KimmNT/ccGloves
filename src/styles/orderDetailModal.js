import { StyleSheet, Dimensions } from "react-native";

const res = Dimensions.get("window").height;

const primary = "#141E46";
const btnColor = "#F0EEED";
const bgColor = "#EDEDED";
const softRed = "#F45050";
const softYellow = "#FFC861";
const dark = "#000";
const light = "#FFF";

const styles = StyleSheet.create({
  summary__popup: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.6)",
  },
  summary__content: {
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: light,
    padding: res * 0.02,
    borderRadius: res * 0.03,
    gap: res * 0.03,
    width: "90%",
  },
  order__title: {
    fontSize: res * 0.03,
    color: dark,
    fontWeight: "600",
  },
  order__headline: {
    fontSize: res * 0.02,
    color: dark,
    fontWeight: "600",
  },
  order__list: {
    backgroundColor: primary,
    padding: res * 0.015,
    borderRadius: res * 0.03,
  },
  order__item: {
    backgroundColor: light,
    borderRadius: res * 0.02,
  },
  info__container: {
    backgroundColor: primary,
    borderRadius: res * 0.03,
    paddingHorizontal: res * 0.02,
    paddingVertical: res * 0.03,
    gap: res * 0.02,
  },
  info__item: {
    backgroundColor: light,
    borderRadius: res * 0.02,
    padding: res * 0.02,
  },
  item__info: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: res * 0.02,
    padding: res * 0.02,
  },
  item__text: {
    fontSize: res * 0.02,
  },
  item__value: {
    fontSize: res * 0.02,
    fontWeight: "600",
  },
  close__btn: {
    position: "absolute",
    top: res * -0.01,
    right: res * -0.01,
    width: res * 0.04,
    height: res * 0.04,
    borderRadius: (res * 0.04) / 2,
    borderStyle: "solid",
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: light,
  },
  close__icon: {
    color: dark,
    fontSize: res * 0.025,
  },
});
export default styles;
