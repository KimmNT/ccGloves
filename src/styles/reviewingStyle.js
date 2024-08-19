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
  review__container: {
    width: "100%",
    height: "100%",
  },
  review__list: {
    width: "100%",
    height: "100%",
    gap: res * 0.05,
    marginTop: res * 0.03,
  },
  review__item: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: res * 0.02,
  },
  item__title: {
    fontSize: res * 0.025,
    fontWeight: "600",
  },
  item__rich_input: {
    width: "90%",
    backgroundColor: btnColor,
    paddingHorizontal: res * 0.02,
    paddingVertical: Platform.OS === "ios" ? res * 0.02 : res * 0.01,
    borderRadius: res * 0.02,
  },
  item__rate: {
    flexDirection: "row",
    gap: res * 0.03,
  },
  rate__btn: {
    // backgroundColor: softYellow,
  },
  rate__icon: {
    fontSize: res * 0.05,
    color: "#F5EDED",
  },
  choseBad: {
    color: "#A02334",
  },
  choseOk: {
    color: "#FF8343",
  },
  choseGood: {
    color: "#FFB200",
  },
  choseGreat: {
    color: "#508D4E",
  },
  review__btn_container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    // paddingBottom: res * 0.1,
  },
  review__btn: {
    width: "90%",
    backgroundColor: softYellow,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: res * 0.02,
    borderRadius: res * 0.03,
    marginTop: res * 0.05,
  },
  review__btn_text: {
    color: dark,
    fontSize: res * 0.02,
    textTransform: "uppercase",
    fontWeight: "600",
  },
});

export default styles;
