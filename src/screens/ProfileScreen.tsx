import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { AppContext } from '../context/AppProvider';

const ProfileScreen = () => {
  const { email, currentWalletAddress, key, userInfo } = React.useContext(AppContext);

  return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

        <Text>Profile Screen</Text>

        <Text>Your Wallet Address is {currentWalletAddress}</Text>
        <Text>Your Email is {email}</Text>
        <Text>View Private Key {key}</Text>

        <Text>View UserInfo</Text>;

        {userInfo !== null && (
          <Text>{JSON.stringify(userInfo)}</Text>
        )}

      </View>
  )
}

export default ProfileScreen
