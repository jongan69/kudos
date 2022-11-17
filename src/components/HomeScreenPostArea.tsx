import React, { useState } from "react";
import { SafeAreaView, TextInput, Image, View, Text, Pressable } from "react-native";
import { styles } from "../constants/style";
import { useTheme } from "@react-navigation/native";
import { AppContext } from "../context/AppProvider";
import RPC from '../../ethersRPC'; // for using ethers.js

const HomeScreenPostArea = () => {
  const [text, onChangeText] = React.useState("");
  const { colors } = useTheme();
  const { key, setKey } = React.useContext(AppContext);
  const [data, setData] = useState();

  //Function to get all Incomplete Favors
  const postFavor = async (FavorText: string) => {
    const post = await RPC.postFavor(FavorText, key);
    setData(post);
  };

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
          <Pressable style={styles.button3} onPress={() => postFavor(text)}>
            <Text style={styles.buttonText2}>Post</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreenPostArea;
