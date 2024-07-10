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
    marginTop: res * 0.01,
  },
  hour__time: {},
  time__headline: {
    fontSize: res * 0.02,
    fontWeight: "600",
  },
  time__picking: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: res * 0.05,
  },
  picking__item: {
    alignItems: "center",
    backgroundColor: primary,
    flexGrow: 1,
    padding: res * 0.01,
    borderRadius: res * 0.02,
  },
  picking__title: {
    color: light,
    fontSize: res * 0.02,
    fontWeight: "600",
  },
  picking__line: {
    width: "70%",
    height: res * 0.003,
    backgroundColor: light,
  },
  picking__input: {},
});

export default styles;
