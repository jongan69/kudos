import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "../constants/style";

const Request = (props) => {
  return (
    <View>
      <View style={styles.largeContainer}>
        <View style={styles.container2}>
          <View style={styles.sideBySideFlexStart}>
            <Image
              source={{
                uri: props.uri,
              }}
              style={styles.profileImage2}
            />
            <View>
              <View style={styles.sideBySideFlexStart}>
                <Text style={styles.text2}>Service: </Text>
                <Text style={styles.text}> {props.service}</Text>
              </View>
              <View style={styles.sideBySideFlexStart}>
                <Text style={styles.text2}>Wallet Address: </Text>
                <Text style={styles.text}>{props.walletAddress}</Text>
              </View>
              <View style={styles.sideBySideFlexStart}>
                <Text style={styles.text2}>Name: </Text>
                <Text style={styles.text}> {props.name}</Text>
              </View>
            </View>
          </View>

          <Text style={styles.smallerTextBox}>{props.message}</Text>
          <View style={styles.sideBySideCenter}>
            <View style={styles.button2}>
              <Text style={styles.buttonText}>Volunteer</Text>
            </View>
            <View style={styles.button2}>
              <Text style={styles.buttonText}>Comment</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Request;
