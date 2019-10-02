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
import {Pen} from './exportImage';


const EditInfo = () => {
   
  return (
      <View style={styles.container}>
          <View style={styles.txtView}>
              <Text style={styles.title}>Program's Name</Text>
              <Text style={styles.desc}>Description ending</Text>
          </View>
          <View style={styles.btn}>
            <TouchableOpacity>
            <Pen width={18} height={18} />
            </TouchableOpacity>
           
              
          </View>
      </View>
       
  );
};

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
   paddingTop:8,
        width:336,
        borderBottomColor:'#979797',
        borderBottomWidth:0.5,
       // borderWidth:1,
       height:50,
        margin:19,
    },
    txtView: {
        width:220,
        height:30,
        // backgroundColor:'blue',
    },
    title: {
        color: '#979797',
        fontSize:12,lineHeight:14,
    },
    desc: {
        fontSize:15,lineHeight:18,
    },
    btn :{
        width:32,height:32,
            //borderWidth:1,
            marginLeft:80,
            justifyContent:'center',
            alignItems:'center',
    },
});
export {EditInfo};
