
import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  // ScrollView,
  View,
  Text,
} from 'react-native';
import {ScreenTitle} from './Component/ScreenTitle';
import {OnePicker} from './Component/OnePicker';
import {ButtonGrp} from './Component/ButtonGrp';
import {IconButton} from './Component/IconButton';
import {MyProg} from './Component/MyProg';
import {CoachProg} from './Component/CoachProg';
import {ChatMode} from './Component/ChatMode';
import {EditInfo} from './Component/EditInfo';
import {MyWod} from './Component/MyWod';
import {ChartModal} from './Component/ChartModal';
import {ParentFunction} from './Component/ParentFunction';
import {WodDescription} from './Component/WodDescription';
import {UseEffectTest} from './ComposantTest/UseEffectTest';
import {TouchButton} from './Component/TouchButton';
import {TouchableBtn} from './Component/TouchableBtn';
import {ChatInput} from './Component/ChatInput';
import {ProfileProg} from './Component/ProfileProg';
const App = () => {
//   let info = [{nom:'First', prenom:'last', photo:require('./Component/images/coach.jpeg')},
           
//     {nom:'sarah', prenom:'Magida', 
//             photo:require('./Component/images/coach.jpeg')
//     },
//     {nom:'sarah', prenom:'Magida', 
//             photo:require('./Component/images/coach.jpeg')
//     },
// ];

  return (
    <SafeAreaView style={{flex:1,}}>
       <ScreenTitle title={'home'} /> 
      <ProfileProg />
    
      {/* <SafeAreaView style={{flex:1,}}>
       <ScreenTitle title={'home'} /> */}
    {/* <TouchableBtn /> */}
      {/* <ChatInput /> */}
   
      {/* <TouchableBtn /> */}
      {/* <WodDescription /> */}
      {/* <ParentFunction /> */}
      {/* <ChatMode from={'chat'}/>
      <ChatMode from={'chat'}/>
      <ChatMode from={'prog'}/> */}
      {/* <ChartModal /> */}
      {/* <MyWod /> */}
      {/* <EditInfo />  */}
      {/* <IconButton /> */}
      {/* <CoachProg/> */}
      {/* <ButtonGrp /> */}
      {/* <OnePicker /> */}
      {/* <MyProg /> */}
    {/* </SafeAreaView> */}
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({

// });

export default App;
