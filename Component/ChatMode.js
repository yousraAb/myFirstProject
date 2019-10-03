import React , {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Button,Image,
} from 'react-native';

const ChatMode = (props) => {
//    const from = props;
let  [day] = useState(2);
   let year = new  Date().getFullYear();
   let date = new  Date().getDate();
   let heur = new  Date().getHours();
   let min = new  Date().getMinutes();
   let month = new  Date().getMonth();
   
  return (
         <View style={styles.container}>
         
             {props.from === "prog" ?
             <View>
                 
                <View style={styles.line}></View>
                <View style={styles.rectangl}>
                    <Image style={styles.profilpic}
                    source={require('./images/coach.jpeg')} 
                 />
                   <View style={styles.txt}>
                       <Text style={styles.nom}>well</Text>
                       <Text style={styles.prenom}>migan</Text>
                   </View>
               </View>
            </View>
            :
            <View>
                <View style={styles.line}></View>
                <View style={styles.rectangl}>
                    <Image style={styles.profilpic}
                    source={require('./images/coach.jpeg')} 
                 />
                 <View style={{flexDirection:'column'}}>
                 <View style={{flexDirection:'row'}}>
                   <View style={styles.txt2}>
                       <Text style={styles.nom}>well </Text>
                       <Text style={styles.prenom}>migan</Text>
                   </View>
                   <View style={styles.date}>
                       {day == date ?
                    <Text style={styles.datetxt}>{heur}:{min}</Text>
                    : day < date && day > date -2 ?
                    <Text style={styles.datetxt}>yesterday</Text>
                    :
                    <Text style={styles.datetxt}>{date}/{month+1}</Text>
                       }
                    </View>
                   </View>
                   <View style={styles.msg}>
                      <Text >Merci tout se passe bien on se...</Text>
                   </View>
                   </View>
                </View>           
            </View>      
             }      
         </View>
  );
};

const styles = StyleSheet.create({
    rectangl:{
        width:359,
        height:59,flexDirection:'row',
        position:'absolute',
    },
    line:{
        borderBottomWidth:0.2,
        borderBottomColor:'#979797',
        width:330,marginLeft:26,height:59, 
    },
    txt2:{
        flexDirection: "row",
        flexWrap: "nowrap",justifyContent: 'center',
        width:99,height:18,fontSize:15,
        marginLeft:6,marginTop:10, 
    },
    datetxt:{
        color:'gray',
    },
    msg :{
        fontSize:15,marginTop:6,
         marginLeft:20,
        width:260,

    },
    date:{
     
        marginLeft:130,marginTop:10,
        height:18,
    },
    txt:{
        flexDirection: "row",
        flexWrap: "nowrap",justifyContent: 'center',
        width:99,height:18,fontSize:15,
        marginLeft:6,marginTop:20, 
    },
    nom: {
        fontSize:15,
    },
    prenom: {
        fontSize:15,fontWeight:'bold',
    },
    profilpic: {
        width:58 ,
        height:58 ,
        borderRadius:15,
        backgroundColor:'#D8D8D8'
    },
    container:{
        margin:8,
        marginTop:40
    },
});

export {ChatMode};
