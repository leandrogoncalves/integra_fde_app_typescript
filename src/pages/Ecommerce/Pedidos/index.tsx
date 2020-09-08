import React from 'react';
import { Text, Alert, TouchableOpacity, View } from 'react-native';
import TopBar from '../../../components/Layout/TopBar';
import Card from '../../../components/Layout/Card';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Solicitante from '../../../components/Ecommerce/Solicitante';
import { Container } from '../../../components/Layout/Container';
import { Title } from '../../../components/Typography/Title';
import ListItem from '../../../components/Layout/ListItem';

import {
  HorizontalDivider,
  ProductImage,
  ProductPrice,
  Subtotal,
  Continue,
  ContinueText,
  RemoveItem
} from './styles';


const Pedidos: React.FC = () => {
  return (
    <Container>
      <TopBar title="Pedido" titleMarginLeft={60} />

      <Solicitante />

      <Title>Detalhes</Title>
      <Card >
        <ListItem
          leftElement={
            <ProductImage>
              <Text style={{color:'white'}}>Foto</Text>
            </ProductImage>
          }
          centerElement={{
              primaryText: 'Nome do produto',
              secondaryText: 'Categoria',
          }}
          rightElement={
            <>
              <View>
                <ProductPrice>
                  R$ 199,00
                </ProductPrice>
                <TouchableOpacity onPress={() => {
                  Alert.alert(
                    'Confirmação',
                    'Deseja realmente remover este item',
                    [
                      {
                        text: "Ok",
                        onPress: () => Alert.alert('Produto removido com sucesso')
                      },
                      {
                        text: "Cancelar",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel"
                      },
                    ]
                    )
                  }
                }>
                  <RemoveItem>Remover</RemoveItem>
                </TouchableOpacity>
              </View>
            </>
          }
        />
         <HorizontalDivider />
        <ListItem
          leftElement={
            <ProductImage>
              <Text style={{color:'white'}}>Foto</Text>
            </ProductImage>
          }
          centerElement={{
              primaryText: 'Nome do produto',
              secondaryText: 'Categoria',
          }}
          rightElement={
            <>
            <View>
              <ProductPrice>
                R$ 199,00
              </ProductPrice>
              <TouchableOpacity onPress={() => {
                Alert.alert(
                  'Confirmação',
                  'Deseja realmente remover este item',
                  [
                    {
                      text: "Ok",
                      onPress: () => Alert.alert('Produto removido com sucesso')
                    },
                    {
                      text: "Cancelar",
                      onPress: () => console.log("Cancel Pressed"),
                      style: "cancel"
                    },
                  ]
                  )
                }
              }>
                <RemoveItem>Remover</RemoveItem>
              </TouchableOpacity>
            </View>
          </>
          }
        />
         <HorizontalDivider />
        <ListItem
          leftElement={
            <ProductImage>
              <Text style={{color:'white'}}>Foto</Text>
            </ProductImage>
          }
          centerElement={{
              primaryText: 'Nome do produto',
              secondaryText: 'Categoria',
          }}
          rightElement={
            <>
            <View>
              <ProductPrice>
                R$ 199,00
              </ProductPrice>
              <TouchableOpacity onPress={() => {
                Alert.alert(
                  'Confirmação',
                  'Deseja realmente remover este item',
                  [
                    {
                      text: "Ok",
                      onPress: () => Alert.alert('Produto removido com sucesso')
                    },
                    {
                      text: "Cancelar",
                      onPress: () => console.log("Cancel Pressed"),
                      style: "cancel"
                    },
                  ]
                  )
                }
              }>
                <RemoveItem>Remover</RemoveItem>
              </TouchableOpacity>
            </View>
          </>
          }
        />
         <HorizontalDivider />

         <ListItem
          centerElement={
            <Subtotal>
              Subtotal
            </Subtotal>
          }
          rightElement={
            <Subtotal>
              R$ 598,00
            </Subtotal>
          }
        />
      </Card>

      <Continue onPress={()=> {
        Alert.alert(
          'Confirmação',
          'Deseja finalizar a compra?',
            [
              {
                text: "Ok",
                onPress: () => Alert.alert('Compra finalizada com sucesso')
              },
              {
                text: "Cancelar",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
            ]
          )
      }}>
        <MaterialIcons name="navigate-next" size={25} color="white" />
        <ContinueText style={{marginLeft:10}}>
          Finalizar compra
        </ContinueText>
      </Continue>
    </Container>
  );
}

export default Pedidos;
