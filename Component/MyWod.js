
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
import {Fleche} from './exportImage';


const MyWod = () => {
   
  return (
      <View style={styles.container}>
          <View style={styles.txtView}>
              <Text style={styles.title}>Amanda</Text>
              <Text style={styles.desc}>
              9-7-5:  Muscle-ups, Snatch 61kg
              Snatch 61kg
              </Text>
          </View>
          <View style={styles.btn}>
            <TouchableOpacity>
            <Fleche width={15} height={11} />
            </TouchableOpacity>
          </View>
          
      </View>
       
  );
};

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        width:'100%',
       alignItems:'center',
        marginTop:20,
        height:70,
    },
    txtView: {
        width:270,
        height:70,
        marginLeft:18,paddingTop:8,
    },
    title: {
        color: '#49C4A8',
        fontSize:17,
        fontWeight:'bold',
    },
    desc: {
        fontSize:15,lineHeight:18,flexWrap:'wrap'
    },
    btn :{
        width:32,height:32,
            marginLeft:25,
            justifyContent:'center',
            alignItems:'center',
    },
});
export {MyWod};
