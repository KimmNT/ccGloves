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
  detail__container: {
    width: "100%",
    height: "100%",
  },
  detail__header: {
    width: "100%",
    // justifyContent: "center",
    // alignItems: "center",
    gap: res * 0.01,
    // backgroundColor: "red",
  },
  detail__headerButton: {
    width: "100%",
    // height: res * 0.15,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
  },
  detail__btn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: primary,
    padding: res * 0.01,
    borderRadius: res * 0.02,
    gap: res * 0.05,
  },
  detail__headerButtontext: {
    fontSize: res * 0.025,
    fontWeight: "600",
    color: light,
  },
  detail__hearderInput: {
    // display: "flex",
    // alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "blue",
    width: "100%",
    padding: res * 0.01,
    borderRadius: res * 0.02,
    gap: res * 0.05,
  },
});
export default styles;
