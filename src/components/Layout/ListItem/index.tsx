import React from 'react';
import { View } from 'react-native';
import { ListItem as MaterialListItem } from 'react-native-material-ui';

// import { Container } from './styles';

const ListItem: React.FC = (...rest) => {
  return (
    <MaterialListItem {...rest} />
  );
}

export default ListItem;
