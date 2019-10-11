
import React , {useState, useEffect} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Button,Image,
} from 'react-native';

const ListItemImageName = ( props ) => {
     let {Item} = props;
     console.log(props);
  return (
         <View style={styles.container}>
                 <View style={styles.line}></View>
                 <View style={styles.rectangl}>
                     <Image style={styles.profilpic}
                    source={Item.photo}
                  />
                    <View style={styles.txt}>
                        <Text style={styles.nom}>{Item.nom}  </Text>
                        <Text style={styles.prenom}>{Item.prenom}</Text>
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
    txt2:{
        flexDirection: "row",
        flexWrap: "nowrap",justifyContent: 'center',
        width:99,height:18,fontSize:15,
        marginLeft:6,marginTop:10, 
    },
    datetxt:{
        color:'gray',
    },
    msg :{
        fontSize:15,marginTop:6,
         marginLeft:20,
        width:260,
    },
    date:{
        marginLeft:130,marginTop:10,
        height:18,
    },
    txt:{
        flexDirection: "row",
        flexWrap: "nowrap",justifyContent: 'center',
        width:100,height:18,fontSize:15,
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
         marginTop:45
    },
});

export {ListItemImageName};
