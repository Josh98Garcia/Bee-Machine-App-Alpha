import * as React from 'react';
import { Image, StyleSheet, Button } from 'react-native';

import { Text, View } from '../components/Themed';

import beeart from "../assets/images/beeart.jpg";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
	  <Image source={beeart} style={{ width: 305, height: 305 }} /> 
	  <Text/>
	  <Text style={styles.title}>Home</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
	  <Text style={{color: '#888', fontSize: 18}}>This app does not do anything yet, but it will soon!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
	marginVertical: 60,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
