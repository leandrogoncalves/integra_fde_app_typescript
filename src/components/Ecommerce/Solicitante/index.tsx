import React from 'react';
import { View, Text } from 'react-native';
import { ListItem } from 'react-native-material-ui';
import { Colors } from '../../../config/ColorsConfig';

// import { Container } from './styles';

const Solicitante: React.FC = () => {
  return (
    <ListItem
      divider
      dense
      centerElement={{
        primaryText: 'Leandro Gonçalves da Silva',
        secondaryText: 'Solicitante - EE Mario de Toledo',
      }}
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
        container: {
          marginBottom: 5
        }
      }}
    />

  );
}

export default Solicitante;
