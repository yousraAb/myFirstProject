import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


function useInputSearch(initialValue, placeholder, onPress) {

    let [value, setValue] = useState(initialValue);

    function handleChange(e) {
        setValue(e.nativeEvent.text);

    }

    return {
        value,
        onChange: handleChange,
        onPress: onPress,
        placeholder: placeholder,
    }

}



function InputSearch(props) {

    let { value, placeholder, onChange, onPress } = props;

    return (
        <View style={styles.container}>
            <TextInput
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                style={styles.input}
                autoCapitalize='none'
            />
            <TouchableOpacity style={styles.iconContainer} onPress={ onPress }>
                <View >
                    <MaterialIcons name="search" size={34} color="#333" />
                </View>
            </TouchableOpacity>
        </View>

    );

}

InputSearch.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    onPress: PropTypes.func,
    placeholder: PropTypes.string,
};

InputSearch.useInputSearch = useInputSearch;


const styles = StyleSheet.create({

    container: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    iconContainer: {
        position: 'absolute',
        right: '5.5%',
        height: '96%',
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        borderRadius: 12,
    },

    input: {
        color: '#000',
        borderWidth: 0,
        borderColor: '#000',
        backgroundColor: '#e6e6e6',
        borderRadius: 12,
        padding: 15,
        width: '90%',
        height: 60,
        fontSize: 20,
    },

});


export { InputSearch };