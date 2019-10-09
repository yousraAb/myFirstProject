
import React, { useState, useEffect } from 'react';
import
{
    StyleSheet,
    TouchableHighlight,
    View, PickerIOS,
    TouchableOpacity, Modal,
    Text, TextInput, Keyboard, KeyboardAvoidingView,
} from 'react-native';
import { Add, Send, Cross } from './exportImage';

const ChatInput = () =>
{
    let color = 'red';
    let [active, setActive] = useState(false);
    function start()
    {
        setActive(!active)
    }

    return (
        <View style={{ flex: 1,position:'relative',}}>
            
             <View style={{backgroundColor:'#D8D8D8',height:30,width:'100%',
        position:'absolute',bottom:0}}>
                        
        </View>
        <KeyboardAvoidingView behavior='padding'
        style={{position:'absolute',bottom:30 }}
            >
                    <View style={active == true ?
                        {
                            flexDirection: 'row',
                        } :
                        { display: 'none' }}>
                        <PickerIOS style={styles.picker}>
                            <PickerIOS.Item label='personal Record' value='personal Record' />
                            <PickerIOS.Item label='Statistic' value='Statistic' />
                            <PickerIOS.Item label='My WOD' value='My WOD' />
                        </PickerIOS>
                    </View>
                    <View style={styles.box}>
                        {active == true ?
                            <View style={styles.addbtn}>
                                <TouchableOpacity onPress={start}>
                                    <Cross width={32} /> 
                                </TouchableOpacity>
                            </View>
                            :
                            <View style={styles.addbtn}>
                                <TouchableOpacity onPress={start}>
                                    <Add width={32} />
                                </TouchableOpacity>
                            </View>
                        }
                        <View>
                            <TextInput style={styles.input}
                                onSubmitEditing={Keyboard.dismiss}
                            />
                        </View>
                        <View style={styles.sendView}>
                            <TouchableOpacity>
                                <Send />
                            </TouchableOpacity>
                        </View>
                    </View>
        </KeyboardAvoidingView>
       
        </View>
    );
};

const styles = StyleSheet.create({
    picker: {
        width: 375,
        backgroundColor: '#D8D8D8',
        borderWidth: 0.1,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15, 

    },
    box: {
        backgroundColor: '#D8D8D8',
        width: 375, height: 45,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 0.1, borderColor: '#979797',

    },
    input: {
        backgroundColor: '#ffffff',
        width: 274, height: 30,
        borderWidth: 0.1,
        borderColor: '#979797', borderRadius: 21,
    },
    sendView: {
        marginLeft: 15,
    },
    addbtn: {
        marginLeft: 10, marginRight: 10,
    },
    container: {
        flex: 1, position: 'relative'
    },

});
export { ChatInput };
