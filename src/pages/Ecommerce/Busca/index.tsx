import React from 'react';
import TopBar from '../../../components/Layout/TopBar';
import { Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Solicitante from '../../../components/Ecommerce/Solicitante';

import { Container } from '../../../components/Layout/Container';
import { HorizontalDivider } from '../../../components/Layout/HorizontalDivider';
import { Title } from '../../../components/Typography/Title';
import Card from '../../../components/Layout/Card';
import Button from '../../../components/Forms/Button';
import ProductItem from '../../../components/Ecommerce/ProductItem';

import {
  ProductContainer,
} from './styles';


const Busca: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <Container>
      <TopBar title="Buscar" iconSearch={true} />
      <Solicitante />

      <ScrollView
        keyboardShouldPersistTaps="handled"
      >

        {/* Resultado da busca */}

        <Title>
          Resultado da Busca
        </Title>

        <Card>
          {/* Linha de produtos */}
          <ProductContainer>
            <ProductItem
              name="Nome do produto 1"
              category="Categoria"
              shotDescription="Descrição curta dsa dsa fdsa fds afds afd afdsa fds afds fas dfa fdsa"
              price="199,00"
            />
          </ProductContainer>
        </Card>

        <Card>
          {/* Linha de produtos */}
          <ProductContainer>
            <ProductItem
              name="Nome do produto 1"
              category="Categoria"
              shotDescription="Descrição curta dsa dsa fdsa fds afds afd afdsa fds afds fas dfa fdsa"
              price="199,00"
            />
          </ProductContainer>
        </Card>

        <Card>
          {/* Linha de produtos */}
          <ProductContainer>
            <ProductItem
              name="Nome do produto 1"
              category="Categoria"
              shotDescription="Descrição curta dsa dsa fdsa fds afds afd afdsa fds afds fas dfa fdsa"
              price="199,00"
            />
          </ProductContainer>
        </Card>

        <Card>
          {/* Linha de produtos */}
          <ProductContainer>
            <ProductItem
              name="Nome do produto 1"
              category="Categoria"
              shotDescription="Descrição curta dsa dsa fdsa fds afds afd afdsa fds afds fas dfa fdsa"
              price="199,00"
            />
          </ProductContainer>
        </Card>

        <Card>
          {/* Linha de produtos */}
          <ProductContainer>
            <ProductItem
              name="Nome do produto 1"
              category="Categoria"
              shotDescription="Descrição curta dsa dsa fdsa fds afds afd afdsa fds afds fas dfa fdsa"
              price="199,00"
            />
          </ProductContainer>
        </Card>

        <Card>
          {/* Linha de produtos */}
          <ProductContainer>
            <ProductItem
              name="Nome do produto 1"
              category="Categoria"
              shotDescription="Descrição curta dsa dsa fdsa fds afds afd afdsa fds afds fas dfa fdsa"
              price="199,00"
            />
          </ProductContainer>
        </Card>

        <Button
          title="Carregar mais"
          onPress={()=>Alert.alert('Aviso', 'Carregando')}
        />

      </ScrollView>

    </Container>
  )
}

export default Busca;
