import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export default class AlgorithmsAndDataStructuresSyllabus extends Component {
  render() {
    return (
      <View style={styles.container}>
          <Text style={{fontFamily:'Algerian', fontSize:30, alignSelf:'center'}}>
              TOPICS COVERED UNDER THIS TOPIC :- 
          </Text>
      <Text style={{ fontSize:20, fontStyle:'bold', alignSelf:'center'}}>{'\n'}
      Algorithms and complexity, Iterative and recursive algorithms, Fast versus slow algorithms,
      Big-O notation, Algorithm design and analysis techniques, Greedy algorithms,
      Randomized algorithms, Divide and conquer approach, Searching and sorting algorithms,
      Linear and non-linear data structure, Stack, Queues, Linked list,
      Trees-terminologies, Binary trees, Tree traversal (pre-order, in-order, post-order), AVL trees,
      Graph theory, Depth-first search and Breadth-first search algorithms, Shortest superstring problem
      </Text>
        <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('AlgorithmsAndDataStructures')}>
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
