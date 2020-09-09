import React from 'react';
import { Text, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Solicitante from '../../../../components/Ecommerce/Solicitante';
import { Container } from '../../../../components/Layout/Container';
import Card from '../../../../components/Layout/Card';
import ProductItem from '../../../../components/Ecommerce/ProductItem';

import {
  ProductContainer,
  AddToCart,
  AddToCartText
} from './styles';


const ProdutoGeral: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <Container>

      <Solicitante />

      <ScrollView
          keyboardShouldPersistTaps="handled"
        >
      <Card>
        <ProductContainer>

         <ProductItem
            name="Nome do produto 1"
            category="Categoria"
            shotDescription="Descrição curta dsa dsa fdsa fds afds afd afdsa fds afds fas dfa fdsa"
            price="199,00"
          />

          <AddToCart onPress={()=> {
            Alert.alert(
              'Confirmação',
              'Deseja adicionar a sacola?',
                [
                  {
                    text: "Ok",
                    onPress: () => navigate('Pedidos')
                  },
                  {
                    text: "Cancelar",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                  },
                ]
              )
          }}>
            <FontAwesome name="shopping-bag" size={25} color="white" />
            <AddToCartText style={{marginLeft:10}}>
              Adicionar a sacola
            </AddToCartText>
          </AddToCart>

        </ProductContainer>
      </Card>
      </ScrollView>
    </Container>
  )
}

export default ProdutoGeral;
