import React, { useState, useEffect } from "react";
import { ScrollView, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { useAuth } from "../../../hooks/auth";
import { useEcommerce } from "../../../hooks/ecommerce";

import { IProduct } from "../../../interfaces/IProduct";

import productService from "../../../services/productService";
import familyService from "../../../services/familyService";

import Balance from "../../../components/Ecommerce/Balance";
import TopBar from "../../../components/Layout/TopBar";
import { Container } from "../../../components/Layout/Container";
import { Title } from "../../../components/Typography/Title";
import { Subtitle } from "../../../components/Typography/Subtitle";
import { HorizontalDivider } from "../../../components/Layout/HorizontalDivider";
import { VerticalDivider } from "../../../components/Layout/VerticalDivider";
import ProductFamilyIcon from "../../../components/Ecommerce/ProductFamilyIcon";
import ProductItemMini from "../../../components/Ecommerce/ProductItemMini";
import Card from "../../../components/Layout/Card";
import Loader from "../../../components/Layout/Loader";

import { ProductContainer, SeeMore, SeeMoreText } from "./styles";
import { IFamily } from "../../../interfaces/IFamily";

const Home: React.FC = () => {
  const { token, logout } = useAuth();
  if (!token) logout();

  familyService.setToken(token);
  productService.setToken(token);

  const { school } = useEcommerce();
  const { navigate } = useNavigation();
  const [loader, setLoader] = useState(true);
  const [families, setFamilies] = useState<IFamily[]>([]);
  const [productsHighlights, setProductsHighlights] = useState<IProduct[]>([]);
  const [productsMoreSolded, setProductsMoreSolded] = useState<IProduct[]>([]);

  async function loadFamilies() {
    const { data } = await familyService.getFamilies(school.value);

    if (data) {
      setFamilies(data);
    }
  }

  async function loadProductHighlight() {
    const { data } = await productService.getProductsHighlight();

    if (data) {
      setProductsHighlights(data);
    }
  }

  async function loadProductsMoreSolded() {
    const { data } = await productService.getProductsMoreSolded();

    if (data) {
      setProductsMoreSolded(data);
    }
  }

  useEffect(() => {
    if (
      families.length === 0 ||
      productsHighlights.length === 0 ||
      productsMoreSolded.length === 0
    ) {
      loadFamilies();
      loadProductHighlight();
      loadProductsMoreSolded();
    } else {
      setLoader(false);
    }
  }, [families, productsHighlights, productsMoreSolded]);

  return (
    <Container>
      {!loader ? null : <Loader />}

      <TopBar title="Início" drawerMenuLink />

      <Balance />

      <ScrollView keyboardShouldPersistTaps="handled">
        {/* Familias */}
        <Card>
          <Title>Familias</Title>

          <HorizontalDivider />

          <ScrollView horizontal>
            {families.length === 0 ? (
              <Subtitle>Carregando...</Subtitle>
            ) : (
              families?.map((family) => (
                <ProductFamilyIcon key={family.id} family={family} />
              ))
            )}
          </ScrollView>
        </Card>

        {/* Produtos em destaque */}
        <Card>
          <Title>Produtos em destaque</Title>

          <HorizontalDivider />

          {/* Linha de produtos */}
          {productsHighlights.length === 0 ? (
            <Subtitle>Carregando...</Subtitle>
          ) : (
            productsHighlights?.map(({ productList }, index) => (
              <React.Fragment key={index}>
                <ProductContainer>
                  {productList.map((product, index) => (
                    <>
                      <ProductItemMini product={product} />
                      {index % 2 !== 0 ? null : <VerticalDivider />}
                    </>
                  ))}
                </ProductContainer>

                <HorizontalDivider style={{ marginTop: 20 }} />
              </React.Fragment>
            ))
          )}

          {productsHighlights.length === 0 ? null : (
            <SeeMore onPress={() => navigate("ResultadoBusca")}>
              <SeeMoreText>Veja a lista completa</SeeMoreText>
            </SeeMore>
          )}
        </Card>

        {/* Produtos mais vendidos */}
        <Card>
          <Title>Produtos mais vendidos</Title>

          <HorizontalDivider />

          {/* Linha de produtos */}
          {productsMoreSolded.length === 0 ? (
            <Subtitle>Carregando...</Subtitle>
          ) : (
            productsMoreSolded?.map(({ productList }, index) => (
              <React.Fragment key={index}>
                <ProductContainer>
                  {productList.map((product, index) => (
                    <>
                      <ProductItemMini product={product} />
                      {index % 2 !== 0 ? null : <VerticalDivider />}
                    </>
                  ))}
                </ProductContainer>

                <HorizontalDivider style={{ marginTop: 20 }} />
              </React.Fragment>
            ))
          )}

          {productsMoreSolded.length === 0 ? null : (
            <SeeMore onPress={() => navigate("ResultadoBusca")}>
              <SeeMoreText>Veja a lista completa</SeeMoreText>
            </SeeMore>
          )}
        </Card>
      </ScrollView>
    </Container>
  );
};

export default Home;
