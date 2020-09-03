import React from 'react';
import { Text, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Card } from 'react-native-material-ui';
import TopBar from '../../../../components/TopBar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Solicitante from '../../../../components/Solicitante';

import {
  Container,
  ProductContainer,
  ProductGalery,
  ProductText,
  ProductName,
  ProductCategory,
  ProductShortDescription,
  ProductPrice,
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
          <ProductGalery>
            <Text style={{color:'white', fontSize:20}}>Galeria de fotos</Text>
          </ProductGalery>
          <ProductText>
            <ProductName>
              <Ionicons name="bookmark" size={15} />
                Nome do produto
            </ProductName>
            <ProductCategory>
              <FontAwesome name="certificate" size={15} style={{marginRight:10}} />
              Categoria
            </ProductCategory>
            <ProductShortDescription>
              Descrição curta dsa dsa fdsa fds afds afd afdsa fds afds fas dfa fdsa
            </ProductShortDescription>
            <ProductPrice>
              <MaterialCommunityIcons name="tag" size={18} style={{marginRight:10}} />
              R$ 199,00
            </ProductPrice>
          </ProductText>

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
