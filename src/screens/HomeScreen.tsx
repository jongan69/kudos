import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  RefreshControl,
  FlatList
} from "react-native";
import { styles } from "../constants/style";
import { useTheme } from "@react-navigation/native";
import CustomSwitch from "../components/CustomSwitch";
import { AppContext } from "../context/AppProvider";
import RPC from "../../ethersRPC"; // for using ethers.js
import HomeScreenHeader from "../components/HomescreenHeader";
import { toast } from "@backpackapp-io/react-native-toast";
import FavorCard from "../components/FavorCard";

export default function HomeScreen({ navigation }) {
  const { key, currentWalletAddress, favors, setFavors } = React.useContext(AppContext);
  const [favorsTab, setfavorsTab] = useState(1);
  const [refreshing, setRefreshing] = useState(true);
  const { colors } = useTheme();


  console.log('WALLET DATA FOR DEV (KEY, ADDRESS)', `KEY: ${key}`, `Address: ${currentWalletAddress}`)

  //Function to get all Incomplete Favors
  const getFavors = async () => {
    const id = toast.loading("Getting All Favors...");
    const favs = await RPC.getAllIncompleteFavors(key);
    // favors.forEach((item, index) => console.log('Favors', index))

    setFavors(favs);
    setTimeout(() => {
      toast.dismiss(id);
      setRefreshing(false);
    }, 1000);

  };

  React.useEffect(() => {
    getFavors();
  }, []);

  const onSelectSwitch = (value: React.SetStateAction<number>) => {
    setfavorsTab(value);
    if (favorsTab == 2) {
      navigation.navigate("Favors");
    }
  };

  const ItemSeparatorView = () => {
    return (
      <View
        style={{
          height: 1,
          width: '100%',
          backgroundColor: '#C8C8C8',
        }}
      />
    );
  };



  return (
    <SafeAreaView>
      {favors?.length > 0 && favorsTab == 1
        ? <FlatList
          ListHeaderComponent={
            <View >
              <ScrollView
                refreshControl={
                  <RefreshControl refreshing={refreshing} onRefresh={getFavors} />
                }
              >
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >

                  {/* <View
                style={{
                  borderWidth: 1,
                  flexDirection: "row",
                  borderColor: "#C6C6C6",
                  borderRadius: 8,
                  paddingHorizontal: 10,
                  paddingVertical: 8,
                  margin: 16,
                  width: 350,
                }} 
              >
                <Feather
                  name="search"
                  width={100}
                  size={20}
                  color="#C6C6C6"
                  style={{ marginRight: 5 }}
                />
                <TextInput
                  style={{ color: colors.text }}
                  placeholder="Search"
                />
              </View> */}

                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <HomeScreenHeader navigation={navigation} />
                  </View>
                  <View style={{ width: '100%',  alignItems: 'center' }}>
                    <CustomSwitch
                      selectionMode={1}
                      option1="Favors"
                      option2="Accepted"
                      onSelectSwitch={onSelectSwitch}
                    />
                  </View>
                </View>
              </ScrollView>
            </View>
          }
          stickyHeaderHiddenOnScroll={true}
          data={favors}
          keyExtractor={(item, index) => index?.toString()}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={FavorCard}
          style={{ width: '100%' }}
        />
        : null
      }

      {favorsTab == 2 &&
        <View style={{ width: '100%', alignItems: 'center' }}>
          <CustomSwitch
            selectionMode={2}
            option1="Favors"
            option2="Accepted"
            onSelectSwitch={onSelectSwitch}
          />
        </View>}
    </SafeAreaView>
  );
}