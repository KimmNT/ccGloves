// styles.js
import { StyleSheet, Dimensions, Platform } from "react-native";

const res = Dimensions.get("window").height;

const primary = "#141E46";
const btnColor = "#F0EEED";
const bgColor = "#EDEDED";
const softRed = "#F45050";
const softYellow = "#FFC861";
const dark = "#000";
const light = "#FFF";

const styles = StyleSheet.create({
  reviewS__container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    gap: res * 0.05,
  },
  reviewS__title: {
    fontSize: res * 0.025,
    textAlign: "center",
  },
  reviewS__code: {
    fontSize: res * 0.03,
    textAlign: "center",
    fontWeight: "600",
  },
  reviewS__btn_container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  reviewS__btn: {
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: softYellow,
    paddingVertical: res * 0.02,
    borderRadius: res * 0.03,
  },
  reviewS__btn_text: {
    color: dark,
    fontSize: res * 0.025,
    textTransform: "uppercase",
    fontWeight: "600",
  },
});

export default styles;
