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


let born = false;

const UseEffectTest = () => {
    let [growth, setGrowth] = useState(0);
    //runs in the first mount
    useEffect(() => {
      console.log('i`m born')
    },[]);
    //runs in every mount update
    useEffect(() => {
        if(born){
            console.log('make mistake and learn');
        }else{
            born= true;
        }
       
    });
    function growHandler(){
        setGrowth(growth + 10);
    }
    let [modalVisible, setVisible] = useState(false);
    function setModalState(visible){
        setVisible({modalVisible:visible});
    }
   
   
  return (
      <View style={styles.container}>
        <View style={{marginTop: 22}}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <View style={{flex:1,marginTop: 62, }}>
            <View>
              <Text>Hello World!</Text>

              <TouchableHighlight
                onPress={() => {
                  setVisible(!modalVisible);
                }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <TouchableHighlight 

          onPress={() => {
            setVisible(true);
          }}>
          <Text style={{backgroundColor:'gray'}}>Show Modal</Text>
        </TouchableHighlight>
      </View>




          {/* <Text>Use Effect Test</Text>
          <Text>Growth : {growth}</Text>
          <Button onPress={growHandler}
          title='learn and grow'></Button> */}
          
          
      </View>
       
  );
};

const styles = StyleSheet.create({
    container: {
        flex:1,padding:50,
    },
  
 
});
export {UseEffectTest};
