import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import RegForm from './RegForm';

export default class App extends React.Component {
//Render the form using an image and RegForm
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image}
          source = {require('/Users/nickkazan/Desktop/JavaScript Practice/Register FE-BE/Register/assets/forms.png')}
        />
        <RegForm/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d2d3b6',
    paddingLeft: '5%',
    paddingRight: '5%',
    height: '100%',
    width: '100%',
  },
  image: {
    marginBottom: 20,
    resizeMode: 'contain',
  }
});
