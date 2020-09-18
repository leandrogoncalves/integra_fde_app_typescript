import React from "react";
import { Alert, TextInput, TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

import { Container } from "../../../components/Layout/Container";
import ListItem from "../../../components/Layout/ListItem";

const HistoricoBusca: React.FC = () => {
  const { goBack } = useNavigation();

  const handleClick = () => {
    Alert.alert("Buscar", "Buscando");
  };

  return (
    <Container>
      <ListItem
        divider
        dense
        margin={{ top: 20 }}
        padding={{ bottom: 0 }}
        leftElement={(
          <>
            <TouchableOpacity onPress={() => goBack()}>
              <MaterialIcons name="keyboard-backspace" size={24} color="gray" />
            </TouchableOpacity>
          </>
        )}
        rightElement={(
          <>
            <TouchableOpacity onPress={() => handleClick()}>
              <Ionicons name="search" size={24} color="gray" />
            </TouchableOpacity>
          </>
        )}
        centerElement={(
          <TextInput
            placeholder="Buscar"
            style={{ width: "80%", fontSize: 18 }}
          />
        )}
      />
    </Container>
  );
};

export default HistoricoBusca;
