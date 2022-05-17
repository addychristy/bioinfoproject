import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export default class MathematicsAndStatisticsSyllabus extends Component {
  render() {
    return (
      <View style={styles.container}>
          <Text style={{fontFamily:'Algerian', fontSize:30, alignSelf:'center'}}>
              TOPICS COVERED UNDER THIS TOPIC :- 
          </Text>
      <Text style={{ fontSize:20, fontStyle:'bold', alignSelf:'center'}}>{'\n'}
      Introduction to probability and statistics, Conditional probability, Bayes' theorem,
      Random variable, Mathematical expectation, Probability distributions, Binomial,
      Multinomial, Poisson and normal distribution, Introduction and properties of 't',
      Chi-square and F distribution, Principles of random sampling, Frequency distributions,
      Graphical representations and Descriptive measures, Standard probability distributions,
      Correlation and regression analysis, Hypothesis testing, Markov models,
      Cluster analysis-Hierarchical and non-hierarchical methods, Coordinate geometry with basic concepts of 2D and 3D geometry,
      Vector algebra - Addition and Subtraction of vectors, Dot and cross product, Scalar triple product, Matrix algebra - basic definitions,
      Matrix operations, Transpose of a matrix, Inverse of matrix, Eigen values,
      Boolean algebra, Geometric, Arithmetic and harmonic progression
      </Text>
        <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('MathematicsAndStatistics')}>
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
