/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
    StyleSheet,
    TextInput,TouchableOpacity,
    View,
    Text,
    Button,Image,
  } from 'react-native';



export const ChildFunction = (props) => {
let text = props;
// let [attr] = useState('active');
    return(
        <View>
            
            <Text style={props.active ? {color:'green'}
                            : {color:'red'}
        
        }>{props.text}</Text>
           <TouchableOpacity onPress={props.func}>
               <Text>start</Text>
           </TouchableOpacity>
        </View>
    )
};

function ParentFunction (){
    let [active, setActive] = useState(false);
    function start (){
        setActive(!active)
    }
    return (
        <View>
            <ChildFunction text={'this is child View'}
            active={active} func={start}
            />
        </View>
        

    );
}

// const styles = StyleSheet.create({
  
// })

export {ParentFunction}