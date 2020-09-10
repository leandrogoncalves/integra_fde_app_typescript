import React from 'react';
import { View } from 'react-native';
import { Picker as PickerNativeCommunity } from '@react-native-community/picker';
// import { Picker as PickerNativeBase } from "native-base";

// import { Container } from './styles';

const Picker: React.FC = ({children, ...rest}) => {
  return <PickerNativeCommunity {...rest} />;
}

export default Picker;
