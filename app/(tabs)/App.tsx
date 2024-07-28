import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainPage from './MainPage';
import Diagnosis from './Diagnosis';
import InformationPage from './InformationPage';
import Recomendation from './Recomendation';
import { RootStackParamList } from './types';

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="MainPage">
        <Stack.Screen name="MainPage" component={MainPage} />
        <Stack.Screen name="Diagnosis" component={Diagnosis} />
        <Stack.Screen name="Recomendation" component={InformationPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
