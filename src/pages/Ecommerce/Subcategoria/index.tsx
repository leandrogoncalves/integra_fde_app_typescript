import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Feather from "react-native-vector-icons/Feather";

import { useAuth } from "../../../hooks/auth";
import { useEcommerce } from "../../../hooks/ecommerce";

import { ISubcategory } from "../../../interfaces/ISubcategories";
import subcategoryService from "../../../services/subcategoryService";

import ListItem from "../../../components/Layout/ListItem";
import Balance from "../../../components/Ecommerce/Balance";
import Loader from "../../../components/Layout/Loader";
import TopBar from "../../../components/Layout/TopBar";
import Card from "../../../components/Layout/Card";
import { Container } from "../../../components/Layout/Container";
import { Title } from "../../../components/Typography/Title";
import { ICategory } from "../../../interfaces/ICategories";
import { Subtitle } from "../../../components/Typography/Subtitle";

const Subcategoria: React.FC = () => {
  const { token, logout } = useAuth();
  if (!token) logout();
  subcategoryService.setToken(token);

  const [loader, setLoader] = useState(true);
  const [subcategories, setSubcategories] = useState<ICategory[]>();
  const { categorySelected, setSubcategorySelected } = useEcommerce();

  const { navigate } = useNavigation();

  async function loadSubcategories() {
    const { data } = await subcategoryService.getSubcategories(
      categorySelected.id
    );

    if (data) {
      setSubcategories(data);
    }
  }

  const handleClickCategoy = (subcategory: ISubcategory) => {
    setSubcategorySelected(subcategory);
    navigate("ResultadoBusca");
  };

  useEffect(() => {
    if (!subcategories) {
      loadSubcategories();
    } else if (Array.isArray(subcategories) && subcategories.length > 0) {
      setLoader(false);
    } else {
      setLoader(false);
      navigate("ResultadoBusca");
    }
  }, [subcategories]);

  return (
    <Container>
      {!loader ? null : <Loader />}

      <TopBar title="Buscar" titleMarginLeft={-40} iconSearch iconBack />
      <Balance />

      <ScrollView keyboardShouldPersistTaps="handled">
        <Title>Subcategorias</Title>

        <Card>
          {!Array.isArray(subcategories) ? (
            <Subtitle>Carregando...</Subtitle>
          ) : (
            subcategories.map((subcategory) => (
              <ListItem
                key={subcategory.id}
                divider
                dense
                title={subcategory.text}
                rightElement={
                  <Feather name="chevron-right" size={25} color="#999" />
                }
                style={{
                  marginBottom: 5,
                }}
                onPress={() => handleClickCategoy(subcategory)}
              />
            ))
          )}
        </Card>
      </ScrollView>
    </Container>
  );
};

export default Subcategoria;
