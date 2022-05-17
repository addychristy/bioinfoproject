import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export default class GenomicsAndProteomicsSyllabus extends Component {
  render() {
    return (
      <View style={styles.container}>
          <Text style={{fontFamily:'Algerian', fontSize:30, alignSelf:'center'}}>
              TOPICS COVERED UNDER THIS TOPIC :- 
          </Text>
      <Text style={{ fontSize:20, fontStyle:'bold', alignSelf:'center'}}>{'\n'}
      Whole genome analysis and comparative genomics, Classical ways of genome analysis,
      Large fragment genomic libraries, Physical mapping of genomes, Genome sequencing strategies,
      Sequence assembly and annotation, Exome sequencing, Genome structural and functional annotation,
      Functional genomics and proteomics, Mass spectrometry, Protein database and MS data analysis,
      Peptide identification and protein interface, Candidate gene identification, Metabolomics for elucidating metabolic pathways,
      Linkage analysis, Genotyping analysis, Applications of genomics and proteomics in agriculture,
      Evolution of sequencing technology, Microarrays analysis and applications,
      Next generation sequencing technologies, Sequencing by synthesis,
      Ligation, Single molecular sequencing, Emerging NGS technologies.
      </Text>
        <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('GenomicsAndProteomics')}>
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
