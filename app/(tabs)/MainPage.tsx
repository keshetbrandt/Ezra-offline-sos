import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { TreatmentType, UserProfileNavigationProp } from './types'; // Adjust the import path accordingly

interface MainPageProps {
  navigation: UserProfileNavigationProp;
}

const MainPage: React.FC<MainPageProps> = ({ navigation }) => {
  const navigateToRecommendation = (treatmentType: TreatmentType) => {
    navigation.navigate('Recomendation', { treatmentType });
  };

  const navigateToDiagnosis = () => {
    navigation.navigate('Diagnosis');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.userName}>{'מצבי חירום נפוצים'}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigateToRecommendation(TreatmentType.Anxiety)}>
          <Text style={styles.buttonText}>דימום פורץ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigateToRecommendation(TreatmentType.Bleeden)}>
          <Text style={styles.buttonText}>עילפון</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigateToRecommendation(TreatmentType.ShortnessOfBreath)}>
          <Text style={styles.buttonText}>חרדה</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={[styles.button, styles.bottomButton, {backgroundColor: '#F94449'}]} onPress={() => navigateToDiagnosis()}>
        <Text style={styles.bottomButtonText}>אבחון</Text>
      </TouchableOpacity>
      <View>
        <Text style={styles.disclaimerText}>* המידע באפליקציה אינו מהווה תחליף להתייעצות עם גורם רפואי</Text>
      </View>
      <View style={styles.circleButtonContainer}>
        <TouchableOpacity style={styles.circleButton1}>
          <Text style={styles.circleButtonText}>איפה דפי</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.circleButton2}>
          <Text style={styles.circleButtonText}>101</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.circleButton3}>
          <Text style={styles.circleButtonText}>מפה</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DFEBEB',
    padding: 16,
    alignItems: 'center',
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    fontFamily: 'Noto Sans Hebrew',
  },
  buttonContainer: {
    width: '100%',
  },
  button: {
    backgroundColor: '#3179B8',
    padding: 12,
    borderRadius: 5,
    marginHorizontal: 4,
    alignItems: 'center',
    marginVertical: 16,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Noto Sans Hebrew',
  },
  bottomButton: {
    height: 100,
    width: 300,
  },
  bottomButtonText: {
    fontSize: 50,
    alignItems: 'center',
    alignContent: 'center',
  },
  disclaimerText: {
    fontSize: 14,
    color: '#000000',
    textAlign: 'center',
    marginVertical: 20,
    fontFamily: 'Noto Sans Hebrew',
  },
  circleButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    position: 'absolute',
    bottom: 30,
  },
  circleButton1: {
    backgroundColor: '#89CFEF',
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleButton2: {
    backgroundColor: '#89CFEF',
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleButton3: {
    backgroundColor: '#89CFEF',
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontFamily: 'Noto Sans Hebrew',
  },
});

export default MainPage;
