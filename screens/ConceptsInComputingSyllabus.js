import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export default class ConceptsInComputingSyllabus extends Component {
  render() {
    return (
      <View style={styles.container}>
          <Text style={{fontFamily:'Algerian', fontSize:30, alignSelf:'center'}}>
              TOPICS COVERED UNDER THIS TOPIC :- 
          </Text>
      <Text style={{ fontSize:20, fontStyle:'bold', alignSelf:'center'}}>{'\n'}Fundamentals of computing, Introduction to operating systems, WINDOWS, 
      UNIX/Linux operating systems, Batch processing, Multi-programmed batch system,
      Time sharing system, Distributed system, Real time system, Dead lock, CPU scheduling 
      Computer security, Computer graphics, Visualization techniques,
      Interactive graphics, Viewing in three dimension, Raster algorithms, Rendering, 
      Animation, Image processing with emphasis on biological systems, Computer networking 
      Security of the network, Fire-walls, Network, Network topology and architecture, 
      Hierarchical networks, TCP/IP family of protocols, Parallel and high performance computing, 
      Cloud computing
      </Text>
        <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('ConceptsInComputing')}>
              <Text style={{ fontSize:20, color:"black"}}>Go to Quiz</Text>
        </TouchableOpacity>
        <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('HomeScreen')}>
              <Text style={{ fontSize:20, color:"black"}}>Go back</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
    backgroundColor:'lavender',
    border:'solid skyblue 7px',
    padding:30,
  },
    buttons: {
    backgroundColor:'pink',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    margin: 10,
    width: 160,
    height: 50,
  }
});
