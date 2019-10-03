/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
    StyleSheet,
    TextInput,
    View,
    Text,
    Button,Image,
  } from 'react-native';



export const ChildFunction = (props) => {
let text = props;
    return(
        <View>
            <Text>{props.text}</Text>
        </View>
    )

};

function ParentFunction (){

    return (
        <View>
            <ChildFunction text={'this is child View'}/>
        </View>
        

    );
}

// const styles = StyleSheet.create({
  
// })

export {ParentFunction}