import React , {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Text,
  Button,Image,
} from 'react-native';


const MyProg = (props) => {
   
   let pic = [{title: 'Title with text',text :'800',
            nom:'', prenom:'', photo:''},
            {title: 'Title with text',text :'600,00$',
            nom:'', prenom:'', photo:''},
    {title: 'Title with image',text :'',
            nom:'sarah', prenom:'Magida', 
            photo:require('./images/coach.jpeg')
    },
    {title: 'Title with image',text :'',
            nom:'sarah', prenom:'Magida', 
            photo:require('./images/coach.jpeg')
    },
];

  return (
      <View style={styles.container}>
          {pic.map((item) => 
          {return item.text !== "" ?
          <View style={styles.displayView}>
              <View style={styles.box
            }>
          <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.txt}>{item.text}</Text>
            </View>
      </View>
          :
          <View style={styles.displayView}>
              <View style={styles.box}>
            <Text style={styles.title}>{item.title}</Text>
            <Image style={styles.img} 
            source={item.photo}/>
            <View style={{flex: 1,flexDirection: "row",
            flexWrap: "nowrap",justifyContent: 'center',marginTop:13}}>
                <Text style={styles.nom}>{item.nom} </Text>
                <Text style={styles.prenom}>{item.prenom}</Text>
            </View>
            </View>
          </View>
          }
          )}
      </View>
  );
};

const styles = StyleSheet.create({
    displayView: {
        width:176,
        height:176,
        margin:6,
        borderWidth:2,
        shadowOffset: {width:0,height:0},
        borderRadius:14,
        borderColor:'#ffffff',
        shadowColor: '#49C4A8',
        shadowRadius: 14,
        shadowOpacity: 0.2,
        backgroundColor:'transparent',overflow:'hidden',
        padding:5,
        
    },
    box :{ 
        backgroundColor:'#ffffff',
        borderRadius:16,height:162,
        borderColor:'#49C4A8',
        shadowColor: '#49C4A8',shadowRadius: 15,
        shadowOpacity: 0.3,
    },
    img:{
        width:58, height:58,backgroundColor:'#D8D8D8',
        borderRadius:15,marginLeft:50,marginTop:20,
       
    }
    ,
    nom: {
        fontSize:15,
    },
    prenom: {
        fontSize:15,fontWeight:'bold',
    },
    title:{
        fontSize:12,color: '#49C4A8',
        textAlign:'center',marginTop:11,
    },
    txt: {
       paddingTop:30,color: '#000000',fontSize: 32,
        fontWeight:'bold',textAlign: 'center',
    },
    container:{
        flexDirection:'column',
        flexWrap:'wrap',
        height:400
    },
 
 

});

export {MyProg};
