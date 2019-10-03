
import React , {useState} from 'react';
import {
  StyleSheet,
  TextInput,TouchableOpacity,
  View,
  Text,
  Button,Image,
} from 'react-native';
import {Bin, Edit} from './exportImage';

const WodDescription = () => {
   
  return (
         <View style={styles.container}>
             <View style={styles.rectangl}>
                 <View style={styles.titleView}>
                 <Text style={styles.title}>lift of Lyme</Text>
                </View>
                <View style={styles.iconsView}>
                    <TouchableOpacity>
                    <Bin width={23} height={23} />
                    </TouchableOpacity>
                  <TouchableOpacity>
                        <Edit width={23} height={23} style={{
                        marginLeft:25
                    }}/>
                  </TouchableOpacity>
                  
                    
                </View>
             </View>
        
         </View>
  );
};

const styles = StyleSheet.create({
    rectangl:{ 
        borderWidth:0.2,
        width: 375,
        height: 33,
        borderColor:'#979797',
        flexDirection:'row'

    },
    titleView:{
        justifyContent:'center',
       
        width:'40%',marginLeft:40,
    },
    title:{
        fontSize:16,
        fontWeight:'bold',

    },
    iconsView:{
        
        flexDirection:'row',marginLeft:70,
        padding:3,justifyContent:'center'
    },
    container:{
        // margin:8,
        marginTop:40
    },
});

export {WodDescription};
