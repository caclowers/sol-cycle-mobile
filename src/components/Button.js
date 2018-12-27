import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback, Platform } from 'react-native';

const Button = (props) => {
 const { onPress, title} = props;
if (Platform.OS === 'ios'){
   return (
   <TouchableOpacity 
   onPress={onPress}
   activeOpacity={0.75}
   >
   <View style={styles.button}>
     <Text style={styles.text}>{title}</Text>
   </View>
   </TouchableOpacity>
 ) 
};

return (
  <TouchableNativeFeedback onPress={onPress}>
    <View style={styles.button}>
     <Text style={styles.text}>{title}</Text>
   </View>
  </TouchableNativeFeedback>
)
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#052F5F',
    borderWidth: 1,
    borderColor: '#052F5F',
    marginTop: 25,
    width: "75%",
    padding: 20,
    borderRadius: 8
  },
  text: {
    textAlign: 'center',
    color: '#FDCE38',
    fontWeight: 'normal',
    fontSize: 24,
    fontFamily: 'Trebuchet MS',
  }
});

export default Button;