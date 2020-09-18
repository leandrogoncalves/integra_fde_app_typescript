import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Foundation from "react-native-vector-icons/Foundation";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import { familyService } from "../../../services/familyService";

import Balance from "../../../components/Ecommerce/Balance";
import TopBar from "../../../components/Layout/TopBar";
import Loader from "../../../components/Layout/Loader";
import Card from "../../../components/Layout/Card";
import ListItem from "../../../components/Layout/ListItem";
import { Container } from "../../../components/Layout/Container";
import { Title } from "../../../components/Typography/Title";
import { Subtitle } from "../../../components/Typography/Subtitle";
import { IFamily } from "../../../interfaces/IFamily";

import { FamilyIcon } from "./styles";
import { useEcommerce } from "../../../hooks/ecommerce";

const Familia: React.FC = () => {
  const [loader, setLoader] = useState(true);
  const [families, setFamilies] = useState<IFamily[]>([]);
  const { setFamilySelected } = useEcommerce();

  const { navigate } = useNavigation();

  async function loadFamilies() {
    const { data } = await familyService.getFamilies();

    if (data) {
      setFamilies(data);
    }
  }

  const selectIcon = (family: IFamily) => {
    let icon = null;
    switch (family.iconType) {
      case "MaterialCommunityIcons":
        icon = (
          <MaterialCommunityIcons name={family.icon} color="white" size={30} />
        );
        break;

      case "Foundation":
        icon = <Foundation name={family.icon} color="white" size={30} />;
        break;

      case "MaterialIcons":
        icon = <MaterialIcons name={family.icon} color="white" size={30} />;
        break;

      default:
        icon = <Ionicons name={family.icon} color="white" size={30} />;
        break;
    }

    return <FamilyIcon>{icon}</FamilyIcon>;
  };

  const handleClickCategoy = (family: IFamily) => {
    setFamilySelected(family);
    navigate("Categoria");
  };

  useEffect(() => {
    if (families.length === 0) {
      loadFamilies();
    } else {
      setLoader(false);
    }
  }, [families]);

  return (
    <Container>
      {!loader ? null : <Loader />}

      <TopBar title="Buscar" iconSearch drawerMenuLink />
      <Balance />

      <ScrollView keyboardShouldPersistTaps="handled">
        <Title>Familias</Title>

        <Card>
          {families.length === 0 ? (
            <Subtitle>Carregando...</Subtitle>
          ) : (
            families.map((family, index) => (
              // eslint-disable-next-line react/jsx-indent
              <ListItem
                key={family.id}
                divider
                dense
                title={family.text}
                leftElement={selectIcon(family)}
                // eslint-disable-next-line react/jsx-indent-props
                rightElement={
                  <Feather name="chevron-right" size={25} color="#999" />
                }
                style={{
                  marginBottom: 5,
                }}
                onPress={() => handleClickCategoy(family)}
              />
            ))
          )}
        </Card>
      </ScrollView>
    </Container>
  );
};

export default Familia;
