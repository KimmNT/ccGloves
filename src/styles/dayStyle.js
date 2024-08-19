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
  day__count: {
    marginVertical: res * 0.02,
    fontSize: res * 0.02,
    color: dark,
    fontWeight: "600",
  },
  day__list: {
    width: "100%",
    flexDirection: "row",
    gap: res * 0.02,
  },
  list__item: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
  },
  item__info: {
    backgroundColor: primary,
    paddingVertical: res * 0.015,
    paddingHorizontal: res * 0.01,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    gap: res * 0.02,
    borderRadius: res * 0.02,
  },
  item__date: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  item__date_value: {
    fontSize: res * 0.02,
    color: light,
    fontWeight: "600",
  },
  item__line: {
    height: res * 0.002,
    width: res * 0.07,
    backgroundColor: light,
  },
  item__detail_group: {
    flexDirection: "column",
    gap: res * 0.01,
    backgroundColor: light,
    paddingVertical: res * 0.01,
    paddingHorizontal: res * 0.01,
    borderRadius: res * 0.015,
  },
  item__detail: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: res * 0.01,
  },
  item__title: {
    color: dark,
    fontWeight: "600",
  },
  item__value: {
    color: dark,
    fontSize: res * 0.015,
    fontWeight: "600",
  },
  item__remove_container: {
    width: res * 0.05,
    height: res * 0.05,
    backgroundColor: "#FFE1E1",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: (res * 0.05) / 2,
  },
  item__remove_btn: {
    width: res * 0.03,
    height: res * 0.03,
    borderRadius: (res * 0.03) / 2,
    backgroundColor: softRed,
    justifyContent: "center",
    alignItems: "center",
  },
  item__remove_icon: {
    fontSize: res * 0.02,
    color: light,
  },
});

export default styles;
