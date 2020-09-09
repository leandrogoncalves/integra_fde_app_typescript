import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';

import { Picker } from '@react-native-community/picker';
import TopBar from '../../../components/Layout/TopBar';
import { Title } from '../../../components/Typography/Title';
import Card from '../../../components/Layout/Card';
import Button from "../../../components/Forms/Button";

import { Container } from './styles';

const SelecionaPerfil: React.FC = () => {
  const { navigate } = useNavigation();
  const [selectedValue, setSelectedValue] = useState("");

  return (
    <Container>
      <TopBar title="E-commerce" iconBack={true} />
      <Title>
        Selecione seu perfil:
      </Title>
      <Card>
        <Picker
          selectedValue={selectedValue}
          style={{ height: 50 }}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="Perfil... " value="" />
          <Picker.Item label="Administrativo" value="adm" />
          <Picker.Item label="Solicitante - Escola" value="esc" />
          <Picker.Item label="Solicitante - FDE" value="fde" />
        </Picker>

        <Picker
          selectedValue={selectedValue}
          style={{ height: 50 }}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="Escola... " value="" />
          <Picker.Item label="Administrativo" value="adm" />
          <Picker.Item label="Solicitante - Escola" value="esc" />
          <Picker.Item label="Solicitante - FDE" value="fde" />
        </Picker>

        <Button
          title="Continuar"
          onPress={() =>navigate('EcommerceRoutes', {screen: 'BottomTabsRoutes'})}
        />
      </Card>
    </Container>
  );
}

export default SelecionaPerfil;
