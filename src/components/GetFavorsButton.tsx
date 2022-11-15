import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import InputField from "./InputField";
import { Ionicons } from "@expo/vector-icons";
import RPC from '../../ethersRPC'; // for using ethers.js
import { AppContext } from "../context/AppProvider";

const GetFavorsButton = () => {
  const { key, setKey, currentWalletAddress } = React.useContext(AppContext);
  const [favorText, setFavorText] = useState<String>();
  const [modalVisible, setModalVisible] = useState(false);
  const { colors } = useTheme();

  // Function to post a favor to contract
  const postFavor = async (favor: string) => {
    const post = await RPC.postFavor(favor);
    return post;
  }

  return (
    <View style={styles.centeredView}>
      <Pressable
        style={[styles.button, { backgroundColor: colors.primary }]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={[styles.textStyle, { backgroundColor: colors.primary }]}>Refresh Favors</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default GetFavorsButton;