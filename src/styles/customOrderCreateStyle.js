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
  custom__create_container: {
    width: "100%",
    gap: res * 0.03,
  },
  create__summary: {
    width: "100%",
    gap: res * 0.01,
  },
  create__summary_name: {
    fontSize: res * 0.02,
    fontWeight: "600",
    color: dark,
  },
  create__summary_detail: {
    fontSize: res * 0.015,
    color: "#696969",
  },
  create__detail: {
    height: res * 0.15,
  },
  create__detail_value: {},
  create__btn_container: {
    position: "absolute",
    bottom: res * 0.02,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: res * 0.01,
  },
  create__btn_info: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: res * 0.01,
  },
  create__btn: {
    backgroundColor: softYellow,
    width: "90%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: res * 0.03,
    paddingHorizontal: res * 0.015,
    borderRadius: res * 0.04,
  },
  create__btn_value: {
    fontSize: res * 0.02,
    textTransform: "uppercase",
    fontWeight: "900",
  },
});

export default styles;
