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
  Image,
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
          <ScrollView>
            <View>
              <View style={styles.container2}>
                <View style={styles.sideBySideFlexStart}>
                  <Image
                    source={{
                      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtZYi9Q7zPvN-N8b0v1ZIPR0GoqU1ev2yGbw&usqp=CAU",
                    }}
                    style={styles.profileImage2}
                  />
                  <View>
                    <View style={styles.sideBySideFlexStart}>
                      <Text style={styles.text2}>Service: </Text>
                      <Text style={styles.text}> Decorating</Text>
                    </View>
                    <View style={styles.sideBySideFlexStart}>
                      <Text style={styles.text2}>Wallet Address: </Text>
                      <Text style={styles.text}>0xmrv...z083</Text>
                    </View>
                    <View style={styles.sideBySideFlexStart}>
                      <Text style={styles.text2}>Requester: </Text>
                      <Text style={styles.text}> Agnes</Text>
                    </View>
                  </View>
                </View>

                <Text style={styles.smallerTextBox}>
                  Can shelp me decorate my yard for Christmas?
                </Text>
                <View style={styles.sideBySideCenter}>
                  <View style={styles.button2}>
                    <Text style={styles.buttonText}>Volunteer</Text>
                  </View>
                  <View style={styles.button2}>
                    <Text style={styles.buttonText}>Comment</Text>
                  </View>
                </View>
              </View>
              <View style={styles.container2}>
                <View style={styles.sideBySideFlexStart}>
                  <Image
                    source={{
                      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzNFpIvdjmfWTooLsmpGiyr5iL4rd1h4VOsQ&usqp=CAU",
                    }}
                    style={styles.profileImage2}
                  />
                  <View>
                    <View style={styles.sideBySideFlexStart}>
                      <Text style={styles.text2}>Service: </Text>
                      <Text style={styles.text}> Assemble Furniture</Text>
                    </View>
                    <View style={styles.sideBySideFlexStart}>
                      <Text style={styles.text2}>Wallet Address: </Text>
                      <Text style={styles.text}>0x8mr9...1k8q</Text>
                    </View>
                    <View style={styles.sideBySideFlexStart}>
                      <Text style={styles.text2}>Requester: </Text>
                      <Text style={styles.text}>Tegan</Text>
                    </View>
                  </View>
                </View>

                <Text style={styles.smallerTextBox}>
                  Looking for someone to help me assemble furniture.{" "}
                </Text>
                <View style={styles.sideBySideCenter}>
                  <View style={styles.button2}>
                    <Text style={styles.buttonText}>Volunteer</Text>
                  </View>
                  <View style={styles.button2}>
                    <Text style={styles.buttonText}>Comment</Text>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
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
  text2: {
    fontSize: 18,
    color: "white",
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 1,
  },
  h1: {
    fontSize: 25,
    color: "black",
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: -1, height: 0 },
    textShadowRadius: 10,
  },
  h2: {
    fontSize: 20,
    color: "black",
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: -1, height: 0 },
    textShadowRadius: 10,
  },
  sideBySideCenter: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  sideBySideFlexStart: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
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
    margin: 4,
    width: 120,
    height: 60,
    backgroundColor: "#d75555",
    borderRadius: 8,
  },
  button2: {
    margin: 4,
    width: 120,
    height: 40,
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
    backgroundColor: "rgba(156, 156, 156, 0.7)",
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    margin: 3,
    borderRadius: 8,
  },
  profileImage: { width: 150, height: 150, borderRadius: 8 },
  profileImage2: { width: 90, height: 90, borderRadius: 8 },

  buttonText: {
    textAlign: "center",
    padding: 10,
    color: "white",
    fontSize: 14,
  },
});
