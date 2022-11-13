import { useTheme } from "@react-navigation/native";
import React, { useState } from "react";
import ProfileImage from "../components/ProfileImage";
import ToDoItem from "../components/ToDoItem";
import {
  ScrollView,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "../constants/style";
const TodoScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView style={{ padding: 20 }}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            padding: 40,
          }}
        >
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <ProfileImage />
          </TouchableOpacity>
          <Text style={styles.h1}>James's Todo List</Text>
          <ToDoItem
            uri="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSggsi3n1ZuvJsnxOEP_UbHmlgoLBMVlTyghbFMoH-zGzcdYWj48nSV_wcdUNXIt4f9beE&usqp=CAU"
            service="Decorating"
            walletAddress="0xpr3...eb73"
            name="Chad"
            message="Drive U-haul to 6129 Marsden St, Philadelphia, PA 19135."
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TodoScreen;
