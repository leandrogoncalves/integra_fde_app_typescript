import React from 'react';
import { Alert } from 'react-native';
import { ListItem } from 'react-native-material-ui';
import { Container } from './styles';
import TopBar from '../../components/TopBar';

const Perfil: React.FC = () => {
  return (
    <Container>
      <TopBar title="Perfil" titleMarginLeft={60} />
      <ListItem
        divider
        dense
        leftElement="person-pin"
        centerElement={{
            primaryText: 'Leandro Gonçalves da Silva',
            secondaryText: 'DTI/GSI',
        }}
        onPress={() => Alert.alert('Perfil')}
      />
      <ListItem
        divider
        dense
        leftElement="message"
        centerElement={{
            primaryText: 'Mensagens',
        }}
        style={{
          container: {
            marginTop:10
          }
        }}
        onPress={() => Alert.alert('Mensagens')}
      />
      <ListItem
        divider
        dense
        leftElement="move-to-inbox"
        centerElement={{
            primaryText: 'Pedidos',
        }}
        onPress={() => Alert.alert('Pedidos')}
      />
      <ListItem
        divider
        dense
        leftElement="pin-drop"
        centerElement={{
            primaryText: 'Endereços',
        }}
        onPress={() => Alert.alert('Endereços')}
      />
      <ListItem
        divider
        dense
        leftElement="person"
        centerElement={{
            primaryText: 'Dados pessoais',
        }}
        onPress={() => Alert.alert('Dados pessoais')}
      />
    </Container>
  );
}

export default Perfil;
