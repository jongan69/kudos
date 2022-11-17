import React from "react";
import { Card } from "react-native-paper";
import { Text } from '../components/Themed';

const FavorCard = (item, navigation) => {
  console.log('datas', item.item[3])
  return (
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
  )
}

export default FavorCard;