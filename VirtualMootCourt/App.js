import React from 'react';
import Navigator from './src-app/ui/nav/Navigation';
import AdminHomeScreen from './src-app/ui/screens/AdminHome';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    //<Navigator />
    <PaperProvider>
    <Navigator />
    </PaperProvider>
  )
}

export default App;