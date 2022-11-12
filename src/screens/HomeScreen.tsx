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
import { useTheme } from '@react-navigation/native';

// import Layout from '../constants/Layout'
// import ListItem from '../components/ListItem';
// import Carousel from 'react-native-snap-carousel';
// const windowWidth = Layout.window.width;
// import {freeGames, paidGames, sliderData} from '../model/data';

import CustomSwitch from '../components/CustomSwitch';

export default function HomeScreen({ navigation }) {
  const [gamesTab, setGamesTab] = useState(1);
  const [api, setApi] = React.useState(null)
  const { colors } = useTheme();

  // Get Trending Feed Data
  React.useEffect(() => {
    fetch("http://localhost:3000/api")
      .then(res => res.json())
      .then(data => setApi({ name: data.name }))

  }, [])


  const renderBanner = ({ item, index }) => {
    return <BannerSlider data={item} />;
  };

  const onSelectSwitch = value => {
    setGamesTab(value);

    if (gamesTab == 2) {
      navigation.navigate('Favors')
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <ScrollView style={{ padding: 20 }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 20,
          }}>

          {api && <Text style={{ fontSize: 18, fontFamily: 'Roboto-Medium', color: colors.text }}>
            Hello {api?.name}
          </Text>}

          {gamesTab == 2 && (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <ImageBackground
                source={{ uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' }}
                style={{ width: 35, height: 35 }}
                imageStyle={{ borderRadius: 25 }}
              />
            </TouchableOpacity>
          )}

        </View>

        {gamesTab == 2 && (
          <View
            style={{
              flexDirection: 'row',
              borderColor: '#C6C6C6',
              borderWidth: 1,
              borderRadius: 8,
              paddingHorizontal: 10,
              paddingVertical: 8,
            }}>
            <Feather
              name="search"
              size={20}
              color="#C6C6C6"
              style={{ marginRight: 5 }}
            />
            <TextInput placeholder="Search" />
          </View>
        )}

        {/* {gamesTab == 2 && (
          <View
            style={{
              marginVertical: 15,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{ fontSize: 18, fontFamily: 'Roboto-Medium', color: colors.text }}>
              Recent
            </Text>
            <TouchableOpacity onPress={() => { }}>
              <Text style={{ color: colors.text }}>See all</Text>
            </TouchableOpacity>
          </View>
        )} */}

        {/* <Carousel
          ref={c => {
            this._carousel = c;
          }}
          data={sliderData}
          renderItem={renderBanner}
          sliderWidth={windowWidth - 40}
          itemWidth={300}
          loop={true}
        /> */}

        <View style={{ marginVertical: 20 }}>
          <CustomSwitch
            selectionMode={1}
            option1="Favors"
            option2="Offers"
            onSelectSwitch={onSelectSwitch}
          />
        </View>

        {/* { gamesTab == 1 && (
          <WalletOverview/>
        )} */}

        {/* {gamesTab == 1 &&
          freeGames.map(item => (
            <ListItem
              key={item.id}
              photo={item.poster}
              title={item.title}
              subTitle={item.subtitle}
              isFree={item.isFree}
              onPress={() =>
                navigation.navigate('GameDetails', {
                  title: item.title,
                  id: item.id,
                })
              }
            />
          ))} */}
        {/* {gamesTab == 2 &&
          paidGames.map(item => (
            <ListItem
              key={item.id}
              photo={item.poster}
              title={item.title}
              subTitle={item.subtitle}
              isFree={item.isFree}
              price={item.price}
              onPress={() =>
                navigation.navigate('GameDetails', {
                  title: item.title,
                  id: item.id,
                })
              }
            />
          ))} */}
      </ScrollView>
    </SafeAreaView>
  );
}
