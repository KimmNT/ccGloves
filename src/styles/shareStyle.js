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
    alignItems: "center",
    position: "relative",
  },
  navbar: {
    backgroundColor: primary,
    width: "95%",
    height: res * 0.2,
    borderTopLeftRadius: res * 0.05,
    borderTopRightRadius: res * 0.05,
    position: "absolute",
    top: 0,
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    paddingHorizontal: res * 0.02,
    paddingVertical: res * 0.03,
  },
  navbar__title: {
    fontSize: res * 0.025,
    fontWeight: "600",
    color: light,
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
  },
});

export default styles;
