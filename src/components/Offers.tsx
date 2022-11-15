import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "../constants/style";
import { useTheme } from "@react-navigation/native";

const Offer = (props) => {
  const { colors } = useTheme();

  return (
    <View
      style={[
        { borderColor: colors.border, color: colors.text },
        styles.container2,
      ]}
    >
      <View style={styles.sideBySideFlexStart}>
        <Image
          source={{
            uri: props.uri,
          }}
          style={styles.profileImage2}
        />
        <View>
          <View style={styles.sideBySideFlexStart}>
            <Text style={[{ color: colors.text }, styles.text]}>Service: </Text>
            <Text style={[{ color: colors.text }, styles.text]}>
              {" "}
              {props.service}
            </Text>
          </View>
          <View style={styles.sideBySideFlexStart}>
            <Text style={[{ color: colors.text }, styles.text]}>
              Wallet Address:{" "}
            </Text>
            <Text style={[{ color: colors.text }, styles.text]}>
              {props.walletAddress}
            </Text>
          </View>
          <View style={styles.sideBySideFlexStart}>
            <Text style={[{ color: colors.text }, styles.text]}>Name:</Text>
            <Text style={[{ color: colors.text }, styles.text]}>
              {" "}
              {props.name}
            </Text>
          </View>
        </View>
      </View>

      <Text style={[{ color: colors.text }, styles.text]}>{props.message}</Text>
      <View style={styles.sideBySideCenter}>
        <View style={styles.button2}>
          <Text style={styles.buttonText}>Accept</Text>
        </View>
        <View style={styles.button2}>
          <Text style={styles.buttonText}>Comment</Text>
        </View>
      </View>
    </View>
  );
};

export default Offer;
