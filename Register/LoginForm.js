import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import validator from 'validator';
import DropdownAlert from 'react-native-dropdownalert';

export default class RegForm extends React.Component {
    constructor() {
        super();
        this.state = {
          isVisible : false,
          emailInputValue: '',
          passInputValue: '',
          fnameInputValue: '',
          lnameInputValue: '',
        };
    }

    onPressAction = () => {
    
    }

    render() {
        return (
            <KeyboardAvoidingView behaviour="padding" style={styles.container}>
    
            <Text style={styles.header}>Practice Login</Text>

            <TextInput style={styles.text} 
            placeholder='Email'
            placeholderTextColor='#848772'
            returnKeyType='next'
            keyboardType='email-address'
            keyboardAppearance='dark'
            autoCapitalize='none'
            autoCorrect={false}
            onChangeText={emailInputValue => this.setState({emailInputValue})}
            />
            <TextInput style={styles.text} 
            placeholder='Password'
            placeholderTextColor='#848772'
            secureTextEntry
            returnKeyType='go'
            keyboardAppearance='dark'
            autoCapitalize='none'
            autoCorrect={false}
            onChangeText={passInputValue => this.setState({passInputValue})}
            />
            <TouchableOpacity
                style={styles.registerButton}
                onPress={this.onPressAction}
                underlayColor='white'>
                <Text style={styles.registerText}>Login</Text>
    
            </TouchableOpacity>
            {
                this.state.isVisible ? this.dropdown.alertWithType('success', 'Success', "Your login worked properly!") : null
            }
            <TouchableOpacity
                onPress={() => this.props.navigation.goBack()}
                underlayColor='white'>
                <Text style={styles.loginSwitchText}>No account? Register Here</Text>
            </TouchableOpacity>
            <DropdownAlert ref={ref => this.dropdown = ref} />
          </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        paddingTop: '10%',
        backgroundColor: '#d2d3b6',
        height: '100%',
    },
    header: {
        fontFamily: 'Helvetica',
        textAlign: 'center',
        color: '#3c3d34',
        fontSize: 34,
        paddingBottom: 10,
        marginBottom: 30,
    },
    text: {

        color: '#3c3d34',
        fontFamily: 'Helvetica',
        marginBottom: 50,
        marginLeft: 10,
        paddingLeft: 5,
        marginRight: 10,
        paddingBottom: 5,
        paddingTop: 10,
        borderBottomColor: '#3c3d34',
        borderBottomWidth: 1,
    },
    confirmText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 14,
        fontFamily: 'Helvetica',
      },
    registerText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 18,
        fontFamily: 'Helvetica',    
      },
    registerButton: {
        alignItems: 'stretch',
        margin:10,
        paddingVertical: 10,
        marginBottom: 20,
        backgroundColor:'#006DF1',
        borderRadius:10,
      },
    loginSwitchText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 13,
        fontFamily: 'Helvetica',
    },
});