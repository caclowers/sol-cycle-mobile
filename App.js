import React from 'react';
import { StatusBar, StyleSheet, Text, TextInput, View, ScrollView, Image, ImageBackground, ReactPropTypes } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import About from './src/components/About';
import Where from './src/components/Location';
import Button from './src/components/Button';

class App extends React.Component {

  
  static navigationOptions = {
    title: '',
    headerStyle: { backgroundColor: '#090446' },
  headerTitleStyle: { color: 'white' },
  }

  constructor(props) {
    super(props);
    this.state = { city: 'City', state: 'State' };
  }

  onButtonPress = () => {
    this.props.navigation.navigate('where');
  }
  
  render() {
    return (
    
      <ScrollView contentContainerStyle={styles.contentContainer}>
         <View>
          <StatusBar
            barStyle="light-content"
          />
        </View>
        <Text 
          style={styles.title}>
            SOL-Cycle
        </Text>
        
        <Text 
          style={styles.UVvalue}>
            8
        </Text>
        <Text 
          style={styles.location}>
            Your City, State
        </Text>
        <Text 
          style={styles.timeDate}>
            time and date
        </Text> 
        <TextInput 
          style={styles.textInput}
          onChangeText={(text) => this.setState({text})}
          value={this.state.city}/>
        <TextInput style={styles.textInput}
          onChangeText={(text) => this.setState({text})}
          value={this.state.state}/>
        <Button 
          title="Search"
          onPress={this.onButtonPress}/>
        <View 
          style={{height:80}}>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 0,
    fontFamily: 'Trebuchet MS',
    color: '#FDCE38',
    backgroundColor: '#090446',
    alignItems: 'center',
    justifyContent: 'center',
  },
  UVvalue: {
    flex: -1,
    fontSize: 328,
    borderColor: 'white',
    fontFamily: 'Trebuchet MS',
    borderWidth: 2,
    fontWeight: '900',
    color: '#052F5F', 
    textShadowColor: '#FDCE38',
    textShadowOffset: ( {width: 2 , height: 2} ),
    textShadowRadius: 1
  },
  location: {
    flex: 0,
    fontSize: 48,
    fontWeight: 'normal',
    fontFamily: 'Trebuchet MS',
    color: '#052F5F',
  },
  timeDate: {
    flex: 0,
    fontSize: 36,
    fontWeight: 'normal',
    fontFamily: 'Trebuchet MS',
    color: '#052F5F',
    marginBottom: 36,
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
    textShadowRadius: 1,
    padding: 6
  },
  textInput:{
    height: 60,
    fontSize: 24, 
    width: '75%', 
    color: 'white', 
    borderColor: '#052F5F', 
    borderWidth: 6
  }
});

//navigation stuff
const Navigation = createStackNavigator({
  home: App,
  about: About,
  where: Where
})



export default createAppContainer(Navigation);