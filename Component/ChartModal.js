import React, {useState} from 'react';
import {
  StyleSheet,
  ButtonGroup,
  TextInput,
  View,
  TouchableOpacity,
  Text,TouchableHighlight,
  Button,Image,PickerIOS,
} from 'react-native';
import {LineChart} from 'react-native-charts-wrapper';
//import DropdownMenu from 'react-native-dropdown-menu';
import ModalDropdown from 'react-native-modal-dropdown';

import Icon from 'react-native-vector-icons/AntDesign';



const ChartModal = () => {
 const [selected, setItem] = useState('');


  return ( 
      <View style={styles.container}>
        <ModalDropdown options={['last day', 'last month']}
        animated={true}
        style={styles.btn}
        dropdownStyle={{width:326}}
        dropdownTextStyle={{fontSize:14}}
         onSelect={(index,value) => { setItem(value) }}
        >
          <View style={{width:320,flexDirection:'row',}}>
            { selected === '' ?
            <Text style={styles.txt}> last thing </Text>
            :
            <Text style={styles.txt}> {selected} </Text>
          }
          <Icon name="caretdown" style={styles.icn} height={4} width={8} color="#6B6B6B" />
          </View>
        </ModalDropdown>
      </View>
       
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor:'#D8D8D8',
    width:326,
    height:35,
    borderRadius:9,
    marginTop:160,
    marginLeft:27,
    
    flexDirection:'row'
    
  },
  txt: {
    fontSize:14,color:'#6B6B6B',marginTop:10,
            marginLeft:21,
  },
  icn: {
    marginLeft:208,marginTop:10
  },
    container: {
        flexDirection:'row',
        width:'100%',
       alignItems:'center',
        marginTop:20,
      
    },
    chart: {
        flex:1,
    }
   

});
export {ChartModal};
