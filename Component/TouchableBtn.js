import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  TouchableHighlight,
  View,
  TouchableOpacity,Modal,
  Text,
} from 'react-native';

const TouchableBtn = () => {
    let [active, setActive] = useState(false);
    function start (){
        setActive(!active)
    }
  return (
      <View style={styles.container}> 
          <View style={{
        width:'100%',height:200,flexDirection:'row'}}>
          <TouchableOpacity style={styles.buttonShow}
           onLongPress={start} >
            <Text style={styles.buttonText}>Kettelbell ASDI ACDI</Text>
          </TouchableOpacity>
          <View 
          style={ active == true ?
            { flexDirection:'row'
            }:
            {display:'none'} }>
              <View style={{flexDirection:'row',height:60,
            width:150,left:-80,top:40}}>
              <TouchableOpacity style={styles.btnstyle}
            >
                <Text style={styles.btntext}>ios-trash</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>
            alert('edit')
            } style={styles.editbtnstyle}>
                <Text style={styles.btntext}>edit</Text>
            </TouchableOpacity>
              </View>
              <View style={{left:-150}}> 
              <TouchableOpacity style={styles.morebtnstyle}>
                <Text style={styles.btntext}>more</Text>
            </TouchableOpacity>

              </View>
          
            </View>
          </View>

      
           
           
    
      </View>
       
  );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    buttonShow: {
        height:23,
        marginLeft:39,backgroundColor:'#FFC6C2',opacity:0.5,
        borderWidth:2,
        borderColor:'#F59790',
        marginTop:100,
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
        marginLeft:18,marginTop:95,
    },
    btntext:{
        fontSize:8,
    },
  
  
   
  
 
});
export {TouchableBtn};
