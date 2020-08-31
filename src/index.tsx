import 'react-native-gesture-handler';

import React from 'react';
import { View, StatusBar } from 'react-native';

export const App: React.FC = () => (
    <>
      <StatusBar barStyle="light-content" backgroundColor="translucent" />
      <View style={{ flex:1, backgroundColor:'#312e38'}} />
    </>
);

