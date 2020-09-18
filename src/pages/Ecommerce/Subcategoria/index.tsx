import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Feather from "react-native-vector-icons/Feather";

import Balance from "../../../components/Ecommerce/Balance";
import Loader from "../../../components/Layout/Loader";
import TopBar from "../../../components/Layout/TopBar";
import Card from "../../../components/Layout/Card";
import { Container } from "../../../components/Layout/Container";
import { Title } from "../../../components/Typography/Title";
import { categoryService } from "../../../services/categoryService";
import { ICategory } from "../../../interfaces/ICategories";
import { Subtitle } from "../../../components/Typography/Subtitle";
import ListItem from "../../../components/Layout/ListItem";
import { useEcommerce } from "../../../hooks/ecommerce";

// import { Container } from './styles';

const Subcategoria: React.FC = () => {
  const [loader, setLoader] = useState(true);
  const [categories, setCategories] = useState<ICategory[]>([]);
  const { categorySelected, setSubcategorySelected } = useEcommerce();

  const { navigate } = useNavigation();

  async function loadCategories() {
    const { data } = await categoryService.getCategories();

    if (data) {
      setCategories(data);
    }
  }

  const handleClickCategoy = (category: ICategory) => {
    setSubcategorySelected(category);
    navigate("ResultadoBusca");
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

      <TopBar
        title={categorySelected?.text}
        titleMarginLeft={-10}
        iconSearch
        iconBack
      />
      <Balance />

      <ScrollView keyboardShouldPersistTaps="handled">
        <Title>Subcategorias</Title>

        <Card>
          {categories.length === 0 ? (
            <Subtitle>Carregando...</Subtitle>
          ) : (
            categories.map((category, index) => (
              <ListItem
                key={category.id}
                divider
                dense
                title={category.text}
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

export default Subcategoria;
