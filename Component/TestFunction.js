
import react from 'react';
import {View, Text }from 'react-native';
import { CustomConsole } from '@jest/console';

const Child = (props) => { 
let text = props;
    return(
        <View>
            <Text>{text}</Text>
        </View>
    )

};

const Parent = () => {

    return(
        <Child text={'this is child View'}/>

    )
};
export {Parent};