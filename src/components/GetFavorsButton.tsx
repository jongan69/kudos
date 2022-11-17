import React, { useState } from "react";
import { Text, Pressable, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import RPC from '../../ethersRPC'; // for using ethers.js
import { AppContext } from "../context/AppProvider";
import { styles } from "../constants/style";

const GetFavorsButton = () => {
  const { key, setKey } = React.useContext(AppContext);
  const { colors } = useTheme();
  const [favors, setFavors] = useState();

  //Function to get all Incomplete Favors
  const getFavors = async () => {
    const favs = await RPC.getAllIncompleteFavors(key);
    setFavors(favs);
  };

  return (
    <View style={styles.centeredView}>
      {favors && <Text style={styles.textStyle}> Some Data was found: {favors.toString()}</Text>}
      <Pressable
        style={[styles.button4, { backgroundColor: colors.primary }]}
        onPress={() => getFavors()}
      >
        <Text style={[styles.textStyle, { backgroundColor: colors.primary }]}>Refresh Favors</Text>
      </Pressable>
    </View>
  );
};

export default GetFavorsButton;