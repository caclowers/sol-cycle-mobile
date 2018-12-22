import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, ImageBackground, ReactPropTypes } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { web, phonecall } from 'react-native-communications';

import About from './src/components/About';


class App extends React.Component {
  
  static navigationOptions = {
    title: 'Home'
  }
  
  render() {
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.title}>SOL-Cycle</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    color: '#FDCE38',
    backgroundColor: '#090446',
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
  title: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    fontSize: 56,
    fontWeight: 'bold',
    color: '#052F5F',
    textShadowColor: '#FDCE38',
    textShadowOffset: ( {width: 2, height: -2} ),
    textShadowRadius: 1,
    padding: 6
  }
});

//navigation stuff
const Navigation = createStackNavigator({
  home: App,
  about: About
})



export default createAppContainer(Navigation);