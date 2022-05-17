import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export default class AnalyticalBioinformaticsSyllabus extends Component {
  render() {
    return (
      <View style={styles.container}>
          <Text style={{fontFamily:'Algerian', fontSize:30, alignSelf:'center'}}>
              TOPICS COVERED UNDER THIS TOPIC :- 
          </Text>
      <Text style={{ fontSize:20, fontStyle:'bold', alignSelf:'center', alignItems:'center'}}>{'\n'}
      Bioinformatics- introduction, Origin and history, Applications of bioinformatics in agriculture,
      Information retrieval from biological databases, Analysis of protein and nucleotide sequences,
      Basic concepts of sequence similarity, Introduction to sequences alignments- local and global alignment,
      Pairwise and multiple sequence alignment, Dynamic programming- Needleman and Wunsch, Smith-Waterman algorithm,
      Scoring matrices- PAM and BLOSUM, Motifs and patterns, Phylogenetic analysis,
      Types of phylogenetic trees, Tree-building methods, Character-based and distance-based methods,
      Maximum likelihood, Maximum parsimony, Unweighted pair group method with arithmetic mean (UPGMA), 
      Neighbour joining (NJ), Fitch-Margoliash (FM), Minimum evolution (ME), Tree evaluation,
      Bootstrapping, Introduction to systems and network biology.
      </Text>
        <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('AnalyticalBioinformatics')}>
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
