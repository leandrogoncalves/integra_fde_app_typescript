import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Container } from '../../../../components/Layout/Container';
import Card from '../../../../components/Layout/Card';

import {
  ProductText,
  ProductName,
  ProductCategory,
  ProductDescription,
} from './styles';


const ProdutoInformacoes: React.FC = () => {
  return (
    <Container>
      <Card>
        <ProductText>
          <ProductName>
            <Ionicons name="bookmark" size={15} />
              Nome do produto
          </ProductName>
          <ProductCategory>
            <FontAwesome name="certificate" size={15} style={{marginRight:10}} />
            Categoria
          </ProductCategory>
          <ProductDescription>
            Descrição Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et sem eu turpis dignissim egestas eu in justo. Sed eu enim tristique, suscipit mi eu, congue dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam convallis nisi tortor, ut faucibus lectus ultrices non. Nulla facilisi. Morbi at blandit risus. Quisque ut mollis dolor.
          </ProductDescription>
        </ProductText>
      </Card>
    </Container>
  );
}

export default ProdutoInformacoes;
