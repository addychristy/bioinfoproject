import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class AppHeader extends React.Component{
  render(){
    return(
      <View style= {styles.textContainer}>
        <Text style={styles.text}>B I O I F O R M A T I C S   T R I V I A</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer:{
  height:'10%',
  alignItems:'center',
  justifyContent:'center',
  backgroundColor:'rgba(4, 101, 181,.8)',
  paddingLeft:30,
  paddingRight:30,
 
  },
  text:{
    color:'white',
    fontSize:28,
    borderColor:'black',
  
    padding:20,
    paddingLeft:40,
    paddingRight:40,
    backgroundColor:'rgba(4, 101, 181,.4)',
    fontFamily:'algerian'
  }
});