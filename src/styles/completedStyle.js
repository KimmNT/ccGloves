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
  completed__container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    gap: res * 0.05,
    marginTop: res * 0.01,
  },
  completed__headline: {
    fontSize: res * 0.03,
    fontWeight: "600",
    textAlign: "center",
  },
  completed__text: {
    fontSize: res * 0.02,
    fontWeight: "600",
    textAlign: "center",
    width: "80%",
  },
  completed__orderID: {
    fontSize: res * 0.02,
    fontWeight: "600",
    textAlign: "center",
  },
  completed__btn_container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: res * 0.01,
  },
  completed__btn: {
    backgroundColor: softYellow,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: res * 0.03,
    paddingHorizontal: res * 0.015,
    borderRadius: res * 0.04,
  },
  completed__btn_text: {
    fontSize: res * 0.025,
    textTransform: "uppercase",
    fontWeight: "900",
  },
});
export default styles;
