import React from "react";
import {  View } from "react-native";
import { Card } from "react-native-paper";
import { Text } from '../components/Themed';
import AcceptButton from "./AcceptButton";

const FavorCard = (item) => {
  console.log('datas', item.item[3])
  return (
    <View style={{ flexDirection: 'row', padding: 10 }}>
      <Card style={{ width: '80%' }}>

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
      <AcceptButton/>
    </View>
  )
}

export default FavorCard;