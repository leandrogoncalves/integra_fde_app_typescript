import React, { useState, useEffect } from "react";
import { ScrollView, Alert } from "react-native";

import { useAuth } from "../../../hooks/auth";
import productService from "../../../services/productService";

import TopBar from "../../../components/Layout/TopBar";
import Solicitante from "../../../components/Ecommerce/Balance";
import ProductItem from "../../../components/Ecommerce/ProductItem";
import Loader from "../../../components/Layout/Loader";
import Button from "../../../components/Forms/Button";
import Card from "../../../components/Layout/Card";
import { IProduct } from "../../../interfaces/IProduct";
import { Container } from "../../../components/Layout/Container";
import { Title } from "../../../components/Typography/Title";
import { Subtitle } from "../../../components/Typography/Subtitle";

import { ProductContainer } from "./styles";

const ResultadoBusca: React.FC = () => {
  const { token } = useAuth();
  productService.setToken(token);
  const [loader, setLoader] = useState(true);
  const [products, setProducts] = useState<IProduct[]>([]);

  async function loadProductsFound() {
    const { data } = await productService.getProductsFound();

    if (data) {
      setProducts(data);
    }
  }

  useEffect(() => {
    if (products.length === 0) {
      loadProductsFound();
    } else {
      setLoader(false);
    }
  }, [products]);

  return (
    <Container>
      {!loader ? null : <Loader />}

      <TopBar title="Resultado da Busca" iconSearch iconBack />
      <Solicitante />

      <ScrollView keyboardShouldPersistTaps="handled">
        {/* Resultado da busca */}

        <Title>8 Resultados encontrados</Title>

        {/* Linha de produtos */}
        {products.length === 0 ? (
          <Card>
            <Subtitle>Carregando...</Subtitle>
          </Card>
        ) : (
          products.map((product, index) => (
            <Card key={index}>
              <ProductContainer>
                <ProductItem
                  name={product.name}
                  category={product.category}
                  images={product.images}
                  shotDescription={product.shotDescription}
                  price={product.price}
                  product={product}
                />
              </ProductContainer>
            </Card>
          ))
        )}

        {products.length === 0 ? null : (
          <Button
            title="Carregar mais"
            onPress={() => Alert.alert("Aviso", "Carregando")}
          />
        )}
      </ScrollView>
    </Container>
  );
};

export default ResultadoBusca;
