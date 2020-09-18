import React from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Foundation from "react-native-vector-icons/Foundation";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useEcommerce } from "../../../hooks/ecommerce";

import { Family, FamilyIcon, FamilyText } from "./styles";

const ProductFamilyIcon: React.FC = ({ children, family, ...rest }) => {
  const { navigate } = useNavigation();
  const { setFamilySelected } = useEcommerce();
  let icon: any = "";

  const handleClick = () => {
    setFamilySelected(family);
    navigate("Categoria");
  };

  switch (family?.iconType) {
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

  return (
    <TouchableOpacity onPress={() => handleClick()} {...rest} key={family.id}>
      <Family>
        <FamilyIcon>{icon}</FamilyIcon>
        <FamilyText>{family.text}</FamilyText>
      </Family>
    </TouchableOpacity>
  );
};

export default ProductFamilyIcon;
