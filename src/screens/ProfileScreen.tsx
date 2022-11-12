import { useTheme } from '@react-navigation/native';
import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { AppContext } from '../context/AppProvider';

const ProfileScreen = () => {
  const { email, currentWalletAddress, key, userInfo } = React.useContext(AppContext);
  const { colors } = useTheme();
  return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: colors.text }}>Profile Screen</Text>
        <Text style={{ color: colors.text }}>Your Wallet Address is {currentWalletAddress}</Text>
        <Text style={{ color: colors.text }}>Your Email is {email}</Text>
        <Text style={{ color: colors.text }}>View Private Key {key}</Text>
        <Text style={{ color: colors.text }}>View UserInfo</Text>
        {userInfo !== null && <Text style={{ color: colors.text }}>{JSON.stringify(userInfo)}</Text> }
      </View>
  )
}

export default ProfileScreen
