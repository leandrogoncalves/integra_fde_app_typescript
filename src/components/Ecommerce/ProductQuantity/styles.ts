import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import { Colors } from "../../../config/ColorsConfig";
import { Fonts } from "../../../config/FontConfig";

export const Container = styled.View`
  width: ${({ buttonSize }) => (buttonSize ? 90 : 120)}px;
  height: 35px;
  margin-top: 10px;

  flex-direction: row;
  justify-content: space-between;
`;

export const ProductQuantityInput = styled.Text`
  text-align: center;
  padding-top: 2px;
  font-size: 20px;
  width: 35px;
  height: 35px;
  color: #000;
  background-color: #fff;
`;

export const styles = StyleSheet.create({
  buttonContainer: {
    width: 40,
  },
  buttonContainerMini: {
    width: 30,
  },
});
