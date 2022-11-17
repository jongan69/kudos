import { Feather } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { styles } from "../constants/style";

const AcceptButton = (item) => {
  console.log('datas', item)
  return (
      <TouchableOpacity
        style={styles.likebutton}
        onPress={() => { }}
      >
        <Feather
          name="heart"
          size={50}
          color="#C6C6C6"
        />
      </TouchableOpacity>
    
  )
}

export default AcceptButton;