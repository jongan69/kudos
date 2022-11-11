import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import BannerSlider from '../components/BannerSlider';
import Layout from '../constants/Layout'
import { useTheme } from '@react-navigation/native';


import ListItem from '../components/ListItem';
import Carousel from 'react-native-snap-carousel';
const windowWidth = Layout.window.width;

// import {freeGames, paidGames, sliderData} from '../model/data';

import CustomSwitch from '../components/CustomSwitch';
import WalletOverview from '../components/WalletOverview';

export default function NewsScreen({ navigation }) {
  const { colors } = useTheme();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <ScrollView style={{ padding: 20 }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 20,
          }}>

          <Text style={{ fontSize: 18, fontFamily: 'Roboto-Medium', color: colors.text  }}>
            Hello
          </Text>
        
          
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default NewsScreen
