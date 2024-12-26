import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function ScoreBoard({ teamName, score, onScoreChange }) {
  return (
    <View style={styles.scoreBoard}>
      <Text style={styles.teamName}>{teamName}</Text>
      <Text style={styles.score}>{score}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.incrementButton]}
          onPress={() => onScoreChange(1)}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.decrementButton]}
          onPress={() => onScoreChange(-1)}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  scoreBoard: {
    alignItems: 'center',
    marginBottom: 20,
  },
  teamName: {
    fontSize: 20,
    color: '#FF69B4',
    marginBottom: 10,
  },
  score: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#FF1493',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  button: {
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
  },
  incrementButton: {
    backgroundColor: '#FF69B4',
  },
  decrementButton: {
    backgroundColor: '#FFB6C1',
  },
  buttonText: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
