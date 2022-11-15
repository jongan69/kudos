import { useTheme } from "@react-navigation/native";
import React, { useState } from "react";
import { AppContext } from "../context/AppProvider";
import { ScrollView, Text, Image, TouchableOpacity, View } from "react-native";
import { styles } from "../constants/style";

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
            <Text style={[styles.h2, { color: colors.text }]}>
              Wallet Address:{" "}
            </Text>
            <Text style={[styles.h2, { color: colors.text }]}>
              {currentWalletAddress.slice(0, 5)}...
              {currentWalletAddress.slice(-4)}
            </Text>
          </View>
          <View style={styles.sideBySideFlexStart}>
            <Text style={[styles.h2, { color: colors.text }]}>Email: </Text>
            <Text style={[styles.h2, { color: colors.text }]}>{email}</Text>
          </View>
          <View style={styles.sideBySideFlexStart}>
            <Text style={[styles.h2, { color: colors.text }]}>Joined: </Text>
            <Text style={[styles.h2, { color: colors.text }]}>11/11/2022</Text>
          </View>
          <View style={styles.sideBySideFlexStart}>
            <Text style={[styles.h2, { color: colors.text }]}>Location: </Text>
            <Text style={[styles.h2, { color: colors.text }]}>Maine</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => setShowPrivateKey(!showPrivateKey)}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>
              {showPrivateKey ? "Hide Private Key" : "View Private Key"}
            </Text>
          </View>
        </TouchableOpacity>
        {showPrivateKey ? (
          <Text style={[{ color: colors.text }, styles.textBox]}>{key}</Text>
        ) : (
          <></>
        )}
        <View>
          <Text style={styles.h2}>Bio:</Text>
        </View>

        <Text style={[{ color: colors.text }, styles.textBox]}>
          Watched a lot of Bob Ross so I'm pretty good at painting. Other
          skills: gardening, changing tyres, treating snake bites, predicting
          weather, throwing spirals etc. Whatever your needs are, drop me a
          line, maybe I can help.{" "}
        </Text>
        <View>
          <Text style={styles.h2}>Reviews:</Text>
        </View>
        <View>
          <View style={[{ borderColor: colors.background }, styles.container2]}>
            <View style={styles.sideBySideFlexStart}>
              <Text style={[{ color: colors.text }, styles.text]}>
                Service:{" "}
              </Text>
              <Text style={[{ color: colors.text }, styles.text]}>
                Hair Cut{" "}
              </Text>
            </View>
            <View style={styles.sideBySideFlexStart}>
              <Text style={[{ color: colors.text }, styles.text]}>
                Wallet Address:{" "}
              </Text>
              <Text style={[{ color: colors.text }, styles.text]}>
                {currentWalletAddress.slice(0, 5)}...
                {currentWalletAddress.slice(-4)}
              </Text>
            </View>
            <View style={styles.sideBySideFlexStart}>
              <Text style={[{ color: colors.text }, styles.text]}>
                Reviewer:{" "}
              </Text>
              <Text style={[{ color: colors.text }, styles.text]}>Aaron</Text>
            </View>
            <Text style={styles.smallerTextBox}>
              By far the worst haircut I have ever received. I literally have a
              spot on the back of my head the size of a baseball.
            </Text>
          </View>
          <View style={[{ borderColor: colors.background }, styles.container2]}>
            <View style={styles.sideBySideFlexStart}>
              <Text style={[{ color: colors.text }, styles.text]}>
                Service:
              </Text>
              <Text style={[{ color: colors.text }, styles.text]}>
                Hair Cut
              </Text>
            </View>
            <View style={styles.sideBySideFlexStart}>
              <Text style={[{ color: colors.text }, styles.text]}>
                Wallet Address:
              </Text>
              <Text style={[{ color: colors.text }, styles.text]}>
                {currentWalletAddress.slice(0, 5)}...
                {currentWalletAddress.slice(-4)}
              </Text>
            </View>
            <View style={styles.sideBySideFlexStart}>
              <Text style={[{ color: colors.text }, styles.text]}>
                Reviewer:
              </Text>
              <Text style={[{ color: colors.text }, styles.text]}>Lisa</Text>
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
export default ProfileScreen;
