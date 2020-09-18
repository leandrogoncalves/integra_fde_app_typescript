import { StyleSheet } from "react-native";
import styled from "styled-components/native";
// import { Colors } from '../../config/ColorsConfig';
import { Fonts } from "../../../config/FontConfig";

export const DrawerContainer = styled.View`
  flex: 1;
`;

export const DrawerContent = styled.View`
  flex: 1;
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
`;

export const DrawerSection = styled.View`
  border-top-width: 1px;
  border-top-color: #ccc;
  border-bottom-color: #ccc;
  border-bottom-width: 1px;
`;

export const UserInfoSection = styled.View`
  padding-left: 20px;
  flex-direction: row;
  margin-top: 15px;
`;

export const UserText = styled.View`
  margin-left: 15px;
  flex-direction: column;
  margin-right: 50px;
`;

export const UserName = styled.Text`
  font-size: 16px;
  margin-top: 3px;
  font-family: ${Fonts.family.bold};
`;

export const UserSector = styled.Text`
  font-size: 14px;
  font-family: ${Fonts.family.default};
  line-height: 14px;
`;

export const UserProfile = styled.Text`
  font-size: 13px;
  font-family: ${Fonts.family.bold};
  line-height: 14px;
`;
export const School = styled.Text`
  font-size: 12px;
  font-family: ${Fonts.family.default};
  line-height: 16px;
`;

export const styles = StyleSheet.create({
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
});
