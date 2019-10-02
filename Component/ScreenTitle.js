/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React , {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  // ScrollView,
  TextInput,
  View,
  Text,
  Button,
} from 'react-native';

const ScreenTitle = (props) => {

 

let {title} = props;

  return (
    <View style={styles.view}>
      <Text style={styles.title}> {title} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#49C4A8',
    height: 52,
    width: '100%'
  },
  title: {
    height: 37,
	  width: 131,
	  color: '#FFFFFF',
	  fontSize: 31,
	  fontWeight: 'bold',
    marginTop: 7, 
    marginLeft: 15, 
    marginBottom: 7
  }
});

export {ScreenTitle};
