import React from "react";
import { Card } from "react-native-paper";
import { Text, View } from '../components/Themed';
import Colors from "../constants/Colors";

export const FavorCard = (item) => {
  console.log('datas', item.item[1])
  return (
      <Card  style={{ width: '100%'}}>
      <Text
        style={{
          fontSize: 20,
          padding: 10,
          color: Colors.dark
        }}>
        {item.item[1]}
      </Text>
      </Card>
  )
}

export default FavorCard;