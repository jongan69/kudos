import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, View, Text } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';

// import EditScreenInfo from '../components/EditScreenInfo';
// import { Text, View } from '../components/Themed';

export default function KeygenScreen() {
  const { colors } = useTheme();
  return (
    <View style={styles.container}>
      <Text style={[styles.title, {color: colors.text}]}>Key Gen</Text>
      <View style={styles.separator} />

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    position: 'relative',
    paddingTop: '10%'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
