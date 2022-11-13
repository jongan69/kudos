import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: "black",
  },
  text2: {
    fontSize: 18,
    color: "white",
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 1,
  },
  h1: {
    fontSize: 25,
    color: "black",
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: -1, height: 0 },
    textShadowRadius: 10,
  },
  h2: {
    fontSize: 20,
    color: "black",
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: -1, height: 0 },
    textShadowRadius: 10,
  },
  sideBySideCenter: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  sideBySideFlexStart: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  reviewContainer: {
    borderWidth: 5,
    borderRadius: 8,
  },
  smallerTextBox: {
    borderWidth: 1,
    borderColor: "black",
    width: 300,
    fontSize: 18,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: 5,
    borderRadius: 8,
  },

  textBox: {
    width: 300,
    fontSize: 18,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: 5,
    borderRadius: 8,
  },
  button: {
    marginBottom: 4,
    width: 190,
    backgroundColor: "#d75555",
    borderRadius: 8,
  },
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
    paddingTop: 10,
    margin: 1,
  },
  container2: {
    backgroundColor: "rgba(156, 156, 156, 0.7)",
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    margin: 3,
    borderRadius: 8,
  },
  largeContainer: {
    paddingBottom: 40,
  },
  profileImage: { width: 150, height: 150, borderRadius: 8 },
  profileImage2: { margin: 4, width: 90, height: 90, borderRadius: 8 },

  button2: {
    margin: 4,
    width: 120,
    height: 40,
    backgroundColor: "#d75555",
    borderRadius: 8,
  },
  buttonText: {
    textAlign: "center",
    padding: 10,
    color: "white",
    fontSize: 14,
  },
});