import React , {useState} from 'react';
import {
  StyleSheet,
  ButtonGroup,
  TextInput,
  Image,
  View,
  TouchableOpacity,
  Text,
  Button,
} from 'react-native';
import {Arrow} from './exportImage';

const CoachProg = () => {

  return (
      <View style={styles.container}>
          <View style={styles.desc}>
            <Text style={styles.description} numberOfLines={2}>Win Your Success 
           
            </Text>
          </View>
        
          <Image style={styles.profil}
              source={require('./images/coach.jpeg')} 
              width={54} height={54} ></Image>
      
          <View style={styles.img}>
          <TouchableOpacity >
            <Arrow width={20} height={30} />
        </TouchableOpacity>
        </View>
    
   </View>
  );
};

const styles = StyleSheet.create({
    container:{
        marginTop:40,
        width:'100%',
        height:54,
        backgroundColor:'#49C4A8',
        flexDirection: 'row',
        justifyContent:'space-between',
        shadowOpacity: 0.8,
        shadowRadius: 10,
        shadowColor: '#DCDCDC',
        shadowOffset: { height: 19, width: 0 },
        elevation:6,
        borderTopWidth:0,
     
    },
    description:{
        color:'#ffffff',
        fontSize:19,
        width:180,
        

    },
    desc: {
      flexDirection:'column',
        marginLeft:43,
        alignItems:'center',
        justifyContent:'center',
       
       
    },
    profil:{
        

    },
  
    img:{
        margin:5,padding:5,
    },
});

export {CoachProg};
