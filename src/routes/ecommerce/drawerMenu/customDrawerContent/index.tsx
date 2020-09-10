import React from 'react';
import { useAuth } from '../../../../hooks/auth';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Avatar } from "react-native-elements";

import {
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';

import {
  DrawerContainer,
  DrawerContent,
  UserInfoSection,
  UserText,
  UserName,
  UserProfile,
  DrawerSection,
  styles
} from './styles';

export function CustomDrawerContent(props) {
  const { logout } = useAuth();
  const { navigate } = useNavigation();

  return (
    <DrawerContainer>
      <DrawerContentScrollView {...props}>

        <DrawerContent>
          <UserInfoSection>
            <Avatar
              rounded
              size="medium"
              icon={{name: 'user', type: 'font-awesome'}}
              activeOpacity={1}
              containerStyle={{backgroundColor:'#ccc'}}
            />
            <UserText>
              <UserName >Leandro G da Silva</UserName>
              <UserProfile >GSI - FDE</UserProfile>
            </UserText>
          </UserInfoSection>
        </DrawerContent>

        <DrawerSection style={styles.drawerSection}>
          <DrawerItem
            icon={({color, size}) => (
                <Icon
                name="key-change"
                color={color}
                size={size}
                />
            )}
            label="Muda Sistema"
            onPress={() => navigate("MudaSistema")}
          />
          <DrawerItem
           icon={({color, size}) => (
              <Icon
              name="face-profile"
              color={color}
              size={size}
              />
            )}
            label="Selecionar Perfil"
            onPress={() => navigate("SelecionaPerfil")}
          />
        </DrawerSection>
      </DrawerContentScrollView>
      <DrawerSection style={styles.bottomDrawerSection}>
        <DrawerItem
            icon={({color, size}) => (
                <Icon
                name="exit-to-app"
                color={color}
                size={size}
                />
            )}
            label="Sair"
            onPress={() => {logout()}}
        />
      </DrawerSection>
    </DrawerContainer>
  );
}
