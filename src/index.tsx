import 'react-native-gesture-handler';
import './config/ReactotronConfig';

import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AppProvider from './hooks';

import Routes from './routes';

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="light-content" backgroundColor="#1F2F40" />
    <AppProvider>
      <View style={{ flex:1, backgroundColor:'#999'}} >
        <Routes />
      </View>
    </AppProvider>
  </NavigationContainer>
);

export default App;
