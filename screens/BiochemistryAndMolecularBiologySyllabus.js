import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export default class BiochemistryAndMolecularBiologySyllabus extends Component {
  render() {
    return (
      <View style={styles.container}>
          <Text style={{fontFamily:'Algerian', fontSize:30, alignSelf:'center'}}>
              TOPICS COVERED UNDER THIS TOPIC :- 
          </Text>
      <Text style={{ fontSize:20, fontStyle:'bold', alignSelf:'center'}}>{'\n'}
      Scope and importance of biochemistry in agriculture, Hydrophobic, Electrostatic and van der waals forces,
      General introduction to physical techniques for determination of structure of biopolymers,
      Historical developments in molecular biology, Nucleic acids as genetic material,
      Genetic code, Genome organization and regulation in prokaryotes and eukaryotes,
      DNA replication, Transcription and translation, Recombinant DNA technology,
      Site directed mutagenesis, Molecular mechanism of mutation, RNA editing,
      RNA processing, Structure, Properties and functions of amino acids, Proteins,
      Nucleic acids, Anatomy of proteins - Secondary structures, Motifs, Domains,
      Tertiary and quaternary structures, Classification of protein topologies, Helices and sheets,
      Helix-coil theory, Conformation of polypeptides and side chains, Ramachandran plot,
      Hinge motions in proteins, Algorithms in predicting secondary structure of proteins,
      Chau-Fasman algorithm, The protein folding energy landscape, Molten globules, Enzymes and folding pathways
      </Text>
        <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('BiochemistryAndMolecularBiology')}>
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
