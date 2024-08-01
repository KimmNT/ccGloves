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
  home__container: {
    width: "100%",
    height: "100%",
  },
  home__group: {
    display: "flex",
    gap: res * 0.04,
  },
  group__headline: {
    fontSize: res * 0.025,
    fontWeight: "600",
    color: primary,
  },
  group__btns: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: res * 0.02,
  },
  btn__container: {
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: btnColor,
    padding: res * 0.015,
    borderRadius: res * 0.02,
    gap: res * 0.01,
  },
  online: {
    flexDirection: "row",
    padding: res * 0.03,
    gap: res * 0.05,
  },
  btn__icon: {
    fontSize: res * 0.07,
  },
  hour: {
    color: softYellow,
  },
  day: {
    color: softRed,
  },
  other: {
    color: softYellow,
  },
  btn__text: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  service: {
    fontSize: res * 0.02,
  },
  type: {
    fontSize: res * 0.02,
    fontWeight: "900",
  },
});

export default styles;
