import React, { useState, useEffect } from "react";
import { ScrollView, Alert } from "react-native";
import TopBar from "../../../components/Layout/TopBar";
import { IProduct } from "../../../interfaces/IProduct";

import { productService } from "../../../services/productService";

import Solicitante from "../../../components/Ecommerce/Solicitante";
import ProductItem from "../../../components/Ecommerce/ProductItem";
import { Container } from "../../../components/Layout/Container";
import Loader from "../../../components/Layout/Loader";
import Card from "../../../components/Layout/Card";
import { Title } from "../../../components/Typography/Title";
import { Subtitle } from "../../../components/Typography/Subtitle";
import Button from "../../../components/Forms/Button";

import { ProductContainer } from "./styles";

const Busca: React.FC = () => {
  const [loader, setLoader] = useState(true);
  const [products, setProducts] = useState<IProduct[]>([]);

  async function loadProductsFound() {
    const { data } = await productService.getProductsFound();

    if (data) {
      setProducts(data);
    }
  }

  useEffect(() => {
    loadProductsFound();
    if (products.length > 0) {
      setLoader(false);
    }
  }, [products]);

  return (
    <Container>
      {!loader ? null : <Loader />}

      <TopBar title="Buscar" iconSearch drawerMenuLink />
      <Solicitante />

      <ScrollView keyboardShouldPersistTaps="handled">
        {/* Resultado da busca */}

        <Title>Resultado da Busca</Title>

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

export default Busca;
