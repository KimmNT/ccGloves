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
  summary__container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  order__id: {
    marginTop: res * 0.05,
    fontSize: res * 0.02,
    fontWeight: "600",
  },
  summary__item: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column",
    marginTop: res * 0.1,
    gap: res * 0.03,
  },
  summary__btn: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: primary,
    paddingVertical: res * 0.02,
    paddingHorizontal: res * 0.03,
    borderRadius: res * 0.025,
  },
  btn__icon: {
    fontSize: res * 0.05,
    color: light,
  },
  btn__text: {
    fontSize: res * 0.025,
    textAlign: "center",
    color: light,
    fontWeight: "600",
  },
});
export default styles;
