import { useTheme } from "@react-navigation/native";
import React, { useState } from "react";
import { AppContext } from "../context/AppProvider";
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
const TodoScreen = () => {
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
        <Image
          source={{
            uri: "https://media.istockphoto.com/id/1335941248/photo/shot-of-a-handsome-young-man-standing-against-a-grey-background.jpg?b=1&s=170667a&w=0&k=20&c=Dl9uxPY_Xn159JiazEj0bknMkLxFdY7f4tK1GtOGmis=",
          }}
          style={styles.profileImage}
        />
        <View style={styles.container2}>
          <Text style={styles.text}>Service: Drive </Text>
          <Text style={styles.text}>Time: 8Hr 44min </Text>
          <Text style={styles.h2}>Wallet Address0x4et...9q8s</Text>
          <Text style={styles.h2}>Requester: Chad</Text>
          <Text style={styles.smallerTextBox}>
            <Text style={styles.details}>Date: 13/01/2023 </Text>
            {"\n"}
            Drive U-haul to 6129 Marsden St, Philadelphia, PA 19135.
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View style={styles.button}>
              <Text style={styles.buttonText}>Mark Completed</Text>
            </View>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Withdraw Offer</Text>
            </View>
          </View>
        </View>
        <View style={styles.container2}>
          <Text style={styles.text}>Service: Chaperone </Text>
          <Text style={styles.text}>Time: 8Hr 44min </Text>
          <Text style={styles.h2}>Wallet Address0x4et...9q8s</Text>
          <Text style={styles.h2}>Requester: Marshwood Middle School</Text>
          <Text style={styles.smallerTextBox}>
            <Text style={styles.details}>Date: 17/01/2023 </Text>
            {"\n"}
            Help chaperone 7th Grade field trip to the Acadian Village.
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View style={styles.button}>
              <Text style={styles.buttonText}>Mark Completed</Text>
            </View>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Withdraw offer</Text>
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
    color: "white",
  },
  details: {
    color: "rgba(28, 56, 155, 1)",
  },
  scrollViewCont: {},
  h1: {
    fontSize: 22,
    color: "white",
  },
  h2: {
    fontSize: 20,
    color: "white",
  },
  reviewContainer: {
    borderWidth: 5,
  },
  smallerTextBox: {
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
  },
  button: {
    margin: 4,
    width: 120,
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
    backgroundColor: "gray",
    padding: 10,
    margin: 3,
    borderRadius: 8,
  },
  profileImage: { width: 150, height: 150 },
  buttonText: {
    textAlign: "center",
    padding: 10,
    height: 40,
    color: "white",
    fontSize: 13,
  },
});

export default TodoScreen;
