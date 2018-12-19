import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, ImageBackground } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { web, phonecall } from 'react-native-communications';

class App extends React.Component {
  
  static navigationOptions = {
    title: 'Home'
  }
  
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 0,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  call: {
    fontSize: 28,
    fontWeight: 'normal'
  },
  ready: {
    fontSize: 18,
    fontWeight: 'normal'
  },
  phone: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'cornflowerblue',
    padding: 6,
    textDecorationLine: 'underline'
  }
});

//navigation stuff
const Navigation = createStackNavigator({
  home: App,
  about: About,
})



export default createAppContainer(Navigation);