import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Solicitante from "../../../components/Ecommerce/Solicitante";
import TopBar from "../../../components/Layout/TopBar";
import { Container } from "../../../components/Layout/Container";
import { Title } from "../../../components/Typography/Title";
import { HorizontalDivider } from "../../../components/Layout/HorizontalDivider";
import { VerticalDivider } from "../../../components/Layout/VerticalDivider";
import Card from "../../../components/Layout/Card";
import ProductCategoryIcon from "../../../components/Ecommerce/ProductCategoryIcon";
import ProductItemMini from "../../../components/Ecommerce/ProductItemMini";
import { categoryService } from "../../../services/categoryService";
import { ICategory } from "../../../interfaces/ICategories";

import { ProductContainer, SeeMore, SeeMoreText } from "./styles";

const Home: React.FC = () => {
  const { navigate } = useNavigation();
  const { categoryLoading, setCategoryLoading } = useState(true);
  const { catetegories, setCategories } = useState<ICategory>([]);

  async function loadCategories() {
    const { data } = await categoryService.getCategories();
    console.log("data", data);

    if (data) {
      setCategories(data);
      setCategoryLoading(false);
    }
  }

  useEffect(() => {
    loadCategories();
  }, []);

  return (
    <Container>
      <TopBar title="Início" drawerMenuLink />

      <Solicitante />

      <ScrollView keyboardShouldPersistTaps="handled">
        {/* Categorias */}
        <Card>
          <Title>Categorias</Title>

          <HorizontalDivider />

          <ScrollView horizontal>
            <ProductCategoryIcon
              route="DrawerMenuBusca"
              iconName="restaurant"
              text="Alimentação"
            />
          </ScrollView>
        </Card>

        {/* Produtos em destaque */}
        <Card>
          <Title>Produtos em destaque</Title>

          <HorizontalDivider />

          {/* Linha de produtos */}
          <ProductContainer>
            <ProductItemMini
              name="Nome do produto 1"
              category="Categoria"
              shotDescription="Descrição curta dsa dsa fdsa fds afds afd afdsa fds afds fas dfa fdsa"
              price="199,00"
            />

            <VerticalDivider />

            <ProductItemMini
              name="Nome do produto"
              category="Categoria"
              shotDescription="Descrição curta dsa dsa fdsa fds afds afd afdsa fds afds fas dfa fdsa"
              price="199,00"
            />
          </ProductContainer>

          <HorizontalDivider />

          {/* Linha de produtos */}
          <ProductContainer>
            <ProductItemMini
              name="Nome do produto"
              category="Categoria"
              shotDescription="Descrição curta dsa dsa fdsa fds afds afd afdsa fds afds fas dfa fdsa"
              price="199,00"
            />

            <VerticalDivider />

            <ProductItemMini
              name="Nome do produto"
              category="Categoria"
              shotDescription="Descrição curta dsa dsa fdsa fds afds afd afdsa fds afds fas dfa fdsa"
              price="199,00"
            />
          </ProductContainer>

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
          <ProductContainer>
            <ProductItemMini
              name="Nome do produto"
              category="Categoria"
              shotDescription="Descrição curta dsa dsa fdsa fds afds afd afdsa fds afds fas dfa fdsa"
              price="199,00"
            />

            <VerticalDivider />

            <ProductItemMini
              name="Nome do produto"
              category="Categoria"
              shotDescription="Descrição curta dsa dsa fdsa fds afds afd afdsa fds afds fas dfa fdsa"
              price="199,00"
            />
          </ProductContainer>

          <HorizontalDivider />

          {/* Linha de produtos */}
          <ProductContainer>
            <ProductItemMini
              name="Nome do produto"
              category="Categoria"
              shotDescription="Descrição curta dsa dsa fdsa fds afds afd afdsa fds afds fas dfa fdsa"
              price="199,00"
            />

            <VerticalDivider />

            <ProductItemMini
              name="Nome do produto"
              category="Categoria"
              shotDescription="Descrição curta dsa dsa fdsa fds afds afd afdsa fds afds fas dfa fdsa"
              price="199,00"
            />
          </ProductContainer>

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
