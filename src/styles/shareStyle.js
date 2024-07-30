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
  container: {
    width: "100%",
    height: "100%",
    position: "relative",
    backgroundColor: bgColor,
  },
  content: {
    marginTop: res * 0.06,
    width: "100%",
    height: "100%",
    display: "flex",
    // alignItems: "center",
    position: "relative",
    // backgroundColor: light,
  },
  navbar: {
    backgroundColor: primary,
    width: "100%",
    height: res * 0.2,
    borderTopLeftRadius: res * 0.05,
    borderTopRightRadius: res * 0.05,
    position: "absolute",
    top: 0,
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    paddingHorizontal: res * 0.03,
    paddingVertical: res * 0.03,
    // gap: res * 0.15,
  },
  navbar__title: {
    fontSize: res * 0.025,
    fontWeight: "600",
    color: light,
    justifyContent: "center",
  },
  navbar__icon: {},
  navbar__icon_container: {
    backgroundColor: btnColor,
    width: res * 0.05,
    height: res * 0.05,
    borderRadius: (res * 0.05) / 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    fontSize: res * 0.025,
    color: primary,
  },
  body: {
    width: "100%",
    height: "100%",
    backgroundColor: light,
    borderTopLeftRadius: res * 0.05,
    borderTopRightRadius: res * 0.05,
    marginTop: res * 0.1,
    overflow: "hidden",
    padding: res * 0.03,
    position: "relative",
  },
  tab__container: {
    backgroundColor: btnColor,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    // height: res,
    position: "absolute",
    alignItems: "center",
    bottom: 0,
    padding: res * 0.025,
    borderTopLeftRadius: res * 0.05,
    borderTopRightRadius: res * 0.05,
  },
  tab__icon: {
    fontSize: res * 0.05,
    color: primary,
  },

  btn__value: {
    width: "100%",
    position: "absolute",
    bottom: res * 0.02,
    justifyContent: "center",
    alignItems: "center",
  },
  btn__value_content: {
    backgroundColor: softYellow,
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: res * 0.015,
    paddingHorizontal: res * 0.015,
    borderRadius: res * 0.04,
  },
  value__text: {
    fontSize: res * 0.03,
    fontWeight: "600",
  },
  value__icon_container: {
    width: res * 0.05,
    height: res * 0.05,
    borderRadius: (res * 0.05) / 2,
    backgroundColor: light,
    justifyContent: "center",
    alignItems: "center",
  },
  value__icon: {
    fontSize: res * 0.03,
  },
});

export default styles;
