import React from "react";
import { Image, Text, View, TouchableOpacity } from "react-native";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import { Header } from "react-native-elements";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useAuth } from "../../../hooks/auth";

import logoImg from "../../../assets/geral/logo_fde_negativo_mini.png";

const TopBar: React.FC = ({
  iconBack,
  title,
  titleMarginLeft,
  iconExit,
  iconCart,
  iconSearch,
  drawerMenuLink,
}) => {
  const { logout } = useAuth();
  const { navigate, goBack, dispatch } = useNavigation();

  return (
    <Header
      leftComponent={(
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          {iconBack ? (
            <>
              <TouchableOpacity onPress={() => goBack()}>
                <Ionicons name="arrow-back-sharp" size={30} color="white" />
              </TouchableOpacity>
            </>
          ) : (
            <TouchableOpacity
              onPress={() =>
                drawerMenuLink && dispatch(DrawerActions.toggleDrawer())
              }
            >
              <Image source={logoImg} style={{ height: 40, width: 80 }} />
            </TouchableOpacity>
          )}
        </View>
      )}
      centerComponent={(
        <Text
          style={{ color: "white", marginLeft: titleMarginLeft, fontSize: 20 }}
        >
          {title}
        </Text>
      )}
      rightComponent={(
        <>
          {iconExit ? (
            <TouchableOpacity onPress={() => logout()}>
              <Ionicons name="exit-outline" color="white" size={25} />
            </TouchableOpacity>
          ) : (
            <></>
          )}
          {iconCart ? (
            <TouchableOpacity onPress={() => navigate("Pedidos")}>
              <MaterialCommunityIcons name="cart" size={24} color="white" />
            </TouchableOpacity>
          ) : (
            <></>
          )}
          {iconSearch ? (
            <TouchableOpacity onPress={() => navigate("HistoricoBusca")}>
              <Ionicons name="search" size={24} color="white" />
            </TouchableOpacity>
          ) : (
            <></>
          )}
        </>
      )}
      containerStyle={{ backgroundColor: "#2f4050" }}
    />
  );
};

export default TopBar;
