import { View, Image, Alert, Modal, Text, Pressable } from "react-native";
import { styles } from "../constants/style";
import { useTheme } from "@react-navigation/native";
import React, { useState } from "react";

const ToDoItem = (props) => {
  const { colors } = useTheme();
  const [modalVisible, setModalVisible] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);

  return (
    <View
      style={[
        { borderColor: colors.border, color: colors.text },
        styles.container2,
      ]}
    >
      <View style={styles.sideBySideFlexStart}>
        <Image
          source={{
            uri: props.uri,
          }}
          style={styles.profileImage2}
        />
        <View>
          <View style={styles.sideBySideFlexStart}>
            <Text style={[{ color: colors.text }, styles.text]}>Service: </Text>
            <Text style={[{ color: colors.text }, styles.text]}>
              {props.service}
            </Text>
          </View>
          <View style={styles.sideBySideFlexStart}>
            <Text style={[{ color: colors.text }, styles.text]}>
              Wallet Address:{" "}
            </Text>
            <Text style={[{ color: colors.text }, styles.text]}>
              {props.walletAddress}
            </Text>
          </View>
          <View style={styles.sideBySideFlexStart}>
            <Text style={[{ color: colors.text }, styles.text]}>Name:</Text>
            <Text style={[{ color: colors.text }, styles.text]}>
              {" "}
              {props.name}
            </Text>
          </View>
        </View>
      </View>

      <Text style={[{ color: colors.text }, styles.text]}>{props.message}</Text>
      {!showPopUp ? (
        <View style={styles.sideBySideCenter}>
          <View style={completed ? styles.button5 : styles.buttonGray}>
            <Text
              onPress={() => setCompleted(!completed)}
              style={[{ color: colors.text }, styles.text2]}
            >
              <Text
                onPress={() => setCompleted(!completed)}
                style={styles.text}
              >
                {completed ? "Mark Completed" : "Mark Incomplete"}
              </Text>
            </Text>
          </View>
          <View style={styles.button5}>
            <Text
              onPress={() => setShowPopUp(!showPopUp)}
              style={[{ color: colors.text }, styles.text2]}
            >
              Withdraw
            </Text>
          </View>
        </View>
      ) : (
        <></>
      )}
      {completed ? (
        <Text
          onPress={() => setCompleted(!completed)}
          style={styles.buttonText}
        ></Text>
      ) : (
        <></>
      )}
      {showPopUp ? (
        <View
          style={[
            { borderColor: colors.border, color: colors.text },
            styles.centeredView,
          ]}
        >
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.buttonText}>
                  You have withdrawn from this task.
                </Text>
                <Pressable
                  style={[styles.button2]}
                  onPress={() => {
                    setModalVisible(!modalVisible), setShowPopUp(!showPopUp);
                  }}
                >
                  <Text style={styles.buttonText}>Okay</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
          <View
            style={[
              {
                backgroundColor: "#4a2b7e",
                borderColor: colors.border,
                color: colors.text,
              },
              styles.text,
            ]}
          >
            <Text>
              Are you sure you want to withdraw? This will affect your
              reliability rating.
            </Text>
            <View style={styles.sideBySideCenter}>
              <Pressable
                style={[styles.button, styles.button2]}
                onPress={() => setModalVisible(true)}
              >
                <Text style={styles.buttonText}>Cancel</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.button2]}
                onPress={() => setModalVisible(true)}
              >
                <Text style={styles.buttonText}>Withdraw</Text>
              </Pressable>
            </View>
          </View>
        </View>
      ) : (
        <></>
      )}
    </View>
  );
};

export default ToDoItem;
