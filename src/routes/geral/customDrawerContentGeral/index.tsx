import React from "react";
import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Avatar } from "react-native-elements";

import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { useAuth } from "../../../hooks/auth";
import { useEcommerce } from "../../../hooks/ecommerce";

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

export function CustomDrawerContentGeral(props) {
  const { user, logout } = useAuth();

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
        </DrawerContent>
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
