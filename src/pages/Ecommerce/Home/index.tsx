import React, { useState, useEffect } from "react";
import { ScrollView, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../../hooks/auth";

import { ICategory } from "../../../interfaces/ICategories";
import { IProduct } from "../../../interfaces/IProduct";

import { productService } from "../../../services/productService";
import { categoryService } from "../../../services/categoryService";

import Solicitante from "../../../components/Ecommerce/Solicitante";
import TopBar from "../../../components/Layout/TopBar";
import { Container } from "../../../components/Layout/Container";
import { Title } from "../../../components/Typography/Title";
import { Subtitle } from "../../../components/Typography/Subtitle";
import { HorizontalDivider } from "../../../components/Layout/HorizontalDivider";
import { VerticalDivider } from "../../../components/Layout/VerticalDivider";
import ProductCategoryIcon from "../../../components/Ecommerce/ProductCategoryIcon";
import ProductItemMini from "../../../components/Ecommerce/ProductItemMini";
import Card from "../../../components/Layout/Card";
import Loader from "../../../components/Layout/Loader";

import { ProductContainer, SeeMore, SeeMoreText } from "./styles";

const Home: React.FC = () => {
  const { token } = useAuth();
  categoryService.token = token;
  productService.token = token;

  const { navigate } = useNavigation();
  const [loader, setLoader] = useState(true);
  const [categories, setCategories] = useState<ICategory>([]);
  const [productsHighlights, setProductsHighlights] = useState<IProduct>([]);
  const [productsMoreSolded, setProductsMoreSolded] = useState<IProduct>([]);

  async function loadCategories() {
    const { data } = await categoryService.getCategories();

    if (data) {
      setCategories(data);
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
    loadCategories();
    loadProductHighlight();
    loadProductsMoreSolded();
    if (categories && productsHighlights && productsMoreSolded) {
      setLoader(false);
    }
  }, []);

  return (
    <Container>
      {!loader ? null : <Loader />}

      <TopBar title="Início" drawerMenuLink />

      <Solicitante />

      <ScrollView keyboardShouldPersistTaps="handled">
        {/* Categorias */}
        <Card>
          <Title>Categorias</Title>

          <HorizontalDivider />

          <ScrollView horizontal>
            {!categories ? (
              <Subtitle>Carregando...</Subtitle>
            ) : (
              categories.map((category, index) => (
                <ProductCategoryIcon
                  key={index}
                  id={category.id}
                  route={category.route}
                  iconName={category.icon}
                  iconType={category.iconType}
                  text={category.text}
                />
              ))
            )}
          </ScrollView>
        </Card>

        {/* Produtos em destaque */}
        <Card>
          <Title>Produtos em destaque</Title>

          <HorizontalDivider />

          {/* Linha de produtos */}
          {!productsHighlights ? (
            <Subtitle>Carregando...</Subtitle>
          ) : (
            productsHighlights.map(({ productList }, index) => (
              <ProductContainer key={index}>
                {productList.map((product, index) => (
                  <>
                    <ProductItemMini
                      key={product.id}
                      id={product.id}
                      name={product.name}
                      category={product.category}
                      images={product.images}
                      shotDescription={product.shotDescription}
                      price={product.price}
                      product={product}
                    />
                    {index % 2 !== 0 ? null : <VerticalDivider />}
                  </>
                ))}
              </ProductContainer>
            ))
          )}

          <HorizontalDivider />

          <SeeMore onPress={() => navigate("Busca")}>
            <SeeMoreText>Veja a lista completa</SeeMoreText>
          </SeeMore>
        </Card>

        {/* Produtos mais vendidos */}
        <Card>
          <Title>Produtos mais vendidos</Title>

          <HorizontalDivider />

          {/* Linha de produtos */}
          {!productsMoreSolded ? (
            <Subtitle>Carregando...</Subtitle>
          ) : (
            productsMoreSolded.map(({ productList }) => (
              <ProductContainer>
                {productList.map((product, index) => (
                  <>
                    <ProductItemMini
                      id={product.id}
                      name={product.name}
                      category={product.category}
                      images={product.images}
                      shotDescription={product.shotDescription}
                      price={product.price}
                      product={product}
                    />
                    {index % 2 !== 0 ? null : <VerticalDivider />}
                  </>
                ))}
              </ProductContainer>
            ))
          )}

          <HorizontalDivider />

          <SeeMore onPress={() => navigate("Busca")}>
            <SeeMoreText>Veja a lista completa</SeeMoreText>
          </SeeMore>
        </Card>
      </ScrollView>
    </Container>
  );
};

export default Home;
