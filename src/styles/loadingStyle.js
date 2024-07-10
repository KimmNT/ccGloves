import { StyleSheet, Dimensions } from "react-native";

const res = Dimensions.get("window").width;

const styles = StyleSheet.create({
  loading__container: {
    position: "absolute",
    justifyContent: "flex-end",
    alignItems: "center",
    bottom: 0,
  },
  loading__imageElip: {
    width: res * 1,
    height: res * 0.7,
    resizeMode: "stretch",
  },
  loading__child: {
    position: "absolute",
    width: 200,
    height: 70,
    borderRadius: 35,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#BA5EBB",
    borderStyle: "solid",
    borderColor: "papayawhip",
    borderWidth: 3,
  },
  loading__parent: {
    position: "absolute",
    width: 210,
    height: 80,
    borderRadius: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#BA5EBB",
  },
  loading__text: {
    fontSize: 30,
    color: "papayawhip",
    fontWeight: "700",
    justifyContent: "center",
    alignItems: "center",
  },
  loading__textUpper: {
    position: "absolute",
    fontSize: 40,
    color: "black",
    fontWeight: "700",
    justifyContent: "center",
    alignItems: "center",
    top: 170,
  },
  loading__textLower: {
    position: "absolute",
    fontSize: 40,
    color: "black",
    fontWeight: "700",
    justifyContent: "space-around",
    alignItems: "center",
    top: 220,
  },
});

export default styles;
