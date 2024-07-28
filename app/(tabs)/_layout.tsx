import React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { Link } from 'expo-router';
import Index from './index';  // Adjust the path as needed
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainPage from './MainPage';
import Diagnosis from './Diagnosis'; // Ensure Diagnosis component is imported
import { RootStackParamList } from './types';
const Stack = createStackNavigator<RootStackParamList>();

export default function MainComponent() {
  const colorScheme = useColorScheme();

  return (
    <Index/>
    // <NavigationContainer independent={true}>
    //   <Stack.Navigator initialRouteName="MainPage">
    //     <Stack.Screen name="MainPage" component={MainPage} />
    //     <Stack.Screen name="Diagnosis" component={Diagnosis} /> {/* Add Diagnosis screen here */}
    //   </Stack.Navigator>
    // </NavigationContainer>  
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
