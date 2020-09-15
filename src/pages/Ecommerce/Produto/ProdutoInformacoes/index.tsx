import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Container } from "../../../../components/Layout/Container";
import Card from "../../../../components/Layout/Card";
import { useEcommerce } from "../../../../hooks/ecommerce";

import {
  ProductText,
  ProductName,
  ProductCategory,
  ProductDescription,
} from "./styles";

const ProdutoInformacoes: React.FC = () => {
  const { productDetail } = useEcommerce();

  return (
    <Container>
      <Card>
        <ProductText>
          <ProductName>
            <Ionicons name="bookmark" size={15} />
            {productDetail?.name}
          </ProductName>
          <ProductCategory>
            <FontAwesome
              name="certificate"
              size={15}
              style={{ marginRight: 10 }}
            />
            {productDetail?.category}
          </ProductCategory>
          <ProductDescription>
            {productDetail?.fullDescription}
          </ProductDescription>
        </ProductText>
      </Card>
    </Container>
  );
};

export default ProdutoInformacoes;
