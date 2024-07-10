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
  modal__container: {
    width: "100%",
    height: "40%",
    position: "absolute",
    bottom: 0,
    backgroundColor: primary,
    borderTopLeftRadius: res * 0.05,
    borderTopRightRadius: res * 0.05,
  },
  modal__content: {
    justifyContent: "center",
    alignItems: "center",
    padding: res * 0.02,
  },
  modalText: {
    fontSize: res * 0.025,
    fontWeight: "600",
    color: light,
  },
  numer__list: {
    display: "flex",
    flexDirection: "row",
    marginTop: res * 0.05,
    flexWrap: "wrap",
    alignItems: "center",
    gap: res * 0.01,
  },
  numberButton: {
    width: "18%",
    alignItems: "center",
    justifyContent: "center",
    padding: res * 0.01,
  },
  selected: {
    width: "18%",
    alignItems: "center",
    justifyContent: "center",
    padding: res * 0.01,
    backgroundColor: softRed,
  },
  numberText: {
    fontSize: res * 0.02,
    color: light,
  },
  btn__item: {
    position: "absolute",
    bottom: res * 0.03,
    right: res * 0.03,
    backgroundColor: light,
    width: res * 0.05,
    height: res * 0.05,
    borderRadius: (res * 0.05) / 2,
    justifyContent: "center",
    alignItems: "center",
  },
  btn__item_icon: {
    fontSize: res * 0.03,
    fontWeight: "600",
  },
});
export default styles;
