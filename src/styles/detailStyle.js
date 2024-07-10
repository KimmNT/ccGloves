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
    gap: res * 0.03,
  },
  detail__headerButton: {
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
  },
  detail__btn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: res * 0.03,
    paddingVertical: res * 0.01,
    borderRadius: res * 0.02,
  },
  btn__active: {
    backgroundColor: primary,
  },
  btn__inactive: {
    backgroundColor: light,
  },
  text__active: {
    fontSize: res * 0.025,
    fontWeight: "600",
    color: light,
  },
  text__inactive: {
    fontSize: res * 0.025,
    fontWeight: "600",
    color: dark,
  },
  detail__containerInput: {
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  detail__headerButtontext: {
    fontSize: res * 0.025,
    fontWeight: "600",
    color: light,
  },
  detail__hearderInput: {
    backgroundColor: btnColor,
    width: "80%",
    padding: res * 0.02,
    borderRadius: res * 0.02,
    gap: res * 0.05,
  },
  detail__input: {
    fontSize: res * 0.02,
    fontWeight: "600",
    color: dark,
  },
  search__icon_container: {
    backgroundColor: primary,
    width: res * 0.05,
    height: res * 0.05,
    borderRadius: (res * 0.05) / 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  search__icon: {
    fontSize: res * 0.03,
    color: light,
  },
  orderBox: {
    width: "100%",
    padding: res * 0.02,
    borderRadius: res * 0.03,
    gap: res * 0.02,
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: primary,
  },
  orderBox_name: {
    padding: res * 0.01,
    gap: res * 0.02,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  orderBox__text: {
    fontSize: res * 0.02,
    color: light,
  },
});
export default styles;
