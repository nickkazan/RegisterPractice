import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar } from 'react-native';
import RegForm from './RegForm';
import LoginForm from './LoginForm';
import {createStackNavigator, createAppContainer} from 'react-navigation';


export default class App extends React.Component {
//Render the form using an image and RegForm
  render() {
    return (
      <View style={styles.container}>
      <StatusBar
      barStyle='light-content'
      />
        <View style={styles.imageContainer}>
          <Image style={styles.image}
            source = {require('/Users/nickkazan/Desktop/JavaScript Practice/Register FE-BE/Register/assets/forms.png')}
          />
        </View>

        <AppContainer/>
      
      </View>
    );
  }
}

const AppStackNavigator = createStackNavigator({
  Register: { 
    screen: RegForm,
},
  Login: { 
    screen: LoginForm,
  }
},{
  headerMode: 'none',
  
});
const AppContainer = createAppContainer(AppStackNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#d2d3b6',
    //paddingLeft: '5%',
    //paddingRight: '5%',
  },
  imageContainer: {
    justifyContent: 'center',
    //flexGrow: 1,
    paddingTop: 130,
    alignItems: 'center',
  },
  image: {
    height: 100,
    width: 100,
  }
});
