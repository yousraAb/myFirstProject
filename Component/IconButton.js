import React , {useState} from 'react';
import {
  StyleSheet,
  ButtonGroup,
  TextInput,
  View,
  TouchableOpacity,
  Text,Image,
  Button,
} from 'react-native';
import {ChildImag} from './ChildImag';
import { Back, Eye, Validate } from './exportImage';

const IconButton = () => {
   
  return (
    <View style={styles.fixToText}>   
    <ChildImag>
      <Back style={styles.iconBack} />
    </ChildImag>
    <ChildImag>
    <Eye style={styles.iconEye} />
    </ChildImag>
    <ChildImag>
    <Validate style={styles.iconValid} />
    </ChildImag>


             {/* <TouchableOpacity style={{marginLeft:123}}>
            <Back  style={styles.icon}/>
         </TouchableOpacity>
        <TouchableOpacity style={{marginLeft:10,marginRight:10}}>
            <Eye  style={styles.icon}/>
        </TouchableOpacity>
        <TouchableOpacity style={{marginRight:122}}>
            <Validate  style={styles.icon}/>
        </TouchableOpacity> */}
     </View>
   
  );
};

const styles = StyleSheet.create({
    iconBack: {
    height:32,
    width: 32,
    marginLeft:123,
  },
  iconEye: {
    height:32,
    width: 32,
    marginLeft:12,
  },
  iconValid: {
    height:32,
    width: 32,
    marginLeft:12,
  },
  fixToText: {
    marginTop:60,
    flexDirection: 'row',
    // justifyContent: 'space-between',
  },

});

export {IconButton};
