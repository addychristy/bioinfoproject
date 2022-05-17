import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

// You can import from local files
import HomeScreen from './screens/HomeScreen';
import ConceptsInComputing from './screens/ConceptsInComputing';
import ProgrammingLanguages from './screens/ProgrammingLanguages';
import DatabaseSystemsAndBiologicalDatabases from './screens/DatabaseSystemsAndBiologicalDatabases'
import MathematicsAndStatistics from './screens/MathematicsAndStatistics';
import BiochemistryAndMolecularBiology from './screens/BiochemistryAndMolecularBiology';
import GenomicsAndProteomics from './screens/GenomicsAndProteomics';
import AnalyticalBioinformatics from './screens/AnalyticalBioinformatics';
import MolecularModelling from './screens/MolecularModelling';
import AlgorithmsAndDataStructures from './screens/AlgorithmsAndDataStructures';
import ConceptsInComputingSyllabus from './screens/ConceptsInComputingSyllabus';
import ProgrammingLanguagesSyllabus from './screens/ProgrammingLanguagesSyllabus';
import DatabaseSystemsAndBiologicalDatabasesSyllabus from './screens/DatabaseSystemsAndBiologicalDatabasesSyllabus';
import MathematicsAndStatisticsSyllabus from './screens/MathematicsAndStatisticsSyllabus';
import BiochemistryAndMolecularBiologySyllabus from './screens/BiochemistryAndMolecularBiologySyllabus';
import GenomicsAndProteomicsSyllabus from './screens/GenomicsAndProteomicsSyllabus';
import AnalyticalBioinformaticsSyllabus from './screens/AnalyticalBioinformaticsSyllabus';
import MolecularModellingSyllabus from './screens/MolecularModellingSyllabus';
import AlgorithmsAndDataStructuresSyllabus from './screens/AlgorithmsAndDataStructuresSyllabus';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer/>
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  ConceptsInComputing: ConceptsInComputing,
  ProgrammingLanguages: ProgrammingLanguages,
  DatabaseSystemsAndBiologicalDatabases: DatabaseSystemsAndBiologicalDatabases,
  MathematicsAndStatistics: MathematicsAndStatistics,
  BiochemistryAndMolecularBiology: BiochemistryAndMolecularBiology,
  GenomicsAndProteomics: GenomicsAndProteomics,
  AnalyticalBioinformatics: AnalyticalBioinformatics,
  MolecularModelling: MolecularModelling,
  AlgorithmsAndDataStructures: AlgorithmsAndDataStructures,
  ConceptsInComputingSyllabus:ConceptsInComputingSyllabus,
  ProgrammingLanguagesSyllabus:ProgrammingLanguagesSyllabus,
  DatabaseSystemsAndBiologicalDatabasesSyllabus:DatabaseSystemsAndBiologicalDatabasesSyllabus,
  MathematicsAndStatisticsSyllabus:MathematicsAndStatisticsSyllabus,
  BiochemistryAndMolecularBiologySyllabus:BiochemistryAndMolecularBiologySyllabus,
  GenomicsAndProteomicsSyllabus:GenomicsAndProteomicsSyllabus,
  AnalyticalBioinformaticsSyllabus:AnalyticalBioinformaticsSyllabus,
  MolecularModellingSyllabus:MolecularModellingSyllabus,
  AlgorithmsAndDataStructuresSyllabus:AlgorithmsAndDataStructuresSyllabus
});

const AppContainer = createAppContainer(AppNavigator);

