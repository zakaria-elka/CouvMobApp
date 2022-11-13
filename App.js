/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {Fragment,useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  { Home } from './Components/Home';
import { Splash } from './Spalsh/splash';
import { Menu } from './Components/Menu/Menu';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

export default function App() {
  
  const Stack = createStackNavigator();
  

  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="SplashScreen" component={Splash} 
      options={{
       headerShown: false
          }} />
    <Stack.Screen name="HomeScreen" component={Home} 
      options={{
       headerShown: false
          }} />
    
    </Stack.Navigator>
  </NavigationContainer>
    )
  
}