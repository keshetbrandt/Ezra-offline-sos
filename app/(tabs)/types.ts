import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

export type RootStackParamList = {
  MainPage: undefined;
  Diagnosis: undefined;
  Recomendation: { treatmentType: TreatmentType };
};

// Define TreatmentType enum
export enum TreatmentType {
    Anxiety = 'Anxiety',
    Gunshot = 'Gunshot',
    ShortnessOfBreath = 'ShortnessOfBreath',
    Bleeden = 'Bleeden',
    Burns = 'Burns',
    CPR = 'CPR',
    Fainting = 'Fainting',
    Siezures = 'Seizures',
    Stroke = 'Stroke',
    Choke = 'Choke',
    ChestPains = 'ChestPains',
    Allergies = 'Allergies',
    Het = 'Het'
  }

export type UserProfileNavigationProp = StackNavigationProp<RootStackParamList, 'MainPage'>;
export type RecomendationRouteProp = RouteProp<RootStackParamList, 'Recomendation'>;

