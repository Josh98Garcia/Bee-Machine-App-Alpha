import * as React from 'react';
import { Image, StyleSheet, Button } from 'react-native';

import { Text, View } from '../components/Themed';

import beeart from "../assets/images/beeart.jpg";

export default function TabFiveScreen() {
  return (
    <View style={styles.container}>
	  <Text style={styles.title}>The Bee Machine App 0.0.2</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
	  <Text style={{fontSize: 18, fontWeight: 'bold'}}>The Model</Text><Text style={{color: '#888', width: '90%', fontSize: 15}}>
The current version of BeeMachine identifies 36 of the most common North American bumble bee species. Overall test accuracy is more than 91% (> 97% top-3) but this varies by species depending on the number of training images and their level of morphological variability (see fig below). BeeMachine uses a convolutional neural network, modified from InceptionV3, and was trained on over 90,000 bumble bee images. Bombus taxonomy follows Williams et al. 2016.</Text><Text/><Text style={{fontSize: 18, fontWeight: 'bold', width: '80%'}}>

36 Bombus species currently classified by BeeMachine: </Text><Text style={{color: '#888', width: '90%', fontSize: 15}}>
Bombus affinis, B. appositus, B. auricomus, B. bifarius, B. bimaculatus, B. borealis, B. caliginosus, B. centralis, B. citrinus, B. crotchii, B. cryptarum, B. fervidus, B. flavidus, B. flavifrons, B. fraternus, B. frigidus, B. griseocollis, B. huntii, B. impatiens, B. insularis, B. melanopygus, B. mixtus, B. morrisoni, B. nevadensis, B. occidentalis, B. pensylvanicus, B. perplexus, B. rufocinctus, B. sandersoni, B. sitkensis, B. sylvicola, B. ternarius, B. terricola, B. vagans, B. vandykei, and B. vosnesenskii </Text><Text/><Text/><Text/><Text>App created by Josh Garcia</Text>
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
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});