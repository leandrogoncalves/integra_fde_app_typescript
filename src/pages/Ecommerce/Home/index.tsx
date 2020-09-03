import React from 'react';
import { Text, ScrollView, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Card } from 'react-native-material-ui';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Solicitante from '../../../components/Solicitante';
import TopBar from '../../../components/TopBar';

import {
  Container,
  Title,
  Category,
  CategoryIcon,
  CategoryText,
  VerticalDivider,
  HorizontalDivider,
  Product,
  ProductContainer,
  ProductImage,
  ProductText,
  ProductName,
  ProductCategory,
  ProductShortDescription,
  ProductPrice,
  SeeMore,
  SeeMoreText,
} from './styles';


const Home: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <Container >
      <TopBar title="Início" titleMarginLeft={70} iconExit={true} />

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

            <TouchableOpacity onPress={() => navigate('Busca')}>
              <Category>
                <CategoryIcon>
                  <Ionicons name='restaurant' color="white" size={30} />
                </CategoryIcon>
                <CategoryText>
                  Alimentação
                </CategoryText>
              </Category>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigate('Busca')}>
              <Category>
                <CategoryIcon>
                  <MaterialCommunityIcons name='broom' color="white" size={30} />
                </CategoryIcon>
                <CategoryText>
                  Higiene e Limpeza
                </CategoryText>
              </Category>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigate('Busca')}>
              <Category>
                <CategoryIcon>
                  <MaterialCommunityIcons name='chair-rolling' color="white" size={30} />
                </CategoryIcon>
                <CategoryText>
                  Mobiliário
                </CategoryText>
              </Category>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigate('Busca')}>
              <Category>
                <CategoryIcon>
                  <MaterialCommunityIcons name='power-plug' color="white" size={30} />
                </CategoryIcon>
                <CategoryText>
                  Equipamentos
                </CategoryText>
              </Category>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigate('Busca')}>
              <Category>
                <CategoryIcon>
                  <Foundation name='page' color="white" size={30} />
                </CategoryIcon>
                <CategoryText>
                  Papelaria
                </CategoryText>
              </Category>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigate('Busca')}>
              <Category>
                <CategoryIcon>
                  <MaterialIcons name='computer' color="white" size={30} />
                </CategoryIcon>
                <CategoryText>
                  Informática
                </CategoryText>
              </Category>
            </TouchableOpacity>

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

            <Product>
              <TouchableOpacity onPress={() => navigate('ProdutoTabs')}>
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
              </TouchableOpacity>
            </Product>

            <VerticalDivider />

            <Product>
              <TouchableOpacity onPress={() => navigate('ProdutoTabs')}>
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
              </TouchableOpacity>
            </Product>

          </ProductContainer>

          <HorizontalDivider />

          {/* Linha de produtos */}
          <ProductContainer>

            <Product>
              <TouchableOpacity onPress={() => navigate('ProdutoTabs')}>
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
              </TouchableOpacity>
            </Product>

            <VerticalDivider />

            <Product>
              <TouchableOpacity onPress={() => navigate('ProdutoTabs')}>
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
              </TouchableOpacity>
            </Product>

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

            <Product>
              <TouchableOpacity onPress={() => navigate('ProdutoTabs')}>
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
              </TouchableOpacity>
            </Product>

            <VerticalDivider />

            <Product>
              <TouchableOpacity onPress={() => navigate('ProdutoTabs')}>
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
              </TouchableOpacity>
            </Product>

          </ProductContainer>

          <HorizontalDivider />

          {/* Linha de produtos */}
          <ProductContainer>

            <Product>
              <TouchableOpacity onPress={() => navigate('ProdutoTabs')}>
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
              </TouchableOpacity>
            </Product>

            <VerticalDivider />

            <Product>
              <TouchableOpacity onPress={() => navigate('ProdutoTabs')}>
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
              </TouchableOpacity>
            </Product>

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
