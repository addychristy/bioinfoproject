import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Header,
  Image,
  ImageBackground
} from 'react-native';

import AppHeader from '../components/AppHeader';

import Menuitem from '../components/Menuitems';

export default class HomeScreen extends Component {
constructor(){
  super();  
}

render() {
  return (
  <View>
     <AppHeader />
    <View>
      <ImageBackground
      source={require("../assets/images/bg1.gif")}
      style={styles.backgroundImage}>
     
      <View style={styles.menuContainer}>
        <Menuitem itemImage={require('../assets/images/logo.png')}/>
        <Menuitem itemImage={require('../assets/images/quiz_time.gif')}/>
        <Menuitem itemImage={require('../assets/images/deptlogo.jpg')}/>
      </View>
        <View style={styles.buttonsContainer}>  
        <View>
          <Image
              source={require('../assets/images/happy_brain.gif')}
              style={{width:200, height:200, alignSelf:'center'}}>
          </Image>
        </View>
           
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('ConceptsInComputingSyllabus')}>
              <Text style={{ fontSize:12, color:"black",fontWeight:'bold', textAlign:'center'}}>Concepts In Computing</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('ProgrammingLanguagesSyllabus')}>
              <Text style={{ fontSize:12, color:"black",fontWeight:'bold', textAlign:'center'}}>Programming Languages</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('DatabaseSystemsAndBiologicalDatabasesSyllabus')}>
              <Text style={{ fontSize:12, color:"black",fontWeight:'bold', textAlign:'center'}}>Database Systems And Biological Databases</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('MathematicsAndStatisticsSyllabus')}>
              <Text style={{ fontSize:12, color:"black",fontWeight:'bold', textAlign:'center'}}>Mathematics And Statistics</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('BiochemistryAndMolecularBiologySyllabus')}>
              <Text style={{ fontSize:12, color:"black",fontWeight:'bold', textAlign:'center'}}>Biochemistry And Molecular Biology</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('GenomicsAndProteomicsSyllabus')}>
              <Text style={{ fontSize:12, color:"black",fontWeight:'bold', textAlign:'center'}}>Genomics And Proteomics</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('AnalyticalBioinformaticsSyllabus')}>
              <Text style={{ fontSize:12, color:"black",fontWeight:'bold', textAlign:'center'}}>Analytical Bioinformatics</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('MolecularModellingSyllabus')}>
              <Text style={{ fontSize:12, color:"black",fontWeight:'bold', textAlign:'center'}}>Molecular Modelling</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('AlgorithmsAndDataStructuresSyllabus')}>
              <Text style={{ fontSize:12, color:"black",fontWeight:'bold', textAlign:'center'}}>Algorithms And Data Structures</Text>
            </TouchableOpacity>
          
          
          </View>
          </ImageBackground>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonsContainer: {
    alignSelf: 'center',
    marginTop: 50,
    backgroundColor:'rgba(147,243,245,.4)',
    paddingHorizontal:10,
    paddingVertical:20,
    border:'double lavender 10px',
    
  },
  backgroundImage: {
    flex: 1,
    width:'fill',
    height:'120%'
  },
  buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 4,
    borderRadius: 15,
    margin: 10,
    width: 200,
    height: 50,
    backgroundColor:'white',
    backgroundColor:'rgba(223,171,237,.4)',
    border:"solid lavender",
  },
  titleBar: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuContainer:{
    height:'20%',
    flexDirection:'row',
    flexWrap:'nowrap',

  }
  
});