import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { DiagnosisNavigationProp, TreatmentType } from './types';

const decisionTree = {
  0: {
    content: 'מה סוג הפציעה?',
    options: [
      { text: 'פיזית', nextStep: 1 },
      { text: 'נפשית', nextStep: null, treatmentType: TreatmentType.Anxiety },
    ],
  },
  1: {
    content: 'האם האדם נפגע מגורם חיצוני?',
    options: [
      { text: 'כן', nextStep: 2 },
      { text: 'לא', nextStep: 4 },
    ],
  },
  2: {
    content: 'האם איזור הפציעה מדמם?',
    options: [
      { text: 'כן', nextStep: 3 },
      { text: 'לא', nextStep: null, treatmentType: TreatmentType.Burns },
    ],
  },
  3: {
    content: 'מה מקור הדימום?',
    options: [
      { text: 'ידיים / רגליים', nextStep: null, treatmentType: TreatmentType.Het },
      { text: 'בטן / גב / ראש', nextStep: null, treatmentType: TreatmentType.Het },
    ],
  },
  4: {
    content: 'האם האדם בהכרה?',
    options: [
      { text: 'כן', nextStep: 5 },
      { text: 'לא', nextStep: 7 },
    ],
  },
  5: {
    content: 'האם יש פריחה / אודם / נפיחות?',
    options: [
      { text: 'כן', nextStep: null, treatmentType: TreatmentType.Allergies },
      { text: 'לא', nextStep: 6 },
    ],
  },
  6: {
    content: 'האם סובל מכאבים / אי נוחות?',
    options: [
      { text: 'כן', nextStep: null, treatmentType: TreatmentType.ChestPains },
      { text: 'לא', nextStep: null, treatmentType: TreatmentType.Stroke },
    ],
  },
  7: {
    content: 'האם האדם נושם?',
    options: [
      { text: 'כן', nextStep: 8 },
      { text: 'לא', nextStep: null, treatmentType: TreatmentType.CPR },
    ],
  },
  8: {
    content: 'האם האדם מניע גפיים ללא שליטה / האישונים סוטים הצידה?',
    options: [
      { text: 'כן', nextStep: null, treatmentType: TreatmentType.Siezures },
      { text: 'לא', nextStep: null, treatmentType: TreatmentType.Fainting },
    ],
  }
};

interface DiagnosisProps {
  navigation: DiagnosisNavigationProp;
}

const Diagnosis: React.FC<DiagnosisProps> = ({ navigation }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleOptionPress = (nextStep: number | null, treatmentType?: TreatmentType) => {
    if (nextStep !== null) {
      setCurrentStep(nextStep);
    } else if (treatmentType !== undefined) {
      navigation.navigate('Recomendation', { treatmentType });
    }
  };

  const { content, options } = decisionTree[currentStep];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{content}</Text>
      <View style={styles.buttonContainer}>
        {options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.button,
              { backgroundColor: index % 2 === 0 ? '#F94449' : '#658354' }
            ]}
            onPress={() => handleOptionPress(option.nextStep, option.treatmentType)}
          >
            <Text style={styles.buttonText}>{option.text}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DFEBEB', // Beige background
    padding: 20,
  },
  header: {
    fontSize: 24, // Bigger font size
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 20,
    textAlign: 'center',
    padding: 10,
    //backgroundColor: '#e0e0e0',
    borderRadius: 10,
  },
  buttonContainer: {
    flexDirection: 'column',
    marginTop: 20,
    alignItems: 'center',
  },
  button: {
    width: 200,
    height: 50,
    borderRadius: 25, // Make the buttons elliptical
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Diagnosis;