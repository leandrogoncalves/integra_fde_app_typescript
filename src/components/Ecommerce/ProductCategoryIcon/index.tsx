import React from "react";
import { TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Foundation from "react-native-vector-icons/Foundation";

import { Category, CategoryIcon, CategoryText } from "./styles";

const ProductCategoryIcon: React.FC = ({
  children,
  route,
  text,
  color,
  size,
  iconName,
  iconType,
  ...rest
}) => {
  const { navigate } = useNavigation();
  let icon: any = "";

  switch (iconType) {
    case "MaterialCommunityIcons":
      icon = <MaterialCommunityIcons name={iconName} color="white" size={30} />;
      break;

    case "Foundation":
      icon = <Foundation name={iconName} color="white" size={30} />;
      break;

    case "MaterialIcons":
      icon = <MaterialIcons name={iconName} color="white" size={30} />;
      break;

    default:
      icon = (
        <Ionicons name={iconName} color={color || "white"} size={size || 30} />
      );
      break;
  }

  return (
    <TouchableOpacity onPress={() => navigate(route)}>
      <Category>
        <CategoryIcon>{icon}</CategoryIcon>
        <CategoryText>{text}</CategoryText>
      </Category>
    </TouchableOpacity>
  );
};

export default ProductCategoryIcon;
