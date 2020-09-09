import React from 'react';
import TopBar from '../../../components/Layout/TopBar';
import { Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Solicitante from '../../../components/Ecommerce/Solicitante';

import { Container } from '../../../components/Layout/Container';
import { HorizontalDivider } from '../../../components/Layout/HorizontalDivider';
import { Title } from '../../../components/Typography/Title';
import Card from '../../../components/Layout/Card';
import Button from '../../../components/Forms/Button';

import {
  Product,
  ProductContainer,
  ProductImage,
  ProductText,
  ProductName,
  ProductCategory,
  ProductShortDescription,
  ProductPrice,
} from './styles';


const Busca: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <Container>
      <TopBar title="Buscar" iconSearch={true} titleMarginLeft={60} />
      <Solicitante />

      <ScrollView
        keyboardShouldPersistTaps="handled"
      >

      {/* Resultado da busca */}
      <Card >

        <Title>
          Resultado da Busca
        </Title>

        <HorizontalDivider />

        {/* Linha de produtos */}
        <ProductContainer>

          <Product>
            <TouchableOpacity onPress={() => navigate('Produto')}>
              <ProductImage>
                <Text style={{color: 'white'}}>
                  Imagem do produto
                </Text>
              </ProductImage>
              <ProductText>
                <ProductName>
                  <Ionicons name="bookmark" size={15} />
                    Nome do produto
                </ProductName>
                <ProductCategory>
                  <FontAwesome name="circle" size={15} style={{marginRight:10}} />
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
            </TouchableOpacity>
          </Product>

        </ProductContainer>

        <HorizontalDivider />

        {/* Linha de produtos */}
        <ProductContainer>

          <Product>
            <TouchableOpacity onPress={() => navigate('Produto')}>
              <ProductImage>
                <Text style={{color: 'white'}}>
                  Imagem do produto
                </Text>
              </ProductImage>
              <ProductText>
                <ProductName>
                  <Ionicons name="bookmark" size={15} />
                    Nome do produto
                </ProductName>
                <ProductCategory>
                  <FontAwesome name="circle" size={15} style={{marginRight:10}} />
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
            </TouchableOpacity>
          </Product>

        </ProductContainer>

        <HorizontalDivider />

        {/* Linha de produtos */}
        <ProductContainer>

          <Product>
            <TouchableOpacity onPress={() => navigate('Produto')}>
              <ProductImage>
                <Text style={{color: 'white'}}>
                  Imagem do produto
                </Text>
              </ProductImage>
              <ProductText>
                <ProductName>
                  <Ionicons name="bookmark" size={15} />
                    Nome do produto
                </ProductName>
                <ProductCategory>
                  <FontAwesome name="circle" size={15} style={{marginRight:10}} />
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
            </TouchableOpacity>
          </Product>

        </ProductContainer>

        <HorizontalDivider />

        {/* Linha de produtos */}
        <ProductContainer>

          <Product>
            <TouchableOpacity onPress={() => navigate('Produto')}>
              <ProductImage>
                <Text style={{color: 'white'}}>
                  Imagem do produto
                </Text>
              </ProductImage>
              <ProductText>
                <ProductName>
                  <Ionicons name="bookmark" size={15} />
                    Nome do produto
                </ProductName>
                <ProductCategory>
                  <FontAwesome name="circle" size={15} style={{marginRight:10}} />
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
            </TouchableOpacity>
          </Product>

        </ProductContainer>

        <HorizontalDivider />

        {/* Linha de produtos */}
        <ProductContainer>

          <Product>
            <TouchableOpacity onPress={() => navigate('Produto')}>
              <ProductImage>
                <Text style={{color: 'white'}}>
                  Imagem do produto
                </Text>
              </ProductImage>
              <ProductText>
                <ProductName>
                  <Ionicons name="bookmark" size={15} />
                    Nome do produto
                </ProductName>
                <ProductCategory>
                  <FontAwesome name="circle" size={15} style={{marginRight:10}} />
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
            </TouchableOpacity>
          </Product>

        </ProductContainer>

        <HorizontalDivider />

        {/* Linha de produtos */}
        <ProductContainer>

          <Product>
            <TouchableOpacity onPress={() => navigate('Produto')}>
              <ProductImage>
                <Text style={{color: 'white'}}>
                  Imagem do produto
                </Text>
              </ProductImage>
              <ProductText>
                <ProductName>
                  <Ionicons name="bookmark" size={15} />
                    Nome do produto
                </ProductName>
                <ProductCategory>
                  <FontAwesome name="circle" size={15} style={{marginRight:10}} />
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
            </TouchableOpacity>
          </Product>

        </ProductContainer>


        </Card>

      <Button raised primary text="Carregar mais" onPress={()=>Alert.alert('Aviso', 'Carregando')} />
      </ScrollView>

    </Container>
  )
}

export default Busca;
