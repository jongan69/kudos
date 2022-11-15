import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  text: {
    fontSize: 18,
  },
  text2: {
    fontSize: 18,
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 1,
  },
  h1: {
    fontSize: 25,
    color: "#d75555",
    textShadowRadius: 10,
  },
  h2: {
    fontSize: 20,
    color: "#d75555",
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
  sideBySideFlexStart2: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: 350,
  },
  reviewContainer: {
    borderRadius: 8,
  },
  smallerTextBox: {
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
    padding: 5,
    borderRadius: 8,
  },
  button: {
    marginBottom: 4,
    width: 190,
    backgroundColor: "#d75555",
    borderRadius: 8,
  },
  container2: {
    padding: 10,
    margin: 2,
    borderRadius: 8,
  },
  largeContainer: {
    paddingBottom: 40,
  },
  profileImage: { width: 150, height: 150, borderRadius: 8 },
  profileImage2: {
    margin: 4,
    width: 90,
    height: 90,
    borderRadius: 8,
    alignSelf: "flex-end",
  },
  profileImage3: {
    width: 120,
    height: 120,
    borderRadius: 8,
  },
  profileImage4: {
    width: 50,
    height: 50,
    borderRadius: 100,
    alignSelf: "flex-end",
  },
  input: {
    margin: 4,
    height: 90,
    padding: 5,
    maxWidth: 220,
    borderRadius: 8,
    borderWidth: 1,
  },
  homeScreenPostArea: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 330,
  },
  button2: {
    margin: 4,
    width: 120,
    height: 40,
    backgroundColor: "#d75555",
    borderRadius: 8,
  },
  button3: {
    marginLeft: 95,
    width: 120,
    height: 30,
    backgroundColor: "#d75555",
    borderRadius: 8,
  },
  buttonText2: {
    textAlign: "center",
    padding: 5,
    color: "white",
    fontSize: 13,
  },
  buttonText: {
    textAlign: "center",
    padding: 10,
    color: "white",
    fontSize: 14,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button4: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
