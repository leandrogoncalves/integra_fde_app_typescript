import React from 'react';
import { TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { Container } from '../../../components/Layout/Container';
import ListItem from '../../../components/Layout/ListItem';

const HistoricoBusca: React.FC = () => {
  const { goBack } = useNavigation();

  return (
    <Container>
      <ListItem
        divider
        margin={{top:10, bottom:0}}
        padding={{bottom: 0}}
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
