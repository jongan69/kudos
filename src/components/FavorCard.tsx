import { Feather } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Card } from "react-native-paper";
import { Text } from '../components/Themed';
import Colors from "../constants/Colors";
import { styles } from "../constants/style";

const FavorCard = (item) => {
  console.log('datas', item.item[3])
  return (
    <View style={{ flexDirection: 'row', maxWidth: '100%' }}>
      <Card style={{ width: '50%' }}>

        <Text
          style={{
            fontSize: 15,
            padding: 10,
            fontWeight: 'bold'
          }}>
          "{item.item[1]}"
        </Text>
        <Text
          style={{
            fontSize: 10,
            padding: 2,
          }}>
           - {item.item[3].toString()}
        </Text>
      </Card>
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
    </View>
  )
}

export default FavorCard;