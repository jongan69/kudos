import React from "react";
import { SafeAreaView, TextInput, Image, View, Text } from "react-native";
import { styles } from "../constants/style";
import Button from "./Button";
const HomeScreenPostArea = () => {
  const [text, onChangeText] = React.useState("");

  return (
    <SafeAreaView>
      <View>
        <View>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            multiline
            placeholder="Post an offer or request
          a favor."
          />
          <View style={styles.button3}>
            <Text style={styles.buttonText2}>Post</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreenPostArea;
