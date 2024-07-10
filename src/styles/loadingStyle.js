import { StyleSheet, Dimensions } from "react-native";

const res = Dimensions.get("window").width;

const styles = StyleSheet.create({
  loading__header: {
    position: "absolute",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",

    top: res * 0.4,
    gap: res * 0.3,
  },
  loading__headerText: {
    // position: "absolute",
    width: "100%",
    height: res * 0.25,
    justifyContent: "space-between",
    alignItems: "center",
  },
  loading__textUpper: {
    // position: "absolute",
    fontSize: 40,
    color: "black",
    fontWeight: "700",
    justifyContent: "center",
    alignItems: "center",
  },
  loading__textLower: {
    // position: "absolute",
    fontSize: 40,
    color: "black",
    fontWeight: "700",
    justifyContent: "space-around",
    alignItems: "center",
  },
  loading__buttonParent: {
    width: 210,
    height: 80,
    borderRadius: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#BA5EBB",
  },
  loading__buttonChild: {
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
  loading__textButton: {
    fontSize: 30,
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
  },
  loading__imageElip: {
    width: res * 1,
    height: res * 0.7,
    resizeMode: "stretch",
  },
});

export default styles;
