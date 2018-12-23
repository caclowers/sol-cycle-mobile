import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, ImageBackground, ReactPropTypes } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { web, phonecall } from 'react-native-communications';

import About from './src/components/About';
import Button from './src/components/Button';

class App extends React.Component {
  
  static navigationOptions = {
    title: 'Home'
  }
  
  render() {
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.title}>SOL-Cycle</Text>
        
        <Text style={styles.UVvalue}>
          8
        </Text>
        <Text style={styles.timeDate}>
          time and date
        </Text>
        <Text style={styles.location}>
          Your City, State
        </Text>
        <Button 
        title="go"/>
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
  UVvalue: {
    flex: 0,
    fontSize: 428,
    fontWeight: 'normal',
    color: '#052F5F',
  },
  location: {
    flex: 0,
    fontSize: 48,
    fontWeight: 'normal',
    color: '#052F5F',
  },
  timeDate: {
    flex: 0,
    fontSize: 36,
    fontWeight: 'normal',
    color: '#052F5F',
  },
  title: {
    flex: 0,
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