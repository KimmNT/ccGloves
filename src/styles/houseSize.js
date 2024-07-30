// styles.js
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
  room__container: {
    marginTop: res * 0.05,
    gap: res * 0.03,
  },
  room__headline: {
    fontSize: res * 0.02,
    fontWeight: "600",
  },
  room__options: {
    width: "100%",
    backgroundColor: primary,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    flexWrap: "wrap",
    padding: res * 0.03,
    gap: res * 0.03,
    borderRadius: res * 0.03,
  },
  room__item: {
    width: "25%",
    alignItems: "center",
    justifyContent: "center",
    padding: res * 0.02,
    borderRadius: res * 0.02,
  },
  room__selected: {
    backgroundColor: softRed,
  },
  room__not_selected: {
    backgroundColor: btnColor,
  },
  room__item_value: {
    fontSize: res * 0.025,
    fontWeight: "600",
  },
  value__selected: {
    color: light,
  },
  value__not_selected: {
    color: dark,
  },
  room__summary: {
    width: "100%",
    alignItems: "center",
    marginTop: res * 0.05,
  },
  room__summary_value: {
    fontSize: res * 0.025,
    fontWeight: "600",
  },
});

export default styles;
