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
  summary__container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  order__id: {
    marginTop: res * 0.02,
    fontSize: res * 0.02,
    fontWeight: "600",
  },
  payment__price: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: res * 0.02,
    backgroundColor: btnColor,
    borderRadius: res * 0.03,
    paddingVertical: res * 0.02,
    marginTop: res * 0.03,
  },
  payment__price_item: {
    width: "85%",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  sub__payment_value: {
    fontSize: res * 0.02,
  },
  sub__payment_coupon: {
    flexDirection: "row",
    alignItems: "center",
    gap: res * 0.01,
  },
  sub__payment_coupon_remove: {
    backgroundColor: softRed,
    paddingHorizontal: res * 0.01,
    paddingVertical: res * 0.005,
    borderRadius: res * 0.005,
  },
  sub__payment_coupon_remove_icon: {
    fontSize: res * 0.02,
    color: light,
  },
  payment__value: {
    fontSize: res * 0.025,
    fontWeight: "600",
  },
  coupon__container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: res * 0.02,
  },
  coupon__content: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  coupon__input: {
    backgroundColor: bgColor,
    paddingHorizontal: res * 0.015,
    paddingVertical: res * 0.01,
    borderRadius: res * 0.01,
    fontSize: res * 0.02,
    fontWeight: "600",
    width: "80%",
  },
  coupon__btn: {
    backgroundColor: softRed,
    paddingHorizontal: res * 0.015,
    paddingVertical: res * 0.01,
    borderRadius: res * 0.01,
  },
  coupon__btn_text: {
    fontSize: res * 0.015,
    fontWeight: "600",
    color: light,
  },
  coupon__error: {
    width: "100%",
    color: softRed,
    fontSize: res * 0.015,
    fontWeight: "600",
    marginTop: res * 0.01,
  },
  summary__item: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column",
    marginTop: res * 0.02,
    gap: res * 0.03,
  },
  summary__btn: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: primary,
    paddingVertical: res * 0.02,
    paddingHorizontal: res * 0.03,
    borderRadius: res * 0.025,
  },
  btn__icon: {
    fontSize: res * 0.05,
    color: light,
  },
  btn__text: {
    fontSize: res * 0.025,
    textAlign: "center",
    color: light,
    fontWeight: "600",
  },
  payment__confirm_container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: res * 0.05,
  },
  payment__confirm_content: {
    backgroundColor: softYellow,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: res * 0.03,
    paddingHorizontal: res * 0.015,
    borderRadius: res * 0.04,
  },
  value__text: {
    fontSize: res * 0.02,
    textTransform: "uppercase",
    fontWeight: "900",
  },
});
export default styles;
