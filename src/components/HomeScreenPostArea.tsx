import React from "react";
import { SafeAreaView, TextInput, Image, View, Text } from "react-native";
import { styles } from "../constants/style";
import { useTheme } from "@react-navigation/native";
const HomeScreenPostArea = () => {
  const [text, onChangeText] = React.useState("");
  const { colors } = useTheme();

  return (
    <SafeAreaView>
      <View>
        <View style={{ flexDirection: "column" }}>
          <TextInput
            style={[
              styles.input,
              { borderColor: colors.text, color: colors.text },
            ]}
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
