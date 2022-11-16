import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import { styles } from "../constants/style";
import { useTheme } from "@react-navigation/native";
import Comment from "./Comment";

const Offer = (props) => {
  const { colors } = useTheme();
  const [commentOn, setCommentOn] = useState(false);
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
          <Text
            onPress={() => setCommentOn(!commentOn)}
            style={[
              { alignSelf: "center", color: colors.text },
              styles.buttonText,
            ]}
          >
            Comment
          </Text>
        </View>
      </View>
      {commentOn ? (
        <View>
          <Comment />
          <View style={[styles.sideBySideCenter]}>
            <View style={styles.button2}>
              <Text
                onPress={() => setCommentOn(!commentOn)}
                style={styles.buttonText}
              >
                Post
              </Text>
            </View>
            <View style={styles.button2}>
              <Text
                onPress={() => setCommentOn(!commentOn)}
                style={styles.buttonText}
              >
                Cancel
              </Text>
            </View>
          </View>
        </View>
      ) : (
        <></>
      )}
    </View>
  );
};

export default Offer;
