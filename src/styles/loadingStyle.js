import { StyleSheet, Dimensions } from "react-native";

const res = Dimensions.get("window").height;

const styles = StyleSheet.create({
  loading__header: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "70%",
    gap: res * 0.1,
  },
  loading__headerText: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  loading__textUpper: {
    fontSize: res * 0.04,
    color: "black",
    fontWeight: "700",
    justifyContent: "center",
    alignItems: "center",
  },
  loading__textLower: {
    fontSize: res * 0.04,
    color: "black",
    fontWeight: "700",
    justifyContent: "space-around",
    alignItems: "center",
  },
  loading__buttonParent: {
    width: res * 0.25,
    height: res * 0.095,
    borderRadius: res * 0.05,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#BA5EBB",
  },
  loading__buttonChild: {
    width: res * 0.23,
    height: res * 0.08,
    borderRadius: res * 0.05,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#BA5EBB",
    borderStyle: "solid",
    borderColor: "papayawhip",
    borderWidth: 3,
  },
  loading__textButton: {
    fontSize: res * 0.04,
    color: "papayawhip",
    fontWeight: "700",
    justifyContent: "center",
    alignItems: "center",
  },
  loading__containerImage: {
    position: "absolute",
    justifyContent: "flex-end",
    alignItems: "center",
    bottom: 0,
    width: "100%",
  },
  loading__imageElip: {
    width: "100%",
  },
});

export default styles;
