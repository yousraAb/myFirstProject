import React , {useState} from 'react';
import {
  StyleSheet,
  ButtonGroup,
  TextInput,
  View,
  TouchableOpacity,
  Text,
  Button,Image,
} from 'react-native';
import {Back, Eye, Validate} from './exportImage';


const ChildImag = (props) => {
   
  return (
          <TouchableOpacity>
          {props.children}
          </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
});

export {ChildImag};
