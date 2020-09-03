import React from 'react';
import { TextInput, TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-material-ui';
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { Container } from './styles';

const HistoricoBusca: React.FC = () => {
  const { goBack } = useNavigation();

  return (
    <Container>
      <ListItem
        divider
        leftElement={
          <>
            <TouchableOpacity onPress={() => goBack()}>
              <MaterialIcons name="keyboard-backspace" size={24} color="gray" />
            </TouchableOpacity>
          </>
        }
        centerElement={
          <TextInput placeholder="Buscar" />
        }
      />
    </Container>
  );
}

export default HistoricoBusca;
