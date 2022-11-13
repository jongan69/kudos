import { useTheme } from "@react-navigation/native";
import React, { useState } from "react";
import { AppContext } from "../context/AppProvider";
import {
  ScrollView,
  Platform,
  StyleSheet,
  Text,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const ProfileScreen = () => {
  const [showPrivateKey, setShowPrivateKey] = useState(false);
  const { email, currentWalletAddress, key, userInfo } =
    React.useContext(AppContext);
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
        <Image
          source={{
            uri: "https://media.istockphoto.com/id/1335941248/photo/shot-of-a-handsome-young-man-standing-against-a-grey-background.jpg?b=1&s=170667a&w=0&k=20&c=Dl9uxPY_Xn159JiazEj0bknMkLxFdY7f4tK1GtOGmis=",
          }}
          style={styles.profileImage}
        />
        <Text style={styles.h1}> James Smith</Text>
        <Image
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/3.5_stars.svg/803px-3.5_stars.svg.png?20060930161643",
          }}
          style={{ width: 250, height: 50 }}
        />
        <View style={{ width: 300 }}>
          <View style={styles.sideBySideFlexStart}>
            <Text style={styles.h2}>Wallet Address:</Text>
            <Text style={styles.text}>
              {currentWalletAddress.slice(0, 5)}...
              {currentWalletAddress.slice(-4)}
            </Text>
          </View>
          <View style={styles.sideBySideFlexStart}>
            <Text style={styles.h2}>Email:</Text>
            <Text style={styles.text}>{email}</Text>
          </View>
          <View style={styles.sideBySideFlexStart}>
            <Text style={styles.h2}>Joined:</Text>
            <Text style={styles.text}>11/11/2022</Text>
          </View>
          <View style={styles.sideBySideFlexStart}>
            <Text style={styles.h2}>Location:</Text>
            <Text style={styles.text}>Maine</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => setShowPrivateKey(!showPrivateKey)}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>
              {showPrivateKey ? "Hide Private Key" : "View Private Key"}
            </Text>
          </View>
        </TouchableOpacity>
        {showPrivateKey ? <Text style={styles.textBox}>{key}</Text> : <></>}
        <View>
          <Text style={styles.h2}>Bio:</Text>
        </View>

        <Text style={styles.textBox}>
          Watched a lot of Bob Ross so I'm pretty good at painting. Other
          skills: gardening, changing tyres, treating snake bites, predicting
          weather, throwing spirals etc. Whatever your needs are, drop me a
          line, maybe I can help.{" "}
        </Text>
        <View>
          <Text style={styles.h2}>Reviews:</Text>
        </View>
        <View>
          <View style={styles.container2}>
            <View style={styles.sideBySideFlexStart}>
              <Text style={styles.text2}>Service: </Text>
              <Text style={styles.text}>Hair Cut</Text>
            </View>
            <View style={styles.sideBySideFlexStart}>
              <Text style={styles.text2}>Wallet Address: </Text>
              <Text style={styles.text}>
                {currentWalletAddress.slice(0, 5)}...
                {currentWalletAddress.slice(-4)}
              </Text>
            </View>
            <View style={styles.sideBySideFlexStart}>
              <Text style={styles.text2}>Reviewer: </Text>
              <Text style={styles.text}>Aaron</Text>
            </View>
            <Text style={styles.smallerTextBox}>
              By far the worst haircut I have ever received. I literally have a
              spot on the back of my head the size of a baseball.
            </Text>
          </View>
          <View style={styles.container2}>
            <View style={styles.sideBySideFlexStart}>
              <Text style={styles.text2}>Service: </Text>
              <Text style={styles.text}>Hair Cut</Text>
            </View>
            <View style={styles.sideBySideFlexStart}>
              <Text style={styles.text2}>Wallet Address: </Text>
              <Text style={styles.text}>
                {currentWalletAddress.slice(0, 5)}...
                {currentWalletAddress.slice(-4)}
              </Text>
            </View>
            <View style={styles.sideBySideFlexStart}>
              <Text style={styles.text2}>Reviewer: </Text>
              <Text style={styles.text}>Lisa</Text>
            </View>
            <Text style={styles.smallerTextBox}>
              James was very professional and the food was delicious. Everything
              was very thoughtful and presented beautifully.
            </Text>
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
  profileImage: { width: 150, height: 150, borderRadius: 8 },
  buttonText: {
    textAlign: "center",
    padding: 10,
    color: "white",
    fontSize: 14,
  },
});

export default ProfileScreen;
