import React, { FC } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { RecomendationRouteProp } from './types';

interface RecomendationProps {
    route: RecomendationRouteProp;
  }

const Recomendation: FC<RecomendationProps> = ({ route }) => {
    const { treatmentType } = route?.params;

  return (
    <View style={styles.container}>
      <Text style={styles.userName}>{treatmentType}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: 'center',
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  buttonContainer: {
    width: '100%',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 12,
    borderRadius: 5,
    marginHorizontal: 4,
    alignItems: 'center',
    marginVertical: 16,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default Recomendation;
