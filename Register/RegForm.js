import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, } from 'react-native';
import validator from 'validator';
//const express = require('express');
//const app = express.Router();

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
        const { emailInputValue } = this.state; 
        const valid = (validator.isEmail(emailInputValue));

        if(!this.state.isVisible && valid){
            this.setState({isVisible:true});
            var data = {
                "fname": this.state.fnameInputValue,
                "lname": this.state.lnameInputValue,
                "email": this.state.emailInputValue,
                "password": this.state.passInputValue,
            }
            fetch("http://localhost:3000/", {
                method: "POST",
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body:  JSON.stringify(data)
            })
            .then(res => {
                res.json()
            })
            .then(function(data){ 
            })
            .catch(error => console.error('Error: ' + error))
        }
    }

  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.header}>Practice Registration</Text>
        <View style={{flexDirection: "row"}}>
            <View style={{flex: 1}}>
                <TextInput style={styles.text}
                placeholder='First Name'
                placeholderTextColor='#848772'
                onChangeText={fnameInputValue => this.setState({fnameInputValue})}
                />
            </View>
            <View style={{flex: 1}}>
            <TextInput style={styles.text}
                placeholder='Last Name'
                placeholderTextColor='#848772'
                onChangeText={lnameInputValue => this.setState({lnameInputValue})}
                />           
            </View>
        </View>
        <TextInput style={styles.text} 
        placeholder='Email'
        placeholderTextColor='#848772'
        onChangeText={emailInputValue => this.setState({emailInputValue})}
        />
        <TextInput style={styles.text} 
        placeholder='Password'
        placeholderTextColor='#848772'
        onChangeText={passInputValue => this.setState({passInputValue})}
        />
        <TouchableOpacity
            style={styles.registerButton}
            onPress={this.onPressAction}
            underlayColor='white'>
            <Text style={styles.registerText}>Register</Text>

        </TouchableOpacity>
        {
            this.state.isVisible ? <Text style={styles.confirmText}> Your account has been created </Text> : null
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
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
        paddingBottom: 5,
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
        marginTop:10,
        padding: 10,
        marginBottom: 20,
        backgroundColor:'#006DF1',
        borderRadius:10,
      },
});
