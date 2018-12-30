import React, { Component } from 'react';
import { StatusBar, Platform, Text, View, ScrollView, StyleSheet } from 'react-native';
import { Constants, Location, Permissions } from 'expo';
import axios from 'axios';

export default class App extends Component {
  state = {
    location: null,
    errorMessage: null,
  };

  componentWillMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      });
    } else {
      this._getLocationAsync();
    }
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location });
  };

  static navigationOptions = {
    title: 'Where?',

    headerStyle: { backgroundColor: '#090446' },
  headerTitleStyle: { color: 'white' },
  }

  render() {
  
 
    let text = 'Waiting..';
    if (this.state.errorMessage) {
      text = this.state.errorMessage;
    } else if (this.state.location) {
      text = JSON.stringify("latitude, longitude --" + " " 
      + this.state.location.coords.latitude.toFixed(3) + ", " 
      + this.state.location.coords.longitude.toFixed(3));
    }

    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
       <View>
    <StatusBar
      barStyle="light-content"
    />
  </View>
        <Text style={styles.textInput}>{text}</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    fontFamily: 'Trebuchet MS',
    color: '#FDCE38',
    backgroundColor: '#090446',
    alignItems: 'center',
    justifyContent: 'center',
  },
  UVvalue: {
    flex: 0,
    fontSize: 328,
    borderColor: '#FDCE38',
    fontFamily: 'Trebuchet MS',
    borderWidth: 2,
    borderRadius: 12,
    fontWeight: 'normal',
    width: '85%',
    color: '#052F5F',
    textAlign: 'center', 
    textShadowColor: '#FDCE38',
    textShadowOffset: ( {width: 2 , height: 2} ),
    textShadowRadius: 0
  },
  location: {
    flex: 0,
    fontSize: 48,
    fontWeight: 'normal',
    fontFamily: 'Trebuchet MS',
    color: '#052F5F',
    textShadowColor: '#FDCE38',
    textShadowOffset: ( {width: 1, height: 1} ),
    textShadowRadius: 0,
  },
  timeDate: {
    flex: 0,
    fontSize: 36,
    fontWeight: 'normal',
    fontFamily: 'Trebuchet MS',
    color: '#052F5F',
    marginBottom: 36,
    textShadowColor: '#FDCE38',
    textShadowOffset: ( {width: 1, height: 1} ),
    textShadowRadius: 0,
  },
  title: {
    flex: 0,
    alignItems: 'flex-start',
    justifyContent: 'center',
    fontFamily: 'Trebuchet MS',
    fontSize: 72,
    fontWeight: 'bold',
    color: '#052F5F',
    textShadowColor: '#FDCE38',
    textShadowOffset: ( {width: 2, height: 2} ),
    textShadowRadius: 0,
    padding: 6
  },
  textInput:{
    // height: 60,
    fontSize: 24, 
    // width: '85%', 
    color: '#FDCE38', 
    // borderColor: '#052F5F', 
    // borderWidth: 2,
    // borderRadius: 12,
    marginTop: 6,
    flex: 0,
    textAlign: 'center',
    justifyContent: 'center',
  }
});