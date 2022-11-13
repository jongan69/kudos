import { useTheme } from "@react-navigation/native";
import React, { useState } from "react";
import {
  ScrollView,
  Platform,
  StyleSheet,
  Text,
  Image,
  Button,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  View,
} from "react-native";
const TodoScreen = ({ navigation }) => {
  const { colors } = useTheme();
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          padding: 50,
        }}
      >
        <Text style={styles.h1}>James's Todo List</Text>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <View>
            <Image
              source={{
                uri: "https://media.istockphoto.com/id/1335941248/photo/shot-of-a-handsome-young-man-standing-against-a-grey-background.jpg?b=1&s=170667a&w=0&k=20&c=Dl9uxPY_Xn159JiazEj0bknMkLxFdY7f4tK1GtOGmis=",
              }}
              style={styles.profileImage}
            />
          </View>
        </TouchableOpacity>
        <View style={styles.container2}>
          <View style={styles.sideBySideFlexStart}>
            <Text style={styles.text2}>Service: </Text>
            <Text style={styles.text}> Drive</Text>
          </View>
          <View style={styles.sideBySideFlexStart}>
            <Text style={styles.text2}>Wallet Address: </Text>
            <Text style={styles.text}>0xmrv...z083</Text>
          </View>
          <View style={styles.sideBySideFlexStart}>
            <Text style={styles.text2}>Requester: </Text>
            <Text style={styles.text}> Chad</Text>
          </View>
          <Text style={styles.smallerTextBox}>
            Drive U-haul to 6129 Marsden St, Philadelphia, PA 19135.
          </Text>
          <View style={styles.sideBySideCenter}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Mark Completed</Text>
            </View>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Withdraw {"\n"} Offer</Text>
            </View>
          </View>
        </View>
        <View style={styles.container2}>
          <View style={styles.sideBySideFlexStart}>
            <Text style={styles.text2}>Service: </Text>
            <Text style={styles.text}> Chaperone</Text>
          </View>

          <View style={styles.sideBySideFlexStart}>
            <Text style={styles.text2}>Wallet Address: </Text>
            <Text style={styles.text}>0xmrv...z083</Text>
          </View>
          <View style={styles.sideBySideFlexStart}>
            <Text style={styles.text2}>Requester: </Text>
            <Text style={styles.text}> Marshwood High School</Text>
          </View>
          <Text style={styles.smallerTextBox}>
            Help chaperone 7th Grade field trip to the Acadian Village.
          </Text>
          <View style={styles.sideBySideCenter}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Mark Completed</Text>
            </View>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Withdraw {"\n"} Offer</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
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
    margin: 4,
    width: 120,
    height: 60,
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
  profileImage: { width: 150, height: 150, borderRadius: 8 },
  buttonText: {
    textAlign: "center",
    padding: 10,
    color: "white",
    fontSize: 14,
  },
});

export default TodoScreen;
