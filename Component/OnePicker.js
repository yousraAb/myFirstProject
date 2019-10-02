import React ,{ useState, useEffect } from 'react';
import {
  StyleSheet,
  // ScrollView,
  Picker,
  TouchableHighlight,
  TouchableOpacity,
  View,
  Icon,
  PickerIOS,
  TextInput,
  Alert,
  Text,
  Button,
  Platform,
  ScrollView,
  Modal,
} from 'react-native';
import {InputCheckSVG} from './exportImage';


const OnePicker = (props) => {
  const [typeChrono, setValue] = useState('');
  const [dimensions, setDimensions] = useState({width:0, height:0, x:0, y:0});
  // const [one, setOne] = useState({width:0, height:0, x:0, y:0});
  const [items, setItems] = useState([]);
 


  
  const pickerValues = [
    {title: 'VMN', value: 'VMN'},
    {title: 'BBC',value: 'BBC'},
    {title: 'VGT',value: 'VGT'},
    {title: 'BBC',value: 'BBC'} ,
    {title: 'VGT',value: 'VGT'},
    {title: 'BBC',value: 'BBCR'}
  ]

    useEffect(() => {
      console.log(items);
    }, [items])
  return (
     Platform.OS === 'android' 
        ? //if true
        
        <View style={styles.container}> 
         {/* <Text style={{fontSize:20}}>height:
        {dimensions.height} ,,x: {dimensions.x},  y : {dimensions.y},  width : {dimensions.width}
        </Text> */}

        {/* {items.map(item => (
           <Text> {item.x} || {item.height} || {item.width} || {item.y}</Text>
        ))} */}
         {/* <View style={{width:20, height:20, backgroundColor:'black',
         left:20, top:dimensions.y,
          position:'absolute' }}
        >

        </View> */}
        <View onLayout={(event) => {
            const {x, y, width, height} = event.nativeEvent.layout;
            setDimensions({width:width, height:height, x:x, y:y});
          }
        }
        style={styles.selection}> 
       
        </View>
        <View style={styles.pickerA}>
          <ScrollView style={styles.scroll}>
              {pickerValues.map(({value ,index}) => (
                <View onLayout={(e) => {
                  setItems([      
                    ...items, 
                       y = e.nativeEvent.layout.y,
                      //  x = e.nativeEvent.layout.x,
                      //  height = e.nativeEvent.layout.height,
                      //  width = e.nativeEvent.layout.width,
                  ]);
                }} 
                key={index}>
                  <Text style={styles.txt} key={index}>{value}</Text>
                </View>
              ))} 
          </ScrollView>
        </View>
        <TouchableOpacity onPress={() => { 
            let v = dimensions.y + dimensions.height;
            {items.map(item => 
              {if(item >= dimensions.y && item < v)
                alert(item)
              }
            )} 
            }

        }
       
        >
        <View style={styles.ViewButton}>
            <InputCheckSVG  style={styles.buttonStyleA} width={34} height={34} />
           </View>
        </TouchableOpacity>

        <Button 
           onPress={() => { 
            let v = dimensions.y + dimensions.height;
            {items.map(item => 
              {if(item >= dimensions.y && item < v)
                alert(item)
              }
            )} 
            }}
            title='k'>
        </Button>
        </View>
        : //if false
        <View style={styles.container}> 
        <PickerIOS 
        style={styles.pickerT}
        selectedValue={typeChrono}
        onValueChange={(typeChrono) => {setValue(typeChrono)} }
        >
            <PickerIOS.Item label="team" value="team" />
            <PickerIOS.Item label="For time" value="For time" />
            <PickerIOS.Item label="MNS" value="MNS" />
            <PickerIOS.Item label="FFGT" value="FFGT" />
        </PickerIOS> 
        <TouchableOpacity onPress={() => {
           alert(typeChrono);
        }}
        >
        <View style={styles.ViewButton}>
            <InputCheckSVG  style={styles.buttonStyle} width={34} height={34} />
           </View>
        </TouchableOpacity>
         </View> 
    
  );
}

const styles = StyleSheet.create({
  p: {
    width: '90%',
    borderColor: '#49C4A8',
    borderWidth : 0.9,
    borderRadius: 16,
    opacity:1.0,
  },
  pickerT: {
    width: '90%',
    borderColor: '#49C4A8',
    borderWidth : 0.9,
    borderRadius: 16,
    opacity:1.0,
  },
  pickerA: {
    width: '90%',
    height: 194,
    marginTop:80,
    borderColor: '#49C4A8',
    borderWidth : 0.9,
    borderRadius: 16,
    opacity:1.0,
  },
  scroll: {
    width:'100%',
  },
  txt:{
    fontSize:25,
    borderBottomColor:'#49C4A8',
    borderBottomWidth:0.5,
    textAlign:'center',
    padding: 15,
    
  },
  selection: {
    
    borderWidth:5,
    borderColor:'red',
    height:70,
    width:"90%",
    top:210,

  },

  buttonStyleA: {
    left:169,
    top:-35,
    },
  ViewButton: {
    width: '100%',
  },
  buttonStyle: {
  left:151,
  top:-35,
  },
  container: {  
    
    alignItems: 'center',  
    justifyContent: 'center',
    marginTop:20, 
}, 





});

export  {OnePicker};
