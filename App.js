import React from 'react';
import { StatusBar, StyleSheet, Text, TextInput, View, ScrollView, Image, ImageBackground, ReactPropTypes } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import axios from 'axios';
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
  
  handleChangeFor = propertyName => (event) => {
    this.setState({
      ...this.state,
      [propertyName]: event.target.value,
    })
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
            4
        </Text>
        <Text 
          style={styles.location}>
            {this.state.city}, State
        </Text>
        <Text 
          style={styles.timeDate}>
            time and date
        </Text> 
        <TextInput 
          style={styles.textInput}
          onChangeText={this.handleChangeFor('city')}
          // onChangeText={(text) => this.setState({
          //   ...this.state,
          //   this.state.city = {text}
          // })}
          value='City'/>
        <TextInput style={styles.textInput}
          onChangeText={(text) => this.setState({text})}
          value='State'/>
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
    height: 60,
    fontSize: 24, 
    width: '85%', 
    color: '#FDCE38', 
    borderColor: '#052F5F', 
    borderWidth: 2,
    borderRadius: 12,
    marginTop: 6,
    flex: 0,
    textAlign: 'center',
    justifyContent: 'center',
  }
});

//navigation stuff
const Navigation = createStackNavigator({
  home: App,
  about: About,
  where: Where
})



export default createAppContainer(Navigation);