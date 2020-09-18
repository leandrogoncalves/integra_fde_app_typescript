import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native";

import Feather from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import categoryService from "../../../services/categoryService";

import Balance from "../../../components/Ecommerce/Balance";
import TopBar from "../../../components/Layout/TopBar";
import Loader from "../../../components/Layout/Loader";
import Card from "../../../components/Layout/Card";
import ListItem from "../../../components/Layout/ListItem";
import { Container } from "../../../components/Layout/Container";
import { Title } from "../../../components/Typography/Title";
import { Subtitle } from "../../../components/Typography/Subtitle";
import { ICategory } from "../../../interfaces/ICategories";

import { useEcommerce } from "../../../hooks/ecommerce";
import { useAuth } from "../../../hooks/auth";

const Categoria: React.FC = () => {
  const { token, logout } = useAuth();
  if (!token) logout();
  categoryService.setToken(token);

  const [loader, setLoader] = useState(true);
  const [categories, setCategories] = useState<ICategory[]>([]);
  const { familySelected, setCategorySelected } = useEcommerce();

  const { navigate } = useNavigation();

  async function loadCategories() {
    const { data } = await categoryService.getCategories(familySelected.id);

    if (data) {
      setCategories(data);
    }
  }

  const handleClickCategoy = (category: ICategory) => {
    setCategorySelected(category);
    navigate("Subcategoria");
  };

  useEffect(() => {
    if (categories.length === 0) {
      loadCategories();
    } else {
      setLoader(false);
    }
  }, [categories]);

  return (
    <Container>
      {!loader ? null : <Loader />}

      <TopBar title={familySelected?.text} iconSearch iconBack />
      <Balance />

      <ScrollView keyboardShouldPersistTaps="handled">
        <Title>Categorias</Title>

        <Card>
          {categories.length === 0 ? (
            <Subtitle>Carregando...</Subtitle>
          ) : (
            categories.map((category, index) => (
              // eslint-disable-next-line react/jsx-indent
              <ListItem
                key={category.id}
                divider
                dense
                title={category.text}
                // eslint-disable-next-line react/jsx-indent-props
                rightElement={
                  <Feather name="chevron-right" size={25} color="#999" />
                }
                style={{
                  marginBottom: 5,
                }}
                onPress={() => handleClickCategoy(category)}
              />
            ))
          )}
        </Card>
      </ScrollView>
    </Container>
  );
};

export default Categoria;
