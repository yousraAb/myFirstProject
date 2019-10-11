import React, { useState, useEffect } from 'react';
import
{
    StyleSheet,
    View,
    Text,
} from 'react-native';
import {CoachProg} from './CoachProg';
import {AthletesList} from './AthletesList';

const ProfileProg = () => {
    let [infos, setInfos] = useState([]);
    useEffect(() => {
        const info = [
            {nom:'First', prenom:'last', photo:require('./images/coach.jpeg')}, 
            {nom:'seconde', prenom:'last', photo:require('./images/coach.jpeg')}, 
            {nom:'First', prenom:'last', photo:require('./images/coach.jpeg')}
    ];
         setInfos(info);
       
    },[]);

    return (
        <View style={{ flex: 1,}}>
            <CoachProg title="Win Your Success y" 
            img={require('./images/coach.jpeg')}/>
            <AthletesList infos={infos} />
        </View>
    );
};

const styles = StyleSheet.create({
});
export { ProfileProg };
