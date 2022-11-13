import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";

import BannerSlider from "../components/BannerSlider";
import { useTheme } from "@react-navigation/native";
import { WEB_API_ROUTES } from "@env";

import CustomSwitch from "../components/CustomSwitch";

export default function HomeScreen({ navigation }) {
  const [favorsTab, setfavorsTab] = useState(1);
  const [api, setApi] = React.useState(null);
  const { colors } = useTheme();

  // Get Trending Feed Data
  React.useEffect(() => {
    fetch(WEB_API_ROUTES)
      .then((res) => res.json())
      .then((data) => setApi({ name: data.name }));
  }, []);

  const renderBanner = ({ item, index }) => {
    return <BannerSlider data={item} />;
  };

  const onSelectSwitch = (value) => {
    setfavorsTab(value);

    if (favorsTab == 2) {
      navigation.navigate("Favors");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <ScrollView style={{ padding: 20 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 20,
          }}
        >
          {api && (
            <Text
              style={{
                fontSize: 18,
                fontFamily: "Roboto-Medium",
                color: colors.text,
              }}
            >
              Hello {api?.name}
            </Text>
          )}

          {favorsTab == 1 && (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <ImageBackground
                source={{
                  uri: "https://media.istockphoto.com/id/1335941248/photo/shot-of-a-handsome-young-man-standing-against-a-grey-background.jpg?b=1&s=170667a&w=0&k=20&c=Dl9uxPY_Xn159JiazEj0bknMkLxFdY7f4tK1GtOGmis=",
                }}
                style={{ paddingTop: 100, width: 150, height: 155 }}
                imageStyle={{ borderRadius: 25 }}
              />
            </TouchableOpacity>
          )}
        </View>

        {favorsTab == 2 && (
          <View
            style={{
              flexDirection: "row",
              borderColor: "#C6C6C6",
              borderWidth: 1,
              borderRadius: 8,
              paddingHorizontal: 10,
              paddingVertical: 8,
            }}
          >
            <Feather
              name="search"
              size={20}
              color="#C6C6C6"
              style={{ marginRight: 5 }}
            />
            <TextInput placeholder="Search" />
          </View>
        )}

        {favorsTab == 1 && (
          <View
            style={{
              marginVertical: 15,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontFamily: "Roboto-Medium",
                color: colors.text,
              }}
            >
              Recent
            </Text>
            <TouchableOpacity onPress={() => {}}>
              <Text style={{ color: colors.text }}>See all</Text>
            </TouchableOpacity>
          </View>
        )}

        <View style={{ marginVertical: 20 }}>
          <CustomSwitch
            selectionMode={1}
            option1="Favors"
            option2="Offers"
            onSelectSwitch={onSelectSwitch}
          />
        </View>
        {favorsTab == 1 ? <></> : <></>}
        {/* {favorsTab == 1 &&
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
        {/* {favorsTab == 2 &&
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
