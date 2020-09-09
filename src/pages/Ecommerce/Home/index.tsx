import React from 'react';
import { Text, ScrollView, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Foundation from 'react-native-vector-icons/Foundation';

import Solicitante from '../../../components/Ecommerce/Solicitante';
import TopBar from '../../../components/Layout/TopBar';
import { Container } from '../../../components/Layout/Container';
import { Title } from '../../../components/Typography/Title';
import { HorizontalDivider } from '../../../components/Layout/HorizontalDivider';
import { VerticalDivider } from '../../../components/Layout/VerticalDivider';
import Card from '../../../components/Layout/Card';
import ProductCategoryIcon from '../../../components/Ecommerce/ProductCategoryIcon';
import ProductItemMini from '../../../components/Ecommerce/ProductItemMini';

import {
  ProductContainer,
  SeeMore,
  SeeMoreText,
} from './styles';


const Home: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <Container >
      <TopBar title="Início" iconExit={true} />

      <Solicitante />

      <ScrollView
          keyboardShouldPersistTaps="handled"
        >

        {/* Categorias */}
        <Card >

          <Title>
            Categorias
          </Title>

          <HorizontalDivider />

          <ScrollView horizontal={true}>

            <ProductCategoryIcon
              route="DrawerMenuBusca"
              name="restaurant"
              text="Alimentação"
             />

            <ProductCategoryIcon
              route="DrawerMenuBusca"
              iconComponent={
                <MaterialCommunityIcons name="broom" color="white" size={30} />
              }
              text="Higiene e Limpeza"
              />

            <ProductCategoryIcon
              route="DrawerMenuBusca"
              iconComponent={
                <MaterialCommunityIcons name="chair-rolling" color="white" size={30} />
              }
              text="Mobiliário"
             />

            <ProductCategoryIcon
              route="DrawerMenuBusca"
              iconComponent={
                <MaterialCommunityIcons name="power-plug" color="white" size={30} />
              }
              text="Equipamentos"
              />

            <ProductCategoryIcon
              route="DrawerMenuBusca"
              iconComponent={
                <Foundation name="page" color="white" size={30} />
              }
              text="Papelaria"
              />

            <ProductCategoryIcon
              route="DrawerMenuBusca"
              iconComponent={
                <MaterialIcons name="computer" color="white" size={30} />
              }
              text="Informática"
             />

          </ScrollView>

        </Card>

        {/* Produtos em destaque */}
        <Card >

          <Title>
            Produtos em destaque
          </Title>

          <HorizontalDivider />

          {/* Linha de produtos */}
          <ProductContainer>

            <ProductItemMini
              name="Nome do produto 1"
              category="Categoria"
              shotDescription="Descrição curta dsa dsa fdsa fds afds afd afdsa fds afds fas dfa fdsa"
              price="199,00"
            />

            <VerticalDivider />

            <ProductItemMini
              name="Nome do produto"
              category="Categoria"
              shotDescription="Descrição curta dsa dsa fdsa fds afds afd afdsa fds afds fas dfa fdsa"
              price="199,00"
            />

          </ProductContainer>

          <HorizontalDivider />

          {/* Linha de produtos */}
          <ProductContainer>

            <ProductItemMini
              name="Nome do produto"
              category="Categoria"
              shotDescription="Descrição curta dsa dsa fdsa fds afds afd afdsa fds afds fas dfa fdsa"
              price="199,00"
            />

            <VerticalDivider />

            <ProductItemMini
              name="Nome do produto"
              category="Categoria"
              shotDescription="Descrição curta dsa dsa fdsa fds afds afd afdsa fds afds fas dfa fdsa"
              price="199,00"
            />

          </ProductContainer>

          <HorizontalDivider />

          <SeeMore onPress={() => navigate('Busca')}>
            <SeeMoreText>
              Veja a lista completa
            </SeeMoreText>
          </SeeMore>

        </Card>

        {/* Produtos mais vendidos */}
        <Card >

          <Title>
            Produtos mais vendidos
          </Title>

          <HorizontalDivider />

          {/* Linha de produtos */}
          <ProductContainer>

            <ProductItemMini
              name="Nome do produto"
              category="Categoria"
              shotDescription="Descrição curta dsa dsa fdsa fds afds afd afdsa fds afds fas dfa fdsa"
              price="199,00"
            />

            <VerticalDivider />

            <ProductItemMini
              name="Nome do produto"
              category="Categoria"
              shotDescription="Descrição curta dsa dsa fdsa fds afds afd afdsa fds afds fas dfa fdsa"
              price="199,00"
            />

          </ProductContainer>

          <HorizontalDivider />

          {/* Linha de produtos */}
          <ProductContainer>

          <ProductItemMini
              name="Nome do produto"
              category="Categoria"
              shotDescription="Descrição curta dsa dsa fdsa fds afds afd afdsa fds afds fas dfa fdsa"
              price="199,00"
            />

            <VerticalDivider />

            <ProductItemMini
              name="Nome do produto"
              category="Categoria"
              shotDescription="Descrição curta dsa dsa fdsa fds afds afd afdsa fds afds fas dfa fdsa"
              price="199,00"
            />

          </ProductContainer>

          <HorizontalDivider />

          <SeeMore onPress={() => navigate('Busca')}>
            <SeeMoreText>
              Veja a lista completa
            </SeeMoreText>
          </SeeMore>

        </Card>

      </ScrollView>
    </Container>
  );
}

export default Home;
