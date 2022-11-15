import { useTheme } from "@react-navigation/native";
import React, { useState } from "react";
import ProfileImage from "../components/ProfileImage";
import ToDoItem from "../components/ToDoItem";
import { ToDoList } from "../constants/favorsList";
import {
  ScrollView,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import CustomSwitch from "../components/CustomSwitch";

import { styles } from "../constants/style";
const TodoScreen = ({ navigation }) => {
  const [favorsTab, setfavorsTab] = useState(1);

  const onSelectSwitch = (value: React.SetStateAction<number>) => {
    setfavorsTab(value);
    if (favorsTab == 2) {
      navigation.navigate("Favors");
    }
  };
  return (
    <SafeAreaView>
      <ScrollView style={{ padding: 20 }}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            padding: 20,
          }}
        >
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <ProfileImage />
          </TouchableOpacity>
          <Text style={styles.h1}>James's Todo List</Text>
          <View style={{ marginVertical: 0 }}>
            <CustomSwitch
              selectionMode={1}
              option1="Pending"
              option2="Completed"
              onSelectSwitch={onSelectSwitch}
            />
          </View>
          {favorsTab == 1 ? (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                padding: 1,
              }}
            >
              <Text style={styles.h1}>Pending Items</Text>
              {ToDoList.map((item) =>
                item.isCompleted ? (
                  <ToDoItem
                    uri={item.uri}
                    service={item.service}
                    walletAddress={item.walletAddress}
                    name={item.name}
                    completed={item.isCompleted}
                  />
                ) : (
                  <></>
                )
              )}
            </View>
          ) : (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                padding: 1,
              }}
            >
              <Text style={styles.h1}>Completed Items</Text>
              {ToDoList.map((item) =>
                !item.isCompleted ? (
                  <ToDoItem
                    uri={item.uri}
                    service={item.service}
                    walletAddress={item.walletAddress}
                    name={item.name}
                    completed={item.isCompleted}
                  />
                ) : (
                  <></>
                )
              )}
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TodoScreen;
