import React from "react";
import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Avatar } from "react-native-elements";

import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { useAuth } from "../../../../hooks/auth";
import { useEcommerce } from "../../../../hooks/ecommerce";

import {
  DrawerContainer,
  DrawerContent,
  UserInfoSection,
  UserText,
  UserName,
  UserProfile,
  UserSector,
  DrawerSection,
  styles,
  School,
} from "./styles";

export function CustomDrawerContent(props) {
  const { user, logout } = useAuth();
  const { profile, school } = useEcommerce();

  const { navigate } = useNavigation();

  return (
    <DrawerContainer>
      <DrawerContentScrollView {...props}>
        <DrawerContent>
          <UserInfoSection>
            <Avatar
              rounded
              size="medium"
              icon={{ name: "user", type: "font-awesome" }}
              activeOpacity={1}
              containerStyle={{ backgroundColor: "#ccc" }}
            />
            <UserText>
              <UserName textBreakStrategy="simple">{user.name}</UserName>
              <UserSector textBreakStrategy="simple">
                {user.department}
              </UserSector>
            </UserText>
          </UserInfoSection>
          <UserText style={{ marginTop: 10 }}>
            <UserProfile>{profile?.label}</UserProfile>
            <School>{school?.label}</School>
          </UserText>
        </DrawerContent>

        <DrawerSection style={styles.drawerSection}>
          <DrawerItem
            icon={({ color, size }) => (
              <Icon name="key-change" color={color} size={size} />
            )}
            label="Muda Sistema"
            onPress={() => navigate("MudaSistema")}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <Icon name="face-profile" color={color} size={size} />
            )}
            label="Selecionar Perfil"
            onPress={() => navigate("SelecionaPerfil")}
          />
        </DrawerSection>
      </DrawerContentScrollView>
      <DrawerSection style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Sair"
          onPress={() => {
            logout();
          }}
        />
      </DrawerSection>
    </DrawerContainer>
  );
}
