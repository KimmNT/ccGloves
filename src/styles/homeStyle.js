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
  home__container: {
    marginTop: res * 0.03,
    width: "100%",
    height: "100%",
    gap: res * 0.1,
  },
  home__group: {
    display: "flex",
    gap: res * 0.03,
  },
  group__headline: {
    fontSize: res * 0.025,
    fontWeight: "600",
    color: primary,
  },
  group__btns: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: res * 0.02,
  },
  btn__container: {
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: btnColor,
    padding: res * 0.015,
    borderRadius: res * 0.02,
    gap: res * 0.01,
  },
  online: {
    flexDirection: "row",
    padding: res * 0.03,
    gap: res * 0.05,
  },
  btn__icon: {
    fontSize: res * 0.07,
  },
  hour: {
    color: softYellow,
  },
  day: {
    color: softRed,
  },
  other: {
    color: softYellow,
  },
  btn__text: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  service: {
    fontSize: res * 0.02,
  },
  type: {
    fontSize: res * 0.02,
    fontWeight: "900",
  },
  group__review_list: {},
  list__item: {
    padding: res * 0.02,
    marginRight: res * 0.02,
    flexDirection: "row",
    backgroundColor: primary,
    gap: res * 0.02,
    borderRadius: res * 0.02,
  },
  item__headline: {
    gap: res * 0.02,
  },
  item__name: {
    fontSize: res * 0.02,
    fontWeight: "600",
    color: light,
  },
  item__service: {
    flexDirection: "row",
    gap: res * 0.01,
  },
  item__service_title: {
    color: light,
  },
  item__service_value: {
    color: light,
  },
  item__rate: {
    flexDirection: "row",
    gap: res * 0.01,
    alignItems: "center",
  },
  item__rate_number: {
    fontWeight: "600",
    color: light,
  },
  item__rate_icon: {
    color: softYellow,
    fontSize: res * 0.02,
  },
  item__feedback: {
    width: res * 0.1,
    backgroundColor: light,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: res * 0.015,
  },
  item__feedback_value: {
    fontWeight: "600",
    fontSize: res * 0.015,
  },
});

export default styles;
