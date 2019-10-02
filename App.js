
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  // ScrollView,
  View,
  Text,
} from 'react-native';
import {ScreenTitle} from './Component/ScreenTitle';
// import {OnePicker} from './Component/OnePicker';
import {ButtonGrp} from './Component/ButtonGrp';
import {IconButton} from './Component/IconButton';
import {MyProg} from './Component/MyProg';
import {CoachProg} from './Component/CoachProg';
import {ChatMode} from './Component/ChatMode';
import {EditInfo} from './Component/EditInfo';
import {MyWod} from './Component/MyWod';
import {ChartModal} from './Component/ChartModal';
import {Parent} from './Component/TestFunction';

const App = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <ScreenTitle title={'home'} />
      <ChatMode />

      {/* <ChartModal /> */}
      {/* <MyWod /> */}
      {/* <EditInfo /> */}
      {/* <IconButton /> */}
      {/* <CoachProg/> */}
      {/* <ButtonGrp /> */}
      {/* <OnePicker /> */}
      {/* <MyProg /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

});

export default App;
