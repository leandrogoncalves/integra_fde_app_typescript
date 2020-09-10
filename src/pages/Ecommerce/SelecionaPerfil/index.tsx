import React, { useState } from "react";
import { View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-simple-toast';

import TopBar from '../../../components/Layout/TopBar';
import { Container } from '../../../components/Layout/Container';
import { Title } from '../../../components/Typography/Title';
import Card from '../../../components/Layout/Card';
import Button from "../../../components/Forms/Button";
import { Picker } from '@react-native-community/picker';
import { styles } from '../../../components/Forms/Picker/styles';

const SelecionaPerfil: React.FC = () => {
  const { navigate } = useNavigation();
  const [perfilSelected, setPerfilSelected] = useState("");
  const [escolaSelected, setEscolaSelected] = useState("");

  const perfis = [
    {
      label: 'Perfil...',
      value: '',
    },
    {
      label: 'Solicitante - Escola',
      value: 'esc',
    },
    {
      label: 'Solicitante - FDE',
      value: 'fde',
    },
  ]

  const escolas = [
    {
      label: 'Escola...',
      value: ''
    },
    {
      label: 'ABILIO RAPOSO FERRAZ JUNIOR',
      value: '4337'
    },
    {
      label: 'ADA CARIANI AVALONE PROFA',
      value: '5058'
    },
    {
      label: 'ADAIL JARBAS DUCLOS',
      value: '3484'
    },
    {
      label: 'ADALBERTO MECCA SAMPAIO PROFESSOR',
      value: '4906'
    },
    {
      label: 'ADALGISA CAVEZZALE DE CAMPOS PROFA',
      value: '2555'
    },
    {
      label: 'ADAMASTOR BAPTISTA PROF',
      value: '655'
    },
    {
      label: 'ADELMO FRANCISCO DA SILVA',
      value: '4006'
    },
    {
      label: 'ADERVAL DA SILVA PROF',
      value: '4359'
    },
    {
      label: 'ADOLPHO THOMAS DE AQUINO',
      value: '1835'
    },
    {
      label: 'ADONIAS FILHO',
      value: '9013'
    },
    {
      label: 'AFONSO CAFARO',
      value: '2154'
    },
  ];

  const perfilValidate = () => {

    if (!perfilSelected) {
      Toast.showWithGravity(
        "Selecione um perfil",
        Toast.LONG,
        Toast.TOP,
      )

      return;
    }

    if (!escolaSelected) {
      Toast.showWithGravity(
        "Selecione uma escola",
        Toast.LONG,
        Toast.TOP,
      )

      return;
    }

    navigate('EcommerceRoutes', {screen: 'BottomTabsRoutes'});
  }

  return (
    <Container>
      <TopBar title="E-commerce" iconBack={true} />
      <Title>
        Selecione seu perfil:
      </Title>
      <Card>
        <View style={styles.picker} >
          <Picker
            placeholder="Perfil..."
            selectedValue={perfilSelected}
            onValueChange={(itemValue, itemIndex) => setPerfilSelected(itemValue)}
          >
            {perfis.map((perfil)=>(
              <Picker.Item key={perfil.value} label={perfil.label} value={perfil.value} />
            ))}
          </Picker>
        </View>

        <View style={styles.picker}>
          <Picker
            selectedValue={escolaSelected}
            onValueChange={(itemValue, itemIndex) => setEscolaSelected(itemValue)}
          >
            {escolas.map((escola)=>(
              <Picker.Item key={escola.value} label={escola.label} value={escola.value} />
            ))}
          </Picker>
        </View>

        <View  style={{marginTop:20}}>
          <Button
            title="Continuar"
            onPress={() => perfilValidate()}
          />
        </View>
      </Card>
    </Container>
  );
}

export default SelecionaPerfil;
