
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


const ChatMode = () => {
   
  return (
         <View style={styles.container}>
             <View style={styles.line}></View>
             <View style={styles.rectangl}>
                 <Image style={styles.profilpic}
                 source={require('./images/coach.jpeg')} 
              />
                <View style={styles.txt}>
                    <Text style={styles.nom}>well </Text>
                    <Text style={styles.prenom}>migan</Text>
                </View>
            </View>
         </View>
  );
};

const styles = StyleSheet.create({
    rectangl:{
        width:359,
        height:59,flexDirection:'row',
        position:'absolute',
    },
    line:{
        borderBottomWidth:0.2,
        borderBottomColor:'#979797',
        width:330,marginLeft:26,height:59, 
    },
    txt:{
        flexDirection: "row",
        flexWrap: "nowrap",justifyContent: 'center',
        width:99,height:18,fontSize:15,
        marginLeft:6,marginTop:20, 
    },
    nom: {
        fontSize:15,
    },
    prenom: {
        fontSize:15,fontWeight:'bold',
    },
    profilpic: {
        width:58 ,
        height:58 ,
        borderRadius:15,
        backgroundColor:'#D8D8D8'
    },
    container:{
        margin:8,
        marginTop:40
    },
});

export {ChatMode};
