import React , {useState, useEffect} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Button,Image,
} from 'react-native';
import {ListItemImageName} from './ListItemImageName';

const AthletesList = (props) => {
     let infos = props;
     console.log(props);
  return (
    props.infos.map(item => 
        <ListItemImageName Item={item} />
         ) 
  );
};

const styles = StyleSheet.create({
  
});

export {AthletesList};
