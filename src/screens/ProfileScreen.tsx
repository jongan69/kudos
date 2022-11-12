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
          <Text style={styles.h2}>
            Wallet Address: {currentWalletAddress.slice(0, 5)}...
            {currentWalletAddress.slice(-4)}
          </Text>
          <Text style={styles.h2}>Email: {email}</Text>
          <Text style={styles.h2}>Joined 11/11/2022</Text>
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
            <Text style={styles.text}>Service: Hair Cut </Text>
            <Text style={styles.h2}>
              Wallet Address {currentWalletAddress.slice(0, 5)}...
              {currentWalletAddress.slice(-4)}
            </Text>
            <Text style={styles.h2}>Aaron</Text>
            <Text style={styles.smallerTextBox}>
              By far the worst haircut I have ever received. I literally have a
              spot on the back side of my head the size of a baseball.
            </Text>
          </View>
          <View style={styles.container2}>
            <Text style={styles.text}>Service: Chef </Text>

            <Text style={styles.h2}>
              Wallet Address {currentWalletAddress.slice(0, 5)}...
              {currentWalletAddress.slice(-4)}
            </Text>
            <Text style={styles.h2}>Lisa</Text>

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
    color: "white",
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
  },

  textBox: {
    width: 300,
    fontSize: 18,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: 5,
  },
  button: {
    marginBottom: 4,
    width: 190,
    backgroundColor: "#d75555",
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
  },
  profileImage: { width: 150, height: 150, borderBottomRightRadius: 23 },
  buttonText: {
    textAlign: "center",
    padding: 10,
    color: "white",
    fontSize: 14,
  },
});
export default ProfileScreen;
