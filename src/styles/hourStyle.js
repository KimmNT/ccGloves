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
  hour__container: {
    width: "100%",
    height: "100%",
  },
  hour__headline: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  headline_text: {
    gap: res * 0.01,
  },
  item: {
    fontSize: res * 0.02,
  },
  hour__calendar: {
    marginTop: res * 0.03,
  },
  hour__time: {
    marginTop: res * 0.03,
    gap: res * 0.02,
  },
  time__headline: {
    fontSize: res * 0.02,
    fontWeight: "600",
  },
  time__picking: {
    flexDirection: "row",
    justifyContent: "space-around",
    gap: res * 0.1,
  },
  picking__item: {
    alignItems: "center",
    backgroundColor: primary,
    flexGrow: 0.5,
    paddingVertical: res * 0.02,
    borderRadius: res * 0.02,
    gap: res * 0.01,
  },
  picking__title: {
    color: light,
    fontSize: res * 0.02,
    fontWeight: "600",
  },
  picking__line: {
    width: "60%",
    height: res * 0.002,
    backgroundColor: bgColor,
  },
  picking__input: {
    color: light,
    fontSize: res * 0.03,
    fontWeight: "600",
  },
});

export default styles;
