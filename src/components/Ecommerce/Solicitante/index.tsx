import React from 'react';
import { View, Text } from 'react-native';
import { Colors } from '../../../config/ColorsConfig';
import ListItem from '../../Layout/ListItem';

// import { Container } from './styles';

const Solicitante: React.FC = () => {
  return (
    <ListItem
      divider
      dense
      title= 'Leandro Gonçalves da Silva'
      subtitle= 'Solicitante - EE Mario de Toledo'
      rightElement={
        <>
          <View style={{paddingRight:10}}>
            <Text style={{color: Colors.highlight.primary }}>
              Saldo:
            </Text>
            <Text style={{color: Colors.highlight.primary }}>
              R$2000,00
            </Text>
          </View>
        </>
      }
      style={{
          marginBottom: 5
      }}
    />

  );
}

export default Solicitante;
