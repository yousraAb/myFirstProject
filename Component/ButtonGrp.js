import React , {useState} from 'react';
import {
  StyleSheet,
  ButtonGroup,
  TextInput,
  View,
  TouchableOpacity,
  Text,
  Button,
} from 'react-native';

const ButtonGrp = () => {

  return (
      <View style={styles.fixToText}>
      <TouchableOpacity style={styles.prog}>
          <Text style={styles.progtext}>Prog</Text>
         
          </TouchableOpacity>
          <View style={styles.line}></View>
      
       <TouchableOpacity style={styles.cour}>
        <Text style={styles.courtext}>Course</Text>
       
       </TouchableOpacity>
   </View>
  );
};

const styles = StyleSheet.create({

    line: {
      marginTop:60,
      height: 58,
      width: 2,
      borderWidth: 2,
      borderColor: '#ffffff'
      },
      progtext: {
        textAlign:'center',
        color:'white',
        fontSize:23,
        padding:10,
        lineHeight:28,
      },
      courtext:{
        textAlign:'center',
        color:'gray',
        fontSize:23,
        padding:10,
        lineHeight:28,
      },
  prog: {
    backgroundColor:'#49C4A8',
    height:58,
    width: 163,
    marginTop:60,
    borderWidth:1,
    borderBottomLeftRadius:16,
    borderTopLeftRadius:16,
    borderColor:'#49C4A8',
    // marginRight:2,
    marginLeft:25

  },
  cour: {
    backgroundColor:'#D8D8D8',
    height: 58,
    width: 163,
    marginTop:60,
    borderWidth:1,
    borderBottomRightRadius:16,
    borderTopRightRadius:16,
    borderColor:'#D8D8D8',   
    marginRight:25
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    
  },

});

export {ButtonGrp};
