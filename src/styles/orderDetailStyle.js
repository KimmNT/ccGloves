import { StyleSheet, Dimensions } from "react-native";
const res = Dimensions.get("window").height;

const primary = "#141E46";
const btnColor = "#F0EEED";
const bgColor = "#EDEDED";
const softRed = "#F45050";
const softYellow = "#FFC861";
const darkGreen = "#1B5E20";
const dark = "#000";
const light = "#FFF";

const styles = StyleSheet.create({
  od__container: {
    width: "100%",
    height: "100%",
  },
  od__headline: {
    gap: res * 0.03,
  },
  od__headline_item: {
    flexDirection: "row",
    alignItems: "center",
    gap: res * 0.02,
  },
  od__title: {
    fontSize: res * 0.015,
    fontWeight: "600",
  },
  od__value: {
    fontSize: res * 0.03,
    fontWeight: "600",
  },
  od__background: {
    paddingHorizontal: res * 0.02,
    paddingVertical: res * 0.01,
    borderRadius: res * 0.01,
    flexDirection: "row",
    alignItems: "center",
    gap: res * 0.01,
  },
  pending: {
    backgroundColor: softYellow,
  },
  working: {
    backgroundColor: primary,
  },
  completed: {
    backgroundColor: darkGreen,
  },
  cancel: {
    backgroundColor: softRed,
  },
  od__status_value: {
    fontSize: res * 0.015,
    fontWeight: "600",
  },
  value__pending: {
    color: dark,
  },
  value__working: {
    color: light,
  },
  value__completed: {
    color: light,
  },
  value__cancel: {
    color: light,
  },
  cancel__btn_container: {
    backgroundColor: softRed,
    paddingHorizontal: res * 0.02,
    paddingVertical: res * 0.01,
    borderRadius: res * 0.01,
  },
  cancel__btn_value: {
    fontWeight: "600",
    color: light,
  },
  od__rating: {
    backgroundColor: softYellow,
    paddingHorizontal: res * 0.02,
    paddingVertical: res * 0.01,
    borderRadius: res * 0.02,
    justifyContent: "center",
    alignItems: "center",
  },
  od__rating_text: {
    fontSize: res * 0.02,
    fontWeight: "600",
    textAlign: "center",
  },
  expand: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: res * 0.02,
  },
  od__content: {
    width: "100%",
    backgroundColor: primary,
    paddingVertical: res * 0.03,
    paddingHorizontal: res * 0.02,
    borderRadius: res * 0.03,
    marginTop: res * 0.03,
    gap: res * 0.02,
  },
  content__item: {
    backgroundColor: light,
    paddingVertical: res * 0.01,
    paddingHorizontal: res * 0.02,
    borderRadius: res * 0.02,
    gap: res * 0.02,
  },
  item__value: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    color: dark,
    fontSize: res * 0.02,
  },
  value: {
    fontSize: res * 0.02,
    color: dark,
    fontWeight: "600",
  },
  od__more_container: {
    alignItems: "flex-end",
  },
  od__more_value: {
    color: light,
    fontWeight: "600",
    fontSize: res * 0.015,
  },
  cancel__container: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    alignItems: "center",
  },
  cancel__content: {
    width: "100%",
    backgroundColor: light,
    paddingVertical: res * 0.02,
    paddingHorizontal: res * 0.02,
    borderRadius: res * 0.02,
    gap: res * 0.04,
  },
  cancel__title: {
    fontSize: res * 0.02,
    fontWeight: "600",
  },
  cancel__suggestion: {
    flexWrap: "wrap",
    flexDirection: "row",
    gap: res * 0.02,
  },
  suggestion__btn: {
    borderRadius: res * 0.01,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: primary,
    paddingVertical: res * 0.01,
    paddingHorizontal: res * 0.02,
  },
  suggestion__btn_active: {
    borderRadius: res * 0.01,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: primary,
    paddingVertical: res * 0.01,
    paddingHorizontal: res * 0.02,
    backgroundColor: primary,
  },
  suggestion__btn_value: {
    fontWeight: "600",
    color: dark,
  },
  suggestion__btn_value_active: {
    fontWeight: "600",
    color: light,
  },
  cancel__btn: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: res * 0.02,
    borderRadius: res * 0.02,
    backgroundColor: softRed,
  },
  cancel__btn_text: {
    fontWeight: "600",
    fontSize: res * 0.02,
    textTransform: "uppercase",
    color: light,
  },
});
export default styles;
