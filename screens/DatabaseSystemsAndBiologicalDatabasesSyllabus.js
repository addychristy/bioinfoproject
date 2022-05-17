import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export default class DatabaseSystemsAndBiologicalDatabasesSyllabus extends Component {
  render() {
    return (
      <View style={styles.container}>
          <Text style={{fontFamily:'Algerian', fontSize:30, alignSelf:'center'}}>
              TOPICS COVERED UNDER THIS TOPIC :- 
          </Text>
      <Text style={{ fontSize:20, fontStyle:'bold', alignSelf:'center'}}>{'\n'}
      Definition, Purpose of database system, Advantages of databases system, Components of database system, 
      Data models-relational, Network, Hierarchical, Three level architecture for database system, 
      Internal, Conceptual and external levels, Data independence, 
      Data abstraction, Mapping, Data definition language, Data manipulation language, 
      Role of schemas, Client/server architecture, Relational databases, 
      Relational data models (binary,ternary,quaternary and n-ary relations),
      Important terms in relational database system, Primary and secondary keys, 
      Structured query language, Primary, Secondary and derived biological databases,
      Submitting sequence to the database and retrieval, Data mining and knowledge discovery in biological databases,
      Supervised and unsupervised learning, Machine learning techniques,
      Artificial neural network, Support vector machine and Genetic algorithms
      </Text>
        <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('DatabaseSystemsAndBiologicalDatabases')}>
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
