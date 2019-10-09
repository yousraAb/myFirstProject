
import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  ButtonGroup,
  TextInput,TouchableHighlight,
  View,
  TouchableOpacity,Modal,
  Text,
  Button,Image,
} from 'react-native';

const TouchButton = () => {
   // let [show, setShow ] = useState(true);
    let [active, setActive] = useState(true);
    function start (){
        setActive(!active)
    }
  return (
      <View style={styles.container}>
          <TouchableHighlight style={styles.button}
           onLongPress={start} >
            <Text style={styles.buttonText}>Kettelbell Swings</Text>
        </TouchableHighlight>

        <View style={ active == true ?
        { flexDirection:'row',width:150,
        position:'absolute',top:350,
        left:81,backgroundColor:'red'
        }:
        {display:'none'} }> 
       
            <TouchableOpacity style={styles.btnstyle}
            >
                <Text style={styles.btntext}>ios-trash</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>
            alert('edit')
            } style={styles.editbtnstyle}>
                <Text style={styles.btntext}>edit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.morebtnstyle}>
                <Text style={styles.btntext}>more</Text>
            </TouchableOpacity>
        </View>   
      </View>
       
  );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    button: {
   width:'auto',
    height:23,
    marginLeft:39,backgroundColor:'#FFC6C2',opacity:0.5,
    borderWidth:2,
    borderColor:'#F59790',
    marginTop:400,
    },
    displayButtons: {
        flexDirection:'row',
        position:'absolute',top:350,
        left:81,
    },
    btnstyle:{
        width:39,
        height:39,backgroundColor:'pink',
        borderWidth:0.5,borderColor:'#ffffff',
        borderRadius:50,alignItems:'center',justifyContent:'center'
    },
    editbtnstyle:{
        width:39,
        height:39,backgroundColor:'pink',
        borderWidth:0.5,borderColor:'#ffffff',
        borderRadius:50,alignItems:'center',justifyContent:'center',
        marginLeft:16,marginTop:5,
    },
    morebtnstyle:{
        width:39,
        height:39,backgroundColor:'pink',
        borderWidth:0.5,borderColor:'#ffffff',
        borderRadius:50,alignItems:'center',justifyContent:'center',
        marginLeft:8,marginTop:45,
    },
    btntext:{
        fontSize:10,
    },
  
 
});
export {TouchButton};
