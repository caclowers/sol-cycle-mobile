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
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'cornflowerblue',
    marginTop: 25,
    width: 300,
    padding: 20,
    borderRadius: 8
  },
  text: {
    textAlign: 'center',
    color: 'cornflowerblue',
    fontWeight: 'normal',
    fontSize: 20
  }
});

export default Button;