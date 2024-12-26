import React, { useState } from 'react';
import { StyleSheet, View, Text, Alert, StatusBar } from 'react-native';
import ScoreBoard from './ScoreBoard';

export default function App() {
  const [teamAScore, setTeamAScore] = useState(0);
  const [teamBScore, setTeamBScore] = useState(0);

  const handleScoreChange = (team, change) => {
    if (team === 'A') {
      const newScore = Math.max(0, teamAScore + change);
      setTeamAScore(newScore);
      if (newScore === 10) Alert.alert('Selamat!', 'Tim A menang!');
    } else if (team === 'B') {
      const newScore = Math.max(0, teamBScore + change);
      setTeamBScore(newScore);
      if (newScore === 10) Alert.alert('Selamat!', 'Tim B menang!');
    }
  };

  const resetScores = () => {
    setTeamAScore(0);
    setTeamBScore(0);
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#FFC0CB" barStyle="dark-content" />
      <Text style={styles.title}>-NajwaRisya 223510649-</Text>
      <Text style={styles.title}>Skor Pertandingan Futsal</Text>
      <ScoreBoard
        teamName="Tim A"
        score={teamAScore}
        onScoreChange={(change) => handleScoreChange('A', change)}
      />
      <ScoreBoard
        teamName="Tim B"
        score={teamBScore}
        onScoreChange={(change) => handleScoreChange('B', change)}
      />
      <Text style={styles.resetButton} onPress={resetScores}>
        Reset Pertandingan
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE4E1',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 75,
    color: '#FF69B4',
  },
  resetButton: {
    marginTop: 20,
    fontSize: 18,
    color: '#FF1493',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
});
