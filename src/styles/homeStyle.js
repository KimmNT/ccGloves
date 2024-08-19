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
    width: "100%",
    height: "100%",
    gap: res * 0.05,
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
  group__review_list: {
    width: "100%",
  },
  list__item: {
    flex: 1,
    backgroundColor: primary,
    paddingVertical: res * 0.015,
    paddingHorizontal: res * 0.02,
    borderRadius: res * 0.02,
    gap: res * 0.02,
    marginRight: res * 0.01,
  },
  item__headline: {
    flexDirection: "row",
    gap: res * 0.02,
  },
  item__name: {
    color: light,
    fontSize: res * 0.03,
    fontWeight: "600",
  },
  item__rate: {
    flexDirection: "row",
    alignItems: "center",
    gap: res * 0.01,
  },
  item__rate_number: {
    color: "#ADADAD",
    fontSize: res * 0.02,
    fontWeight: "600",
  },
  item__rate_icon: {
    color: softYellow,
    fontSize: res * 0.03,
  },
  item__service: {
    flexDirection: "row",
    alignItems: "center",
    gap: res * 0.01,
  },
  item__service_title: {
    color: light,
    fontSize: res * 0.02,
    fontWeight: "600",
  },
  item__service_value: {
    color: light,
    fontSize: res * 0.02,
    fontWeight: "600",
  },
  item__feedback: {
    backgroundColor: light,
    paddingVertical: res * 0.005,
    paddingHorizontal: res * 0.01,
    borderRadius: res * 0.01,
  },
  item__feedback_value: {
    fontSize: res * 0.02,
    fontStyle: "italic",
  },
});

export default styles;
