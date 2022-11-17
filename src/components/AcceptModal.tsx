import React, { useState } from "react";
import { Alert, Pressable } from "react-native";
import { Card, Modal } from "react-native-paper";
import { Text, View } from '../components/Themed';
import Colors from "../constants/Colors";
import { styles } from "../constants/style";

export const AcceptModal = ({ props }) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={props.modalVisible}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                props.setModalVisible(!props.modalVisible);
            }}
            style={{ zIndex: 5}}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Hello World!</Text>
                    <Pressable
                        style={[styles.button, styles.button]}
                        onPress={() => props.setModalVisible(!props.modalVisible)}
                    >
                        <Text style={styles.textStyle}>Hide Modal</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    )
}

export default AcceptModal;