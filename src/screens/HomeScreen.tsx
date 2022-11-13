import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  StyleSheet,
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
                color: "orange",
              }}
            >
              Hello
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

        {favorsTab == 1 ? (
          <View style={styles.container2}>
            <Text style={styles.text}>Service: Chef </Text>

            <Text style={styles.text}>Wallet Address</Text>
            <Text style={styles.text}>Katherine Taylor</Text>

            <Text style={styles.smallerTextBox}>
              Can someone take care of my cat for 5 days?
            </Text>
          </View>
        ) : (
          <></>
        )}
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
const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: "black",
  },
  h1: {
    fontSize: 22,
    color: "gray",
  },
  h2: {
    fontSize: 20,
    color: "rgba(35, 60, 149, 1)",
  },
  reviewContainer: {
    borderWidth: 5,
    borderRadius: 8,
  },
  smallerTextBox: {
    borderWidth: 1,
    borderColor: "black",
    width: 300,
    fontSize: 18,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: 5,
    borderRadius: 8,
  },

  textBox: {
    width: 300,
    fontSize: 18,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: 5,
    borderRadius: 8,
  },
  button: {
    marginBottom: 4,
    width: 190,
    backgroundColor: "#d75555",
    borderRadius: 8,
  },
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
    paddingTop: 10,
    margin: 1,
  },
  container2: {
    backgroundColor: "rgba(156, 156, 156, 1)",
    padding: 10,
    margin: 3,
    borderRadius: 8,
  },
  profileImage: { width: 150, height: 150, borderRadius: 8 },
  buttonText: {
    textAlign: "center",
    padding: 10,
    color: "white",
    fontSize: 14,
  },
});
