import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";

import AsyncStorage from "@react-native-community/async-storage";
import { useAuth } from "../../../hooks/auth";
import { useEcommerce } from "../../../hooks/ecommerce";

import TopBar from "../../../components/Layout/TopBar";
import Solicitante from "../../../components/Ecommerce/Balance";
import ProductItem from "../../../components/Ecommerce/ProductItem";
import Card from "../../../components/Layout/Card";
import Loader from "../../../components/Layout/Loader";
import { Container } from "../../../components/Layout/Container";
import { Title } from "../../../components/Typography/Title";

import { ProductContainer } from "./styles";

const Favoritos: React.FC = () => {
  const { favoriteProducts, setFavoriteProducts } = useEcommerce();
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    console.log("====================================");
    console.log("favoriteProducts", favoriteProducts);
    console.log("====================================");

    async function loadStorageData(): Promise<void> {
      const userFavoriteProduct = JSON.parse(
        await AsyncStorage.getItem(
          `@Integra:${user?.username}:favoriteProducts`
        )
      );

      if (userFavoriteProduct.length > 0) {
        console.log("====================================");
        console.log("userFavoriteProduct", userFavoriteProduct);
        console.log("====================================");
        setFavoriteProducts(userFavoriteProduct);
      }

      setLoading(false);
    }
    loadStorageData();
  }, []);

  return (
    <Container>
      {!loading ? null : <Loader />}

      <TopBar title="Favoritos" drawerMenuLink />
      <Solicitante />

      <ScrollView keyboardShouldPersistTaps="handled">
        <Title>{favoriteProducts.length} Produtos adicionados</Title>

        {/* Linha de produtos */}
        {favoriteProducts.length === 0
          ? null
          : favoriteProducts.map((product, index) => (
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
            ))}
      </ScrollView>
    </Container>
  );
};

export default Favoritos;
