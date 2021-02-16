import * as React from 'react';
import { Image, StyleSheet, Button } from 'react-native';

import { Text, View } from '../components/Themed';

import beeart from "../assets/images/beeart.jpg";

export default function TabFourScreen() {
  return (
    <View style={styles.container}>
	  <Text style={styles.title}>The Bee Machine App 0.0.2</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
	  <Text style={{fontSize: 18, width: '80%', alignSelf: 'center', fontWeight: 'bold'}}>BeeMachine was developed by Brian Spiesman in collaboration with:</Text>
<Text />
<Text style={styles.name}>Claudio Gratton, University of Wisconsin – Madison</Text>
<Text style={styles.name}>Rich Hatfield, The Xerces Society for Invertebrate Conservation</Text>
<Text style={styles.name}>William Hsu, Kansas State University</Text>
<Text style={styles.name}>Sarena Jepsen, The Xerces Society for Invertebrate Conservation</Text>
<Text style={styles.name}>Brian McCornack, Kansas State University</Text>
<Text style={styles.name}>Krushi Patel, University of Kansas</Text>
<Text style={styles.name}>Richard Wang, University of Kansas</Text>
<Text/>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /><Text style={styles.subtitle}>
Support</Text><Text/><Text style={{color: '#888', width: '90%', fontSize: 18}}>
BeeMachine was funded by USDA NIFA and developed with data primarily from the Xerces Society and Bumble Bee Watch, iNaturalish, and BugGuide. I am grateful for the volunteer participants in these programs that share their images and taxonomic expertise. </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
	marginVertical: 30,
  },
  title: {
    fontSize: 25,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    alignSelf: 'center',
    height: 1,
    width: '80%',
  },
  name: {
	color: '#888',
    fontSize: 10,
	width: '90%',
  },
});